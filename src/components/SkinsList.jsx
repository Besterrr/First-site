import React from 'react';
import '../pages/Home.css';
import {useNavigate} from "react-router-dom";

const SkinsList = ({displayedSkins}) => {

    const navigate = useNavigate();

    const handleClick = (skin) => {
        navigate(`/skins/${skin.id}`);
    };

    return (
        <main className="skins-content">
            {displayedSkins.length > 0
                ? <h1 className="skins-title">Каталог скинов</h1>
                : <h1 className="skins-title">Скинов не найдено</h1>
            }
            <div className="skins-grid">
                {displayedSkins.map(skin => (
                    <div key={skin.id} className="skin-card">
                        <div className="skin-card-image">
                            <img src={skin.imageUrl} alt={skin.itemName}/>
                            <div className="skin-card-overlay">
                                <button onClick={() => handleClick(skin)} className="view-btn">Подробнее</button>
                            </div>
                        </div>
                        <div className="skin-card-info">
                            <h3 className="skin-name">{skin.itemName}</h3>
                            <p className="skin-seller">
                                <span className="seller-icon">👤</span> {skin.sellerName}
                            </p>
                            <p className="skin-price">{skin.price.toLocaleString()} ₽</p>
                            <div className="skin-details">
                                    <span className={`wear-badge wear-${skin.wear.toLowerCase().replace(' ', '-')}`}>
                                        {skin.wear}
                                    </span>
                                <span className={`stock-badge ${skin.inStock ? 'in-stock' : 'out-of-stock'}`}>
                                        {skin.inStock ? '✓ В наличии' : '✗ Нет в наличии'}
                                    </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </main>
    );
};

export default SkinsList;