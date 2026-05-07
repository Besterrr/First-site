import React, {useState, useEffect} from "react";
import {AuthContext} from "./AuthContext.jsx";

export const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const auth = localStorage.getItem("auth");
        const savedUser = localStorage.getItem("user");

        if (auth) {
            setIsAuth(true);
        }

        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setLoading(false);
    }, []);

    const login = (username) => {
        setIsAuth(true);
        setUser({ username });
        localStorage.setItem("auth", "true");
        localStorage.setItem("user", JSON.stringify({ username }));
    };

    const logout = () => {
        setIsAuth(false);
        setUser(null);
        localStorage.removeItem("auth");
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{
            isAuth,
            user,
            login,
            logout,
            loading
        }}>
            {children}
        </AuthContext.Provider>
    );
};