import React, {useMemo, useState} from 'react';
import { skinsData } from "../data.json";
import './Home.css';
import SkinsList from "../components/SkinsList.jsx";

const Home = () => {
    const [filter, setFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(1);
    const [totalCount, setTotalCount] = useState(20);

    const limit = 4;
    const totalPages = Math.ceil(totalCount / limit);

    const pages = useMemo(() => {
        let pageArray = [];
        for (let i = 0; i < totalPages; i++) {
            pageArray.push(i + 1)
        }
        return pageArray;
    }, [totalPages])

    const displayedSkins = useMemo(() => {
        let result = filter === 'all'
            ? skinsData
            : skinsData.filter(skin => skin.inStock);

        if(searchQuery){
            result = result.filter(skin => skin.itemName.toLowerCase().includes(searchQuery.toLowerCase()));
        }

        return result
    }, [filter, searchQuery, skinsData]);

    const clearSearch = () => {
        setSearchQuery('');
    };

    return (
        <>
            <div className="skins-filters">
                <button
                    className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                    onClick={() => setFilter("all")}
                >
                    Все скины
                </button>
                <button
                    className={`filter-btn ${filter === 'inStock' ? 'active' : ''}`}
                    onClick={() => setFilter("inStock")}
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
                        onChange={(e) => setSearchQuery(e.target.value)}
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
                            onClick={() => setPage(p)}
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