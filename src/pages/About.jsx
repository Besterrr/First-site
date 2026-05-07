import React from 'react';
import {Outlet} from "react-router-dom";
import "../styles/pages/About.css"

const About = () => {
    return (
        <div className="page-wrapper">
            <Outlet/>
            <main className="about-content">
                <h1 className="about-content__title">О Нас</h1>

                <div className="about-block">
                    <img
                        className="about-block__img"
                        src="../../public/logo.jpg"
                        alt="logo"/>
                    <p className= "about-block__text">Что-то там</p>
                </div>

                <hr className= "about-content__divider"/>

                <div className="advantages-block">
                    <div className="advantages-block__achievement-card">
                        <h2 className="achievement-card__title">🔫 Большой выбор</h2>
                        <p className= "achievement-card__text">Предоставляем большой выбор скинов. Любое качество, любой патерн.</p>
                    </div>
                    <div className="advantages-block__achievement-card">
                        <h2 className="achievement-card__title">⚡ Быстрые переводы</h2>
                        <p className= "achievement-card__text">Скоростная доставка скинов после покупки</p>
                    </div>
                    <div className="advantages-block__achievement-card">
                        <h2 className="achievement-card__title">🛡️ Безопасность</h2>
                        <p className="achievement-card__text">Все сделки открыты и защищены командой</p>
                    </div>
                    <div className="advantages-block__achievement-card">
                        <h2 className="achievement-card__title">💬 Поддежка 24/7</h2>
                        <p className= "achievement-card__text">Круглосуточная поддержка, которая поможет с любым вопросом</p>
                    </div>
                    <div className="advantages-block__achievement-card">
                        <h2 className="achievement-card__title">👥 Большое количество продавцов</h2>
                        <p className= "achievement-card__text">Огромное комьюнити продавцов с товарами на любой вкус</p>
                    </div>
                    <div className="advantages-block__achievement-card">
                        <h2 className="achievement-card__title">💎 Низкая комиссия</h2>
                        <p className= "achievement-card__text">Удобная для пользователя взымаемая комиссия за продажу</p>
                    </div>
                </div>

                <hr className= "about-content__divider"/>

                <div className="command-block">
                    <div className="command-card">
                        <img
                            className="command-card__img"
                            src="../../public/user.webp"
                            alt="avatar"/>
                        <p className="command-card__name">Никита</p>
                        <p className="command-card__role">Главный разработчик</p>
                    </div>

                    <div className="command-card">
                        <img
                            className="command-card__img"
                            src="../../public/user.webp"
                            alt="avatar"/>
                        <p className="command-card__name">Кирилл</p>
                        <p className="command-card__role">Пиар-менеджер</p>
                    </div>

                    <div className="command-card">
                        <img
                            className="command-card__img"
                            src="../../public/user.webp"
                            alt="avatar"/>
                        <p className="command-card__name">Арсений</p>
                        <p className="command-card__role">Тех-поддержка</p>
                    </div>

                    <div className="command-card">
                        <img
                            className="command-card__img"
                            src="../../public/user.webp"
                            alt="avatar"/>
                        <p className="command-card__name">Элина</p>
                        <p className="command-card__role">Менеджер</p>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default About;