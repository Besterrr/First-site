import React, {useContext, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext.jsx";
import '/src/styles/components/UserMenu.css';

const UserMenu = ({ isOpen, onClose }) => {
    const {user, logout} = useContext(AuthContext);
    const menuRef = useRef(null);

    // Закрытие по клику вне меню
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                onClose();
            }
        };

        // Закрытие по Escape
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleLogout = () => {
        logout();
        onClose();
    };

    const handleItemClick = () => {
        onClose();
    };

    return (
        <div className="user-menu-dropdown" ref={menuRef}>
            <div className="user-menu-list">
                {/* Информация о пользователе */}
                <div className="menu-item" style={{ cursor: 'default', opacity: 0.7 }}>
                    <span>{user?.username || 'Пользователь'}</span>
                </div>
                {user?.email && (
                    <div className="menu-item" style={{ cursor: 'default', fontSize: '12px', opacity: 0.5 }}>
                        <span>{user.email}</span>
                    </div>
                )}

                <div className="menu-divider" />

                {/* Пункты меню */}
                <Link to="/profile" className="menu-item" onClick={handleItemClick}>
                    <span>Профиль</span>
                </Link>

                <Link to="/settings" className="menu-item" onClick={handleItemClick}>
                    <span>Настройки</span>
                </Link>

                <Link to="/my-skins" className="menu-item" onClick={handleItemClick}>
                    <span>Мои скины</span>
                </Link>

                <div className="menu-divider" />

                <button className="menu-item logout" onClick={handleLogout}>
                    <span>Выйти</span>
                </button>
            </div>
        </div>
    );
};

export default UserMenu;