import React, {useContext} from 'react';
import {AuthContext} from "../context/AuthContext.jsx";
import {Navigate, Outlet, useLocation} from "react-router-dom";

const PrivateRoute = () => {
    const {isAuth, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log('PrivateRoute - loading:', loading);
    console.log('PrivateRoute - isAuth:', isAuth);
    if(loading){
        return <div>Загрузка...</div>;
    }

    if (!isAuth) {
        return <Navigate to="/login" state={{ from: location.pathname }} replace />;
    }

    return (
        <Outlet />
    );
};

export default PrivateRoute;