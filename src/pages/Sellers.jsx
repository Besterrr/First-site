import React, {useContext} from 'react';
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";
import {Navigate, Outlet} from "react-router-dom";
import {AuthContext} from "../context/AuthContext.jsx";



const Sellers = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    if (!isAuth) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="page-wrapper">
            <main className="main-content">
                <Outlet/>
                <p>Чё-то там</p>
            </main>
        </div>
    );
};

export default Sellers;