import {useContext} from "react";
import {PurchaseContext} from "../context/PurchaseContext.jsx";

export const usePurchase = () => {
    const context = useContext(PurchaseContext);
    if (!context) {
        throw new Error('usePurchase must be used within PurchaseProvider');
    }
    return context;
};