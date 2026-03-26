import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Login from "../pages/Login.jsx";
import Sellers from "../pages/Sellers.jsx";
import SkinIdPage from "../pages/SkinIdPage.jsx";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="sellers" element={<Sellers />} />
                <Route path="*" element={<Navigate to="/" replace />} />
                <Route path="skins/:id" element={<SkinIdPage />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;