import React, {useContext} from 'react';
import MyInput from "../UI/input/MyInput.jsx";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context/index.js";

const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate('/skins');
        setIsAuth(true);
        localStorage.setItem("auth", "true");
    };

    return (
        <form action="">
            <h1 className= "form-title">Авторизация</h1>
            <MyInput
            />
            <MyInput/>
            <button onClick={handleClick} className= "form-button">Войти</button>
        </form>
    );
};

export default Login;