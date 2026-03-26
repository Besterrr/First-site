import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../context/index.js";

const Navigation = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem("auth");
    }

    return (
        <nav>
            <hr/>
            <div className= "container">
                <div className= "container__logo">
                    <Link to = "/">
                        <img src="/logo.jpg" alt="logo"/>
                    </Link>

                </div>

                <div className= "container__links">
                    <Link to = "/sellers">
                        SELLERS
                    </Link>
                    <Link to = "/">
                        SKINS
                    </Link>
                    <Link to = "/about">
                        ABOUT
                    </Link>
                </div>

                <div className= "container__login">
                    {isAuth
                        ? <button onClick={logout} className = "login-button">Выйти</button>
                        : <Link className = "login-button" to= "/login">LOGIN</Link>
                    }

                    </div>
            </div>
            <hr/>
        </nav>
    );
};

export default Navigation;