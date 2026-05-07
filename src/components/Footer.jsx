import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">

                <div className="footer__column">
                    <img
                        className="footer__logo"
                        src="/logo.jpg"
                        alt="logo"
                    />
                </div>

                <div className="footer__column">
                    <h4 className="footer__title">ИНФОРМАЦИЯ</h4>
                    <ul className="footer__list">
                        <li className="footer__list-item">
                            <Link className="footer__link" to="about">О нас</Link>
                        </li>
                        <li className="footer__list-item">
                            <Link className="footer__link" to="">Как это работает</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer__column">
                    <h4 className="footer__title">ПРАВОВАЯ ИНФОРМАЦИЯ</h4>
                    <ul className="footer__list">
                        <li className="footer__list-item">
                            <Link className="footer__link" to="">Политика конфиденциальности</Link>
                        </li>
                        <li className="footer__list-item">
                            <Link className="footer__link" to="">Условия использования</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer__column">
                    <h4 className="footer__title">КОНТАКТЫ</h4>
                    <div className="footer__contacts">
                        <p className="footer__text">
                            <a className="footer__link" href="mailto:support@csfuns.com">
                                support@csfuns.com
                            </a>
                        </p>
                        <p className="footer__text footer__text--muted">
                            24/7 поддержка
                        </p>
                    </div>
                </div>
            </div>

            <hr className="footer__divider"/>

            <p className="footer__copyright">
                © 2026 CS Funs. Все права защищены. Не связан с Valve Corporation.
            </p>
        </footer>
    );
};

export default Footer;