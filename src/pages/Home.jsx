import React, {useMemo, useState} from 'react';
import { skinsData } from "../data.json";
import './Home.css';
import SkinsList from "../components/SkinsList.jsx";

const Home = () => {
    const [filter, setFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(1);
    const [totalCount] = useState(skinsData.length);
    const limit = 9;
    const totalPages = Math.ceil(totalCount / limit);

    const pages = useMemo(() => {
        let pageArray = [];
        for (let i = 0; i < totalPages; i++) {
            pageArray.push(i + 1)
        }
        return pageArray;
    }, [totalPages])

    const handlePageChange = (page) => {
        setPage(page);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        setPage(1);
    }

    const handleSearch = (query) => {
        setSearchQuery(query);
        setPage(1);
    }

    const displayedSkins = useMemo(() => {
        let result = filter === 'all'
            ? skinsData
            : skinsData.filter(skin => skin.inStock);

        if(searchQuery){
            result = result.filter(skin => skin.itemName.toLowerCase().includes(searchQuery.toLowerCase()));
        }

        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        result = result.slice(startIndex, endIndex);

        return result
    }, [filter, searchQuery, page]);


    const clearSearch = () => {
        setSearchQuery('');
    };

    return (
        <>
            <div className="skins-filters">
                <button
                    className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                    onClick={() => handleFilterChange("all")}
                >
                    Все скины
                </button>
                <button
                    className={`filter-btn ${filter === 'inStock' ? 'active' : ''}`}
                    onClick={() => handleFilterChange("inStock")}
                >
                    В наличии
                </button>
            </div>

            <div className="skins-search">
                <div className="search-wrapper">
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Поиск по названию скина..."
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                    {searchQuery && (
                        <button className="clear-search" onClick={clearSearch}>
                            ✕
                        </button>
                    )}
                </div>
            </div>

            <SkinsList displayedSkins={displayedSkins} skin={skinsData} />

            {displayedSkins.length > 0 && (
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

            <hr style={{marginTop: "50px"}} color="2a2a3a"/>
        </>
    );
};

export default Home;