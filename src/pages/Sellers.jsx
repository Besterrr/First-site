import React, {useMemo, useState} from 'react';
import {Outlet} from "react-router-dom";
import { sellers } from "../sellersData.json";
import "../styles/pages/Sellers.css"
import SellersList from "../components/SellersList.jsx";

const Sellers = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(1);
    const [totalCount] = useState(sellers.length);

    const limit = 8;
    const totalPages = Math.ceil(totalCount / limit);

    const handlePageChange = (page) => {
        setPage(page);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const handleSearchChange = (query) => {
        setSearchQuery(query);
        setPage(1);
    }

    const pages = useMemo(() => {
        let pageArray = [];
        for (let i = 0; i < totalPages; i++) {
            pageArray.push(i + 1);
        }
        return pageArray;
    }, [totalPages]);

    const displayedSellers = useMemo(() => {
        let result = [...sellers];

        if (searchQuery) {
            result = result.filter(seller =>
                seller.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;

        result = result.slice(startIndex, endIndex);

        return result;
    }, [searchQuery, sellers, page]);


    const clearSearch = () => {
        setSearchQuery('');
    };

    return (
        <div className="page-wrapper">
            <div>
                <Outlet/>
                <main className="sellers-content">
                    <div className="sellers-search">
                        <div className="search">
                            <span className="search__icon">🔍</span>
                            <input
                                type="text"
                                className="search__input"
                                placeholder="Поиск по имени продавца"
                                value={searchQuery}
                                onChange={(e) => handleSearchChange(e.target.value)}
                            />
                            {searchQuery && (
                                <button className="search__clear" onClick={clearSearch}>
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
                            onClick={() => handlePageChange(p)}
                            key={p}
                            className={page === p ? "pagination-btn pagination-btn__current" : "pagination-btn"}
                        >
                            {p}
                        </button>
                    )}
                </div>
            )}
            <hr/>
        </div>
    );
};

export default Sellers;