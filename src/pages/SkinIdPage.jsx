import React from 'react';
import {Link, Navigate, useNavigate, useParams} from "react-router-dom";
import { skinsData } from "../data.json";
import Footer from "../components/Footer.jsx";
import Navigation from "../components/Navigation.jsx";
import "../styles/pages/SkinIdPage.css"
import {AuthContext} from "../context/AuthContext.jsx";

const SkinIdPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();



    const skin = skinsData.find((s) => s.id === parseInt(id));

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

            <main className="component">
                <button onClick={() => navigate(-1)} className="component__back-btn">
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
                        <h1 className="details__info-name">{skin.itemName}</h1>

                        <div className="details__info-seller">
                            <span className="details__info-seller-icon">👤</span>
                            <span>Продавец: {skin.sellerName}</span>
                        </div>

                        <div className="details__info-price">
                            <span className="details__info-price-label">Цена:</span>
                            <span className="details__info-price-value">{skin.price.toLocaleString()} ₽</span>
                        </div>

                        <div className="details__info-wear">
                            <span className="details__info-wear-label">Состояние:</span>
                            <span className={`details__info-wear-badge wear-${skin.wear.toLowerCase().replace(' ', '-')}`}>
                                {skin.wear}
                            </span>
                        </div>

                        <div className="details__info-stock">
                            <span className="details__info-stock-label">Наличие:</span>
                            <span className={`stock-badge ${skin.inStock ? 'in-stock' : 'out-of-stock'}`}>
                                {skin.inStock ? 'В наличии' : 'Нет в наличии'}
                            </span>
                        </div>

                        <div className="details__info-description">
                            <h3>Описание</h3>
                            <p>
                                {skin.itemName} — эксклюзивный скин из коллекции Printstream.
                                {skin.inStock ? ' Доступен для покупки.' : ' Временно отсутствует.'}
                            </p>
                        </div>

                        <button
                            className="details__info__buy-btn"
                            disabled={!skin.inStock}
                        >
                            {skin.inStock ? 'Купить сейчас' : 'Нет в наличии'}
                        </button>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default SkinIdPage;