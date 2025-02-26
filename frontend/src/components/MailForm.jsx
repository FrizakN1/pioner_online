import React, { useState } from "react";

const MailForm = () => {
    const [fields, setFields] = useState({
        Name: "",
        City: "",
        Phone: "",
    })

    const handlerChange = (e) => {
        let { name, value } = e.target

        setFields(prevState => ({...prevState, [name]: value}))
    }

    const handlerSand = () => {
        let options = {
            method: "POST",
            body: JSON.stringify(fields)
        }

        fetch("http://localhost:8080/api/email", options)
            .then(response => response.json)
            .then(data => {
                console.log(data);
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="black_box" id="connect">
            <div className="connect">
                <a className="label-connect">Подключитесь к парку</a><br /><br />
                <div>
                    <input type="text" name="Name" value={fields.Name} onChange={handlerChange} placeholder="Введите ФИО" className="input" /><br /><br />
                    <input type="text" name="City" value={fields.City} onChange={handlerChange} placeholder="Введите ваш город" className="input" /><br /><br />
                    <input type="tel" name="Phone" value={fields.Phone} onChange={handlerChange} placeholder="Введите номер телефона: + 7 919 999-99-99" className="input" /><br /><br />
                    {/* <select name="" id="" className="input">
                        <option value="" style={{ textAlign: 'center' }} disabled>Выберите предпочитаемый способ связи</option>
                        <option value=""></option>
                        <option value=""></option>
                    </select><br /><br /><br /> */}
                    <button className="btn-connect" onClick={handlerSand}>Отправить заявку</button>
                </div>
            </div>
        </div>
    )
}

export default MailForm