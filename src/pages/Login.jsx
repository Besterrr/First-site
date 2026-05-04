import React, {useContext, useState} from 'react';
import MyInput from "../UI/input/MyInput.jsx";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext.jsx";
import "../styles/pages/Login.css"

const Login = () => {
    const [username, setUsername] = useState("");
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(username.trim()){
            login(username);
            navigate('/skins');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="form-title">Авторизация</h1>
            <MyInput
                type = "text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Введите никнейм"
            />
            <MyInput
                placeholder="Введите пароль"
            />
            <button type="submit" className="form-button">Войти</button>
        </form>
    );
};

export default Login;