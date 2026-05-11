import React, {useState, useEffect} from "react";
import {AuthContext} from "./AuthContext.jsx";
import {PurchaseContext} from "./PurchaseContext.jsx";

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


