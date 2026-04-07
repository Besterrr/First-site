import React, {useMemo, useState} from 'react';
import {Navigate, Outlet} from "react-router-dom";
import { sellers } from "../sellersData.json";
import "./Sellers.css"
import SellersList from "../components/SellersList.jsx";

const Sellers = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(1);
    const [totalCount, setTotalCount] = useState(20);

    const limit = 4;
    const totalPages = Math.ceil(totalCount / limit);

    const pages = useMemo(() => {
        let pageArray = [];
        for (let i = 0; i < totalPages; i++) {
            pageArray.push(i + 1);
        }
        return pageArray;
    }, [totalPages]);

    const displayedSellers = useMemo(() => {
        let result = [...sellers];

        // Фильтруем по поисковому запросу
        if (searchQuery) {
            result = result.filter(seller =>
                seller.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        return result;
    }, [searchQuery, sellers]);


    const clearSearch = () => {
        setSearchQuery('');
    };

    return (
        <div className="page-wrapper">
            <div>
                <Outlet/>
                <main className="sellers-content">
                    <div className="sellers-search">
                        <div className="search-wrapper">
                            <span className="search-icon">🔍</span>
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Поиск по имени продавца"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {searchQuery && (
                                <button className="clear-search" onClick={clearSearch}>
                                    ✕
                                </button>
                            )}
                        </div>
                    </div>

                    {displayedSellers.length > 0
                        ? <h1 className="sellers-title">Список продавцов</h1>
                            : <h1 className="sellers-title">Продавцов не найдено</h1>
                    }

                        <SellersList displayedSellers={displayedSellers} />

                </main>
            </div>

            {displayedSellers.length > 0 && (
                <div className="pagination">
                    {pages.map(p =>
                        <button
                            onClick={() => setPage(p)}
                            key={p}
                            className={page === p ? "pagination-btn pagination-btn__current" : "pagination-btn"}
                        >
                            {p}
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Sellers;