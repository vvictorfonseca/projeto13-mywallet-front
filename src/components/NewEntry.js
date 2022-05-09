import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from "react";

import UserContext from './contexts/UserContext.js';

import axios from 'axios';
import styled from 'styled-components';

function NewEntry() {

    const { type } = useParams();
    const { token, setInserts, inserts } = useContext(UserContext)
    const [dataNewEntry, setDataNewEntry] = useState({value: "", description: ""})

    const navigate = useNavigate();

    const objNewEntry = {
        value: dataNewEntry.value,
        description: dataNewEntry.description,
        type: type
    }

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    function postNewEntry(e){
        e.preventDefault()

        const URLINSERT = "http://localhost:5000/inserts"

        const promise = axios.post(URLINSERT, objNewEntry, config);

        console.log("ENTROUreq", token)

        promise.then(response => {
            const { data } = response
            console.log("VEIODOBACK",response.data)
            setInserts({...inserts, data })
            navigate("/inserts")
        })
        promise.catch(err =>{
            console.log(err)
        })
    }

        return (
            <ContainerNewEntry>
                <h1>Nova {`${type === "income" ? "Entrada":"Saída"}`}</h1>
                <form onSubmit={postNewEntry} >
                    <input type="text" placeholder="Valor" value={ dataNewEntry.value } onChange={ (e) => setDataNewEntry({...dataNewEntry, value: e.target.value})} />
                    <input type="text" placeholder="Descrição" value={ dataNewEntry.description } onChange={ (e) => setDataNewEntry({...dataNewEntry, description: e.target.value}) } />
                    <button type='submit'>Salvar {`${type === "income" ? "Entrada":"Saída"}`}</button>
                </form>
            </ContainerNewEntry>
        )
}

const ContainerNewEntry = styled.div`
    width: 375px;
    margin: auto auto;
    display:flex;
    justify-content: center;
    flex-direction: column;

    h1 {
        font-size: 26px;
        font-weight: 700;
        margin-top:25px;
        margin-left:24px;
        margin-bottom: 40px;
        color: #FFFFFF;
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
export default NewEntry