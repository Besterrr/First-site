import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../context/AuthContext.jsx";
import UserMenu from "./UserMenu.jsx";
import { usePurchase } from "../hooks/index.js";

const Navigation = () => {

    const {isAuth, user} = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {purchase} = usePurchase();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="nav">
            <hr className= "nav__hr"/>
            <div className="nav__container">
                <div className="nav__logo">
                    <Link to="/" className="nav__logo-link">
                        <img
                            className="nav__logo-image"
                            src="/logo.jpg"
                            alt="logo"
                        />
                    </Link>
                </div>

                <div className="nav__links">
                    <Link to="/sellers" className="nav__link">
                        SELLERS
                    </Link>
                    <Link to="/" className="nav__link">
                        SKINS
                    </Link>
                    <Link to="/about" className="nav__link">
                        ABOUT
                    </Link>
                </div>

                <div className="user-menu">
                    <div className="user-menu__cart">
                        {purchase.length > 0 && isAuth
                            ? <span className="cart-badge__count">{purchase.length}</span>
                            : null
                        }
                        <Link
                            to="/purchase"
                            className="user-menu__cart-link"
                        >
                            <svg
                                className="user-menu__cart-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                        </Link>
                    </div>

                    {isAuth ? (
                        <>
                            <button
                                onClick={toggleMenu}
                                className="user-menu__button"
                            >
                                {user?.username || 'Профиль'}
                            </button>
                            <UserMenu
                                isOpen={isMenuOpen}
                                onClose={closeMenu}
                            />
                        </>
                    ) : (
                        <Link
                            to="/login"
                            className="user-menu__login-link"
                        >
                            LOGIN
                        </Link>
                    )}
                </div>

            </div>

            <hr className= "nav__hr"/>
        </nav>
    );
};

export default Navigation;