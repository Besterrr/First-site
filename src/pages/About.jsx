import React from 'react';
import {Outlet} from "react-router-dom";
import "../styles/pages/About.css"

const About = () => {
    return (
        <div className="page-wrapper">
            <Outlet/>
            <main className="main-content">
                <h1 className="about-title">О Нас</h1>

                <div className="about-block">
                    <img src="../../public/logo.jpg" alt="logo"/>
                    <p>Что-то там</p>
                </div>

                <hr style={{marginTop:'60px'}}/>

                <div className="advantages-block">
                    <div className="card">
                        <h1>🔫 Большой выбор</h1>
                        <p>Предоставляем большой выбор скинов. Любое качество, любой патерн.</p>
                    </div>
                    <div className="card">
                        <h1>⚡ Быстрые переводы</h1>
                        <p>Скоростная доставка скинов после покупки</p>
                    </div>
                    <div className="card">
                        <h1>🛡️ Безопасность</h1>
                        <p>Все сделки открыты и защищены командой</p>
                    </div>
                    <div className="card">
                        <h1>💬 Поддежка 24/7</h1>
                        <p>Круглосуточная поддержка, которая поможет с любым вопросом</p>
                    </div>
                    <div className="card">
                        <h1>👥 Большое количество продавцов</h1>
                        <p>Огромное комьюнити продавцов с товарами на любой вкус</p>
                    </div>
                    <div className="card">
                        <h1>💎 Низкая комиссия</h1>
                        <p>Удобная для пользователя взымаемая комиссия за продажу</p>
                    </div>
                </div>

                <hr style={{marginTop:'60px'}}/>

                <div className="command-block">

                    <div className="command-card">
                        <img src="../../public/user.webp" alt="avatar"/>
                        <p className="name">Никита</p>
                        <p className="role">Главный разработчик</p>
                    </div>

                    <div className="command-card">
                        <img src="../../public/user.webp" alt="avatar"/>
                        <p className="name">Кирилл</p>
                        <p className="role">Пиар-менеджер</p>
                    </div>

                    <div className="command-card">
                        <img src="../../public/user.webp" alt="avatar"/>
                        <p className="name">Арсений</p>
                        <p className="role">Тех-поддержка</p>
                    </div>

                    <div className="command-card">
                        <img src="../../public/user.webp" alt="avatar"/>
                        <p className="name">Элина</p>
                        <p className="role">Менеджер</p>
                    </div>

                </div>

            </main>
            <hr/>
        </div>
    );
};

export default About;