import React, {useContext} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import { skinsData } from "../data.json";
import "../styles/pages/SkinIdPage.css"
import { usePurchase } from "../App.jsx";
import {AuthContext} from "../context/AuthContext.jsx";

const SkinIdPage = () => {
    const {isAuth} = useContext(AuthContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const skin = skinsData.find((s) => s.id === parseInt(id));
    const {addPurchase} = usePurchase();

    if (!skin) {
        return (
                <main className="main-content">
                    <div className="main-content__not-found">
                        <h2>Скин не найден</h2>
                        <Link to="/">Вернуться на главную</Link>
                    </div>
                </main>
        );
    }

    return (
        <div className="page-wrapper">

            <main className="skin-component">
                <button onClick={() => navigate(-1)} className="skin-component__back-btn">
                    ← Назад
                </button>

                <div className="component-details">
                    <div className="details__image-wrapper">
                        <img
                            className="details__image"
                            src={skin.imageUrl}
                            alt={skin.itemName}/>
                    </div>

                    <div className="details__info">
                        <h1 className="details__info__skin-name">{skin.itemName}</h1>

                        <div className="details__info-seller">
                            <span className="details__info-seller__icon">👤</span>
                            <span className="details__info-seller__name">Продавец: {skin.sellerName}</span>
                        </div>

                        <div className="details__info-price">
                            <span className="details__info-price__label">Цена:</span>
                            <span className="details__info-price__value">{skin.price.toLocaleString()} ₽</span>
                        </div>

                    <div className="details__info-wear">
                        <span className="details__info-wear__label">Состояние: </span>
                        <span className={`details__info-wear__badge details__info-wear__badge--${skin.wear.toLowerCase().replace(' ', '-')}`}>
                            {skin.wear}
                        </span>
                    </div>

                    <div className="details__info-stock">
                        <span className="details__info-stock__label">Наличие: </span>
                        <span className={`details__info-stock__badge ${skin.inStock ? 'details__info-stock__badge--in' : 'details__info-stock__badge--out'}`}>
                        {skin.inStock ? 'В наличии' : 'Нет в наличии'}
                        </span>
                    </div>
                    <div className="details__info-description">
                        <h3 className= "details__info-description_title">Описание</h3>
                        <p className="details__info-description_text">{skin.itemName} — эксклюзивный скин из коллекции Printstream.
                            {skin.inStock ? ' Доступен для покупки.' : ' Временно отсутствует.'}
                        </p>
                    </div>
                    <button
                        onClick = {() => addPurchase(skin)}
                        className="details__info__buy-btn"
                        disabled={!skin.inStock || !isAuth}
                    >
                        {skin.inStock ? isAuth ? 'Купить сейчас' : 'Войдите, чтобы приобрести' : 'Нет в наличии'}
                    </button>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default SkinIdPage;