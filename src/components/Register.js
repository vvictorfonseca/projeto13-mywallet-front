import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";

import axios from 'axios';
import styled from 'styled-components';

function Register() {

    const navigate = useNavigate();

    const [dataRegister, setDataRegister] = useState({ name: "", email: "", password: "", confirmPassword: "" })

    const objRegister = {
        name: dataRegister.name,
        email: dataRegister.email,
        password: dataRegister.password,
        confirmPassword: dataRegister.password
    }

    function newRegister(e) {
        e.preventDefault();

        const URLREGISTER = "https://http://localhost:3000/signup"

        if (dataRegister.password === dataRegister.confirmPassword) {

            const promise = axios.post(URLREGISTER, objRegister);

            promise.then(response => {
                const { data } = response;
                console.log(response)
                navigate("/signin");
            })
            promise.catch(err => {
                console.log(err)
                alert('Erro ao criar um novo cadastro')
            });
        }
    }

    const loadInputs = inputs()

    function inputs() {
        return (
            <form onSubmit={newRegister}>
                <input type="text" placeholder='Nome' value={dataRegister.name} onChange={(e) => setDataRegister({ ...dataRegister, name: e.target.value })} ></input>
                <input type="email" placeholder='E-mail' value={dataRegister.email} onChange={(e) => setDataRegister({ ...dataRegister, email: e.target.value })} ></input>
                <input type="password" placeholder='Senha' value={dataRegister.password} onChange={(e) => setDataRegister({ ...dataRegister, password: e.target.value })} ></input>
                <input type="password" placeholder='Confirme a Senha' value={dataRegister.confirmPassword} onChange={(e) => setDataRegister({ ...dataRegister, confirmPassword: e.target.value })} ></input>
                <button type='submit'>Cadastrar</button>
            </form>
        )
    }

    return (
        <ContainerRegister>
            <h1>MyWallet</h1>
            {loadInputs}
            <Link to='/signin'> <p>Já tem uma conta? Entre agora!</p> </Link>
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