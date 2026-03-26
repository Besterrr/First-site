import React from 'react';
import cl from "./MyInput.module.css"

const MyInput = ({value, onChange, placeholder, type = "text", ...props}) => {
    return (
        <input
            className={cl.myInput}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            {...props}
        />
    );
};

export default MyInput;