import '/src/styles/variable.css';
import '/src/styles/global.css';
import '/src/styles/components/Navigation.css';
import '/src/styles/components/Footer.css';

import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {AuthContext} from "./context/index.js";
import AppRouter from "./components/AppRouter.jsx";


function App() {

    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const auth = localStorage.getItem("auth");
        if (auth) {
            setIsAuth(true);
        }
        setLoading(false);

    }, [])

    if (loading) {
        return <div>
            Загрузка...
        </div>;
    }

  return (
      <AuthContext.Provider value={{
        isAuth,
          setIsAuth,
      }}>
      <Router>
          <div className="app-wrapper">
          <AppRouter/>
          </div>
      </Router>
          </AuthContext.Provider>
  )
}

export default App
