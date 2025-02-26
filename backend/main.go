package main

import (
	"fmt"
	"net/http"
	"gopkg.in/gomail.v2"
	"backend/settings"
	"github.com/gin-gonic/gin"
)

type Email struct {
	Name string
	City string
	Phone string
}

var config *settings.Config

func main() {
	router := gin.Default()

	router.Use(func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(http.StatusOK)
		} else {
			c.Next()
		}
	})

	routerAPI := router.Group("/api")

	config = settings.LoadSetting("settings.json")

	routerAPI.POST("/email", handlerEmail)

	router.Run("localhost:8080")
}

func handlerEmail(c *gin.Context) {
	var emailData Email

	if err := c.BindJSON(&emailData); err != nil {
		c.JSON(400, false)
		return
	}

	// Формирование сообщения
	msg := gomail.NewMessage()
	msg.SetHeader("From", config.From)
	msg.SetHeader("To", config.To)
	msg.SetHeader("Subject", "Новое заявка на подключение")
	msg.SetBody("text/plain", fmt.Sprintf("Имя: %s\nГород: %s\nТелефон: %s", emailData.Name, emailData.City, emailData.Phone))

	// Отправка email
	dialer := gomail.NewDialer(config.SmtpHost, config.SmtpPort, config.From, config.Password)
	if err := dialer.DialAndSend(msg); err != nil {
		c.JSON(400, false)
		return
	}

	c.JSON(200, "Письмо отправленно")
}