import React, {useContext} from 'react';
import {AuthContext} from "../context/index.jsx";
import {Navigate, Outlet, useLocation} from "react-router-dom";

const PrivateRoute = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);
    const location = useLocation();

    if (!isAuth) {
        return <Navigate to="/login" state={{ from: location.pathname }} replace />;
    }

    return (
        <Outlet />
    );
};

export default PrivateRoute;