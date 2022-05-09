import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";

import UserContext from './contexts/UserContext.js';

import axios from 'axios';
import styled from 'styled-components';

function Register() {

    const navigate = useNavigate();

    const {userData, setUserData, setNameUser, nameUser } = useContext(UserContext)

    const objRegister = {
        name: userData.name,
        email: userData.email,
        password: userData.password,
        confirmPassword: userData.confirmPassword
    }

    function newRegister(e) {
        e.preventDefault();

        const URLREGISTER = "http://localhost:5000/signup"

        if (userData.password === userData.confirmPassword) {

            const promise = axios.post(URLREGISTER, objRegister);

            promise.then(response => {
                const { data } = response;
                console.log(data)
                setUserData({...userData, email: ""})
                setUserData({...userData, password: ""})
                setNameUser({...nameUser, name: userData.name})
                navigate("/");
            })
            promise.catch(err => {
                console.log(err)
                alert('Erro ao criar um novo cadastro')
            });
        }
    }

    console.log(nameUser)

    const loadInputs = inputs()

    function inputs() {
        return (
            <form onSubmit={newRegister}>
                <input type="text" placeholder='Nome' value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} ></input>
                <input type="email" placeholder='E-mail' value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} ></input>
                <input type="password" placeholder='Senha' value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} ></input>
                <input type="password" placeholder='Confirme a Senha' value={userData.confirmPassword} onChange={(e) => setUserData({ ...userData, confirmPassword: e.target.value })} ></input>
                <button type='submit'>Cadastrar</button>
            </form>
        )
    }

    return (
        <ContainerRegister>
            <h1>MyWallet</h1>
            {loadInputs}
            <Link to='/'> <p>Já tem uma conta? Entre agora!</p> </Link>
        </ContainerRegister>
    )
}

const ContainerRegister = styled.div`
    width: 375px;
    margin: auto auto;
    display:flex;
    justify-content: center;
    flex-direction: column;

    h1{
        font-size:32px;
        margin-top:95px;
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
        margin-top:32px;
        text-decoration: none;
        text-decoration-color: #8C11BE;
    }
`

export default Register;