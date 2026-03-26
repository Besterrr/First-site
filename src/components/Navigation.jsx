import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../context/AuthContext.jsx";
import UserMenu from "./UserMenu.jsx";

const Navigation = () => {

    const {isAuth, user, logout} = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

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

                <div className="container__login">
                    {isAuth ? (
                        <>
                            <button
                                onClick={toggleMenu}
                                className="user-menu-button"
                            >
                                {user?.username || 'Профиль'}
                            </button>
                            <UserMenu
                                isOpen={isMenuOpen}
                                onClose={closeMenu}
                            />
                        </>
                    ) : (
                        <Link className="login-button" to="/login">
                            LOGIN
                        </Link>
                    )}
                </div>
            </div>
            <hr/>
        </nav>
    );
};

export default Navigation;