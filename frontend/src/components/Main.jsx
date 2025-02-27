import React from "react";
import MailForm from "./MailForm";

const Main = () => {
    return (
        <>
            <header>
                <div className="header">
                    <nav>
                        <ul>
                            <a href="#"><img src="./img/logo.png" alt="" className="logo"/></a>
                            <li><a href="#bonus">Наши бонусы</a></li>
                            <li><a href="#contact">Контакты</a></li>
                            <li><a href="#connect" className="connect_name">Подключение</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
    
            <div className="block-one">
                <div className="text-block-one">
                    <h1 className="text-official"><span className="q"><span className="text-yandex">Я</span>ндекс ПРО</span></h1>
                    {/* <img src="./img/yandex_taxi.png" alt="" width="300px" height="104px" /> */}
                    <h1 className="text-park">АВТОПАРК ПИОНЕР</h1>
                </div>
            </div>
    
            <div className="bonus" id="bonus">
                <div className="cards">
                    <div className="card-one">
                        <div className="text-card-one">
                            <a style={{ fontSize: '28px' }}>Высокий уровень</a><br />
                            <a style={{ fontWeight: 'bold', fontSize: '28px' }}>заработка</a><br /><br />
                            <a style={{ fontStyle: 'italic', fontSize: '25px', color: '#BABABA' }}>до 150 000 рублей</a><br /><br />
                            <a style={{ fontSize: '16px', color: '#8E8E8E' }}>*моментальный вывод средств</a>
                        </div>
                    </div>
    
                    <div className="card-two">
                        <div className="text-card-two">
                            <div className="box-black">
                                <a style={{ fontSize: '28px', color: 'white' }}>Комиссия таксопарка</a><br /><br />
                                <div className="box-white">
                                    <a style={{ fontSize: '29px', color: '#FFBB00', fontWeight: 'bolder' }}>ВСЕГО</a>
                                    <a style={{ fontSize: '35px', color: 'black', fontWeight: 'bolder' }}>1%</a>
                                    <a><img src="./img/icon-yandex.png" alt="" width="45px" height="44px" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="card-three">
                        <div className="text-card-three">
                            <a style={{ fontSize: '28px', color: 'white', fontWeight: 'bolder' }}>Онлайн поддержка</a><br /><br />
                            <a><img src="./img/icon-taxi2.png" alt="" width="130px" height="205px" /></a><br /><br /><br /><br />
                            <a style={{ fontSize: '25px', color: '#BABABA', fontStyle: 'italic' }}>Поможем решить<br /> проблемы<br /> с подключением</a><br />
                        </div>
                    </div>
                </div>
            </div>
    
            <MailForm />
    
            <div className="contact-card" id="contact">
                <img src="./img/Group-contact.png" alt="" className="car-contact" />
                <div className="contact-text">
                    <a style={{ fontSize: '35px', fontStyle: 'italic', fontWeight: 'bold' }}>Техподдержка <br />в удобном для вас мессенджере</a><br /><br />
                    <a style={{ fontSize: '28px', fontStyle: 'italic' }}> Оперативно ответим,<br />подключим в парк,<br />быстро решим любой вопрос </a><br />
                    <div>
                        <a href="https://t.me/pioneer_pro" target="_blank" rel="noopener noreferrer"><img src="./img/tg.png" alt="" width="53px" height="53px"/></a>
                        <a href="https://wa.me/89226756819" target="_blank" rel="noopener noreferrer"><img src="./img/whatsapp.png" alt="" width="53px" height="53px"/></a>
                    </div>
                </div>
            </div>
    
            <footer>
                <div className="footer-label">
                    <a style={{ fontSize: '25px', fontStyle: 'italic' }}>Связаться с нами</a><br /><br />
                </div>
                <a style={{ fontSize: '23px', fontStyle: 'italic' }}>Номер телефона: +7 922 675 68 19<br />
                    Email: kulikd45@yandex.ru<br />
                    ИП Куликовских Д.С.<br />
                    ОГРНИП 323450000001180<br />
                    ИНН 450128400164<br />
                </a>
            </footer>
        </>
    );
}

export default Main