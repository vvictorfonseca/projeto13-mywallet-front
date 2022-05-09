import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";

import axios from 'axios';
import styled from 'styled-components';

import NewEntry from './NewEntry.js';
import NewExit from './NewExit.js';

import UserContext from './contexts/UserContext.js';

function Inserts() {

    const [inserts, setInserts] = useState([]);
    const [newEntry, setNewEntry] = useState(false);
    const [newExit, setNewExit] = useState(false)

    const { nameUser } = useContext(UserContext);

    console.log(nameUser)

    if (inserts.length === 0 && newEntry === false && newExit === false) {
        return (
            <ContainerInserts>
                <h1>Olá, Victor {nameUser}</h1>

                <BoxInserts>
                    <p>Não há registros de <br /> entrada ou saída</p>
                </BoxInserts>

                <BoxNewInserts>
                    <BoxNewEntrance>
                        <ion-icon onClick={() => setNewEntry(true)} name="add-circle-outline"></ion-icon>
                        <p>Nova <br /> entrada</p>
                    </BoxNewEntrance>
                    <BoxNewExit>
                        <ion-icon onClick={() => setNewExit(true)} name="remove-circle-outline"></ion-icon>
                        <p>Nova <br /> saída</p>
                    </BoxNewExit>
                </BoxNewInserts>
            </ContainerInserts>
        )
    } else if (newEntry === true) {
        return (
            <NewEntry />
        )
    } else if (newExit === true) {
        return (
            <NewExit />
        )
    }

}

const ContainerInserts = styled.div`
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
        color: #FFFFFF;
    }
`
const BoxInserts = styled.div`
    width:326px;
    height:446px;
    background-color: white;
    display:flex;
    margin: auto auto;
    margin-top: 22px;
    border-radius: 5px;

    p{
        font-size:20px;
        font-weight:400;
        color: #868686;
        text-align:center;
        display:flex;
        align-items:center;
        margin:auto auto;
    }
`
const BoxNewInserts = styled.div`
    display:flex;
    margin-top:13px;
    margin-bottom:16px;
`
const BoxNewEntrance = styled.div`
    width:155px;
    height:114px;
    background: #A328D6;
    border-radius: 5px;
    margin-left:25px;
    position:relative;

    ion-icon{
        position:absolute;
        font-size:23.88px;
        color:white;
        margin-top: 8.56px;
        margin-left: 9.56px;
        cursor:pointer;
    }

    p{
        font-weight: 700;
        font-size: 17px;
        color: #FFFFFF;
        margin-left:9.56px;
        margin-top:70px;
    }
`
const BoxNewExit = styled.div`
    width:155px;
    height:114px;
    background: #A328D6;
    border-radius: 5px;
    margin-left:15px;
    position:relative;

    ion-icon{
        position:absolute;
        font-size:23.88px;
        color:white;
        margin-top: 8.56px;
        margin-left: 9.56px;
        cursor:pointer;
    }

    p{
        font-weight: 700;
        font-size: 17px;
        color: #FFFFFF;
        margin-left:9.56px;
        margin-top:70px;
    }
`

export default Inserts;