import React from 'react';
import "../styles/components/SellersList.css"

const SellersList = ({displayedSellers}) => {
    return (
        <main className="sellers-card-list">
            {displayedSellers.map(seller => (
                <div key={seller.id} className="seller-card">
                        <div className="seller_card__information">
                            <h3 className="seller_card__name">{seller.name}</h3>
                            <p className="seller_card__rating">⭐{seller.rating}</p>
                            <p className="seller_card__total-sells">🛒{seller.totalSales} продаж</p>
                            <p className="seller_card__joined-date">📅{seller.joinedDate}</p>
                            <div className="seller_card__seller-country">
                                <img
                                    className="seller-country__image"
                                    src={seller.countryUrl}
                                    alt={seller.country}/>
                                <p>{seller.country}</p>
                            </div>
                        </div>
                        <div className="seller_card__skins-list">
                            <div className="skins-list">
                                {seller.items.slice(0, 3).map(item => (
                                    <div key={item.id}>
                                        {item.itemName}
                                    </div>
                                ))}
                                {seller.items.length > 3 && (
                                    <div className="skins-list__more">
                                        +{seller.items.length - 3} more
                                    </div>
                                )}
                            </div>
                        </div>
                </div>
            ))}
        </main>
    );
};

export default SellersList;