import React from 'react';
import '../styles/components/SkinsList.css';
import {useNavigate} from "react-router-dom";

const SkinsList = ({displayedSkins}) => {

    const navigate = useNavigate();

    const handleClick = (skin) => {
        navigate(`/skins/${skin.id}`);
    };

    return (
        <section className="catalog__content">
            {displayedSkins.length > 0
                ? <h1 className="catalog__title">Каталог скинов</h1>
                : <h1 className="catalog__title">Скинов не найдено</h1>
            }
            <div className="catalog-grid">
                {displayedSkins.map(skin => (
                    <article key={skin.id} className="skin-card">
                        <div className="skin-card__image-wrapper">
                            <img
                                className="skin-card__image"
                                src={skin.imageUrl}
                                alt={skin.itemName}
                            />
                            <div className="skin-card__overlay">
                                <button onClick={() => handleClick(skin)} className="skin-card__btn">Подробнее</button>
                            </div>
                        </div>
                        <div className="skin-card__info">
                            <h3 className="skin-card__name">{skin.itemName}</h3>
                            <p className="skin-card__seller">
                                <span className="skin-card__seller-icon">👤</span> {skin.sellerName}
                            </p>
                            <p className="skin-card__price">{skin.price.toLocaleString()} ₽</p>
                            <div className="skin-card__details">
                                    <span className={`skin-card__wear skin-card__wear--${skin.wear.toLowerCase().replace(' ', '-')}`}>
                                        {skin.wear}
                                    </span>
                                <span className={`skin-card__stock ${skin.inStock ? 'skin-card__stock--in' : 'skin-card__stock--out'}`}>
                                    {skin.inStock ? '✓ В наличии' : '✗ Нет в наличии'}
                                </span>
                            </div>
                        </div>

                    </article>
                ))}
            </div>

        </section>
    );
};

export default SkinsList;