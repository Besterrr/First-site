import '/src/styles/global/variable.css';
import '/src/styles/global/global.css';
import '/src/styles/components/Navigation.css';
import '/src/styles/components/Footer.css';

import React, {useContext} from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {AuthProvider, PurchaseProvider} from "./context";
import AppRouter from "./components/AppRouter.jsx";
import {AuthContext} from "./context/AuthContext.jsx";
import {PurchaseContext} from "./context/PurchaseContext.jsx";

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};

export const usePurchase = () => {
    const context = useContext(PurchaseContext);
    if (!context) {
        throw new Error('usePurchase must be used within PurchaseProvider');
    }
    return context;
};

function App() {

    return (
        <AuthProvider>
            <PurchaseProvider>
            <Router>
                <div className="app-wrapper">
                    <AppRouter/>
                </div>
            </Router>
            </PurchaseProvider>
        </AuthProvider>
    )
}

export default App;