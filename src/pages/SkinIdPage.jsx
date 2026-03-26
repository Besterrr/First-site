import React, {useContext} from 'react';
import {Link, Navigate, useNavigate, useParams} from "react-router-dom";
import { skinsData } from "../data.json";
import Footer from "../components/Footer.jsx";
import Navigation from "../components/Navigation.jsx";
import "./SkinIdPage.css"
import {AuthContext} from "../context/index.js";

const SkinIdPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();



    const skin = skinsData.find((s) => s.id === parseInt(id));

    if (!skin) {
        return (
                <main className="main-content">
                    <div className="not-found">
                        <h2>Скин не найден</h2>
                        <Link to="/">Вернуться на главную</Link>
                    </div>
                </main>
        );
    }

    return (
        <div className="page-wrapper">

            <main className="skin-detail-page">
                <button onClick={() => navigate(-1)} className="back-btn">
                    ← Назад
                </button>

                <div className="skin-detail-container">
                    <div className="skin-detail-image">
                        <img src={skin.imageUrl} alt={skin.itemName}/>
                    </div>

                    <div className="skin-detail-info">
                        <h1 className="skin-detail-name">{skin.itemName}</h1>

                        <div className="skin-detail-seller">
                            <span className="seller-icon">👤</span>
                            <span>Продавец: {skin.sellerName}</span>
                        </div>

                        <div className="skin-detail-price">
                            <span className="price-label">Цена:</span>
                            <span className="price-value">{skin.price.toLocaleString()} ₽</span>
                        </div>

                        <div className="skin-detail-wear">
                            <span className="wear-label">Состояние:</span>
                            <span className={`wear-badge wear-${skin.wear.toLowerCase().replace(' ', '-')}`}>
                                {skin.wear}
                            </span>
                        </div>

                        <div className="skin-detail-stock">
                            <span className="stock-label">Наличие:</span>
                            <span className={`stock-badge ${skin.inStock ? 'in-stock' : 'out-of-stock'}`}>
                                {skin.inStock ? 'В наличии' : 'Нет в наличии'}
                            </span>
                        </div>

                        <div className="skin-detail-description">
                            <h3>Описание</h3>
                            <p>
                                {skin.itemName} — эксклюзивный скин из коллекции Printstream.
                                {skin.inStock ? ' Доступен для покупки.' : ' Временно отсутствует.'}
                            </p>
                        </div>

                        <button
                            className="buy-btn"
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