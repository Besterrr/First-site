import React from 'react';
import { usePurchase } from "../App.jsx";
import { Link } from 'react-router-dom';
import "../styles/pages/Purchase.css"

const Purchase = () => {
    const {purchase, deletePurchase, clearPurchase, updateQuantity} = usePurchase();
    const totalPrice = purchase.reduce((sum,skin) => sum + (skin.price * skin.quantity), 0)

    const addCount = (skinId) => {
        const item = purchase.find(s => s.id === skinId)
        if(item){
            updateQuantity(skinId, item.quantity + 1)
        }
    };

    const removeCount = (skinId) => {
        const item = purchase.find(s => s.id === skinId)
        if(item){
            if(item.quantity === 1){
                deletePurchase(skinId)
            } else{
                updateQuantity(skinId, item.quantity - 1)
            }
        }
    }

    if (purchase.length === 0) {
        return (
            <main className="cart__empty">
                    <h1 className="cart__title">Корзина пуста</h1>
                    <p className="cart__empty-text">
                        Воспользуйтесь поиском, чтобы найти всё, что нужно
                    </p>
                    <Link to="/" className="btn cart__empty-btn">
                        Перейти в каталог
                    </Link>
            </main>
        );
    }

    // Если в корзине есть товары
    return (
        <main className="cart">
            <div className="cart__column">
                <h1 className="cart__title">Корзина ({purchase.length} товаров)</h1>
                <button
                    className="btn delete-all-btn"
                    onClick={() => {clearPurchase()}}
                >
                    Очистить корзину
                </button>

                {purchase.map(skin => (
                    <div className="purchase-list" key={skin.id}>
                        <img
                            className="purchase-list__img"
                            src={skin.imageUrl}
                            alt="skin-logo"/>
                        <h2 className="purchase-list__name">{skin.itemName}</h2>
                        <h3 className="purchase-list__wear">Качество: {skin.wear}</h3>
                        <p className="purchase-list__price">Стоимость: {skin.price * skin.quantity} ₽</p>
                        <div className="purchase-list__btn-container">
                            <button
                                className="btn purchase-list__delete-btn"
                                onClick={() => removeCount(skin.id)}
                            >-</button>

                            <span className="purchase-list__count-span">
                                {skin.quantity || 1}
                            </span>

                            <button
                                className="btn purchase-list__delete-btn"
                                onClick={() => addCount(skin.id)}
                            >+</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="cart__button-column">
                <button className="btn button-column__buy-btn">
                    Перейти к оформлению
                </button>

                <p className="button-column__text">
                    Доступные способы и время доставки можно выбрать при оформлении заказа
                </p>
                <hr/>
                <div className="cart__totalPrice">
                    <span className="totalPrice__label">
                        Общая стоимость:
                    </span>
                    <span className="totalPrice__value">
                        {totalPrice} ₽
                    </span>
                </div>
            </div>
        </main>
    );
};

export default Purchase;