import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";

import axios from 'axios';
import styled from 'styled-components';

import UserContext from './contexts/UserContext.js';

function Login() {

    const { setToken } = useContext(UserContext)

    const navigate = useNavigate();
    
    const [dataLogin, setDataLogin] = useState({ email: "", password: "" });

    const objSignIn = {
        email: dataLogin.email,
        password: dataLogin.password
    }

    function LoginUser(e){
        e.preventDefault()

        const URLLOGIN = "https://http://localhost:3000/"

        const promise = axios.post(URLLOGIN, objSignIn);

        promise.the(response => {
            const { data } = response
            setToken(data.token);
            navigate("/inserts");
        })
        promise.catch(err => {
            alert('Usuário inexiste ou usuário e senha incorretos!')
        });
    }

    const loadInputs = inputs()

    function inputs() {
        return (
            <form onSubmit={ LoginUser }>
                <input type="email" placeholder="E-mail" value={ dataLogin.email } disabled={ false } onChange={ (e) => setDataLogin({...dataLogin, email: e.target.value })} ></input>
                <input type="password" placeholder="Senha" value={ dataLogin.password } disabled={ false } onChange={ (e) => setDataLogin({...dataLogin, password: e.target.value})} ></input>
                <button type='submit'>Entrar</button>
            </form>
        )
    }

    return (
        <ContainerLogin>
            <h1>MyWallet</h1>
            {loadInputs}
            <Link to='/signup'> <p>Primeira vez? Cadastre-se!</p> </Link>
        </ContainerLogin>
    )
}

const ContainerLogin = styled.div`
    width: 375px;
    margin: auto auto;
    display:flex;
    justify-content: center;
    flex-direction: column;

    h1{
        font-size:32px;
        margin-top:149px;
        margin-bottom:24px;
        text-align:center;
        font-family: 'Saira Stencil One', cursive;
        color: #FFFFFF;
        line-height: 50px;
    }

    input{
        width:326px;
        height:56px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom:13px;
        margin-left:25px;
        padding-left:15px;
        padding-top:5px;
    }

    input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
    }

    input::placeholder {
        font-weight: 300;
        font-size: 20px;
        color: #000000;
    }

    button {
        width:326px;
        height:46px;
        background: #A328D6;
        border-radius: 5px;
        border:none;
        margin-left:25px;
        color:white;
        font-size:20px;
        font-weight: 700;
        cursor:pointer;
    }

    p {
        height:18px;
        font-size:15px;
        font-weight:700;
        color: #FFFFFF;
        display:flex;
        justify-content:center;
        margin-top:36px;
        text-decoration: none;
        text-decoration-color: #8C11BE;
    }
`
export default Login;