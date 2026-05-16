import React, {useState, useEffect} from "react";
import {AuthContext} from "./AuthContext.jsx";
import {PurchaseContext} from "./PurchaseContext.jsx";
import {ThemeContext} from "./ThemeContext.jsx";

export const AuthProvider = ({children}) => {
    const [state, setState] = useState(() => {
        const auth = localStorage.getItem("auth");
        const savedUser = localStorage.getItem("user");

        return {
            isAuth: !!auth,
            user: savedUser ? JSON.parse(savedUser) : null,
            loading: false
        };
    });

    const login = (username) => {
        setState({
            isAuth: true,
            user: { username },
            loading: false
        });
        localStorage.setItem("auth", "true");
        localStorage.setItem("user", JSON.stringify({ username }));
    };

    const logout = () => {
        setState({
            isAuth: false,
            user: null,
            loading: false
        });
        localStorage.removeItem("auth");
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{
            isAuth: state.isAuth,
            user: state.user,
            login,
            logout,
            loading: state.loading
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const PurchaseProvider = ({children}) => {
    const [purchase, setPurchase] = useState(() => {

    const savedPurchase = localStorage.getItem("purchase");
    return savedPurchase ? JSON.parse(savedPurchase) : [];
});
    useEffect(() => {
        localStorage.setItem("purchase", JSON.stringify(purchase));
    }, [purchase]);

    const addPurchase = (skin) => {
        setPurchase(prev => {
            const existingItem = prev.find(item => item.id === skin.id);

            if (existingItem) {
                return prev.map(item =>
                    item.id === skin.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prev, { ...skin, quantity: 1 }];
        });
    };

    const deletePurchase = (id) => {
            setPurchase(prev => prev.filter(s => id !== s.id));
    }

    const clearPurchase = () => {
        setPurchase([])
    }

    const updateQuantity = (id, newQuantity) => {
        setPurchase(prev => prev.map(item =>
            item.id === id
                ? {...item, quantity: newQuantity}
                : item
        ))
    }

    return (
        <PurchaseContext.Provider value={{
            purchase,
            addPurchase,
            deletePurchase,
            clearPurchase,
            updateQuantity }}>
            {children}
        </PurchaseContext.Provider>
    );
}

export const ThemeProvider =({children}) => {
    const [theme, setTheme] = useState(
        () => localStorage.getItem("theme") || "dark"
    );

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    },[theme]);

    const toggleTheme = () => {
        setTheme(t => t === "dark" ? "light" : "dark");
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}


