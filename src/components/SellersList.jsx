import React from 'react';

const SellersList = ({displayedSellers}) => {
    return (
        <div className="sellers-grid">
            {displayedSellers.map(seller => (
                <div key={seller.id} className="seller">
                    <div className="seller-card">
                        <div className="seller-card-info">
                            <h3 className="seller-name">{seller.name}</h3>
                            <p className="seller-rating">⭐{seller.rating}</p>
                            <p className="seller-total-sells">🛒{seller.totalSales} продаж</p>
                            <p className="seller-joined-date">📅{seller.joinedDate}</p>
                            <div className="seller-country">
                                <p>{seller.country}</p>
                            </div>
                        </div>
                        <div className="seller-card-skins">
                            <div className="seller-skins">
                                {seller.items.slice(0, 3).map(item => (
                                    <div key={item.id}>
                                        {item.itemName}
                                    </div>
                                ))}
                                {seller.items.length > 3 && (
                                    <div className="seller-more">
                                        +{seller.items.length - 3} more
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SellersList;