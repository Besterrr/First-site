import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer__container">
                <div className="footer__logo">
                    <img src="/logo.jpg" alt=""/>
                </div>
                <div className="footer__links">
                    <h4>ИНФОРМАЦИЯ</h4>
                </div>
                <div className="footer__links">
                    <h4>ПРАВОВАЯ ИНФОРМАЦИЯ</h4>
                </div>
                <div>
                    <h4>КОНТАКТЫ</h4>
                </div>

                <div className="footer__under_link_text">
                    <h5>ЧЁ-ТО ТАМ КАКАЯ-ТО ИНФА</h5>
                </div>

                <div className="footer__under_link_text">
                    <a href="">О нас</a> <br/>
                    {/*<a href="">FAQ</a>*/}
                </div>
                <div className="footer__under_link_text">
                    <a href="">Политика конфиденциальности</a>
                </div>
                <div className="footer__under_link_text">
                    <p>support@csfuns.com</p>
                </div>

                <div className="footer__under_link_text_row_second">
                    <a href="">Как это работает</a>
                </div>
                <div className="footer__under_link_text_row">
                    <a href="">Условия использования</a>
                </div>

                <div className="footer__under_link_text">
                    <p>24/7 поддержка</p>
                </div>

            </div>
            <hr style = {{marginTop: "30px"}} color="2a2a3a"/>
            <h5 className= "footer_under_text">© 2024 CS Funs. Все права защищены. Не связан с Valve Corporation.</h5>
        </footer>
    );
};

export default Footer;