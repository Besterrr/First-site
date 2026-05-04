import '/src/styles/global/variable.css';
import '/src/styles/global/global.css';
import '/src/styles/components/Navigation.css';
import '/src/styles/components/Footer.css';

import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {AuthProvider} from "./context";
import AppRouter from "./components/AppRouter.jsx";

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="app-wrapper">
                    <AppRouter/>
                </div>
            </Router>
        </AuthProvider>
    )
}

export default App;