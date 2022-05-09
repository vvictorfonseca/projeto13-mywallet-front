import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { useEffect } from "react";

import axios from 'axios';
import styled from 'styled-components';

import NewEntry from './NewEntry.js';

import UserContext from './contexts/UserContext.js';

function Inserts() {

    const [inserts, setInserts] = useState([]);

    const { token, nameUser, newEntry, setNewEntry, newExit, setNewExit } = useContext(UserContext);

    useEffect(() => {

        const URL = "http://localhost:5000/inserts"
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = axios.get(URL, config)
        promise.then(response => {
            const { data } = response
            setInserts(data)
            console.log("INSERTS", data)
        })
        promise.catch(err => {
            console.log(err)
        })

    }, [])

    function UserInserts(props) {
        const { info } = props
        const colorIncome = '#03AC00';
        const colorOutcome = '#C70000';

        return (
            <BoxTransaction color={info.type === "income" ? colorIncome: colorOutcome}>
                <p>{info.time}</p>
                <p>{info.description}</p>
                <p>{info.value}</p>
            </BoxTransaction>
        )
    }

    if (newEntry === false && newExit === false) {
        return (
            <ContainerInserts>
                <h1>Olá, {nameUser}</h1>
                {
                    inserts.length === 0 ? (
                        <BoxInserts>
                            <p>Não há registros de <br /> entrada ou saída</p>
                        </BoxInserts>
                    ) : (
                        <BoxInserts>
                            {inserts.map(insert => <UserInserts info={insert} />)}
                        </BoxInserts>
                    )}


                <BoxNewInserts>
                    <BoxNewEntrance>
                        <Link to='/inserts/income' style={{ textDecoration: 'none'}}>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <p>Nova <br /> entrada</p>
                        </Link>
                    </BoxNewEntrance>
                    <BoxNewExit>
                        <Link to='/inserts/outcome' style={{ textDecoration: 'none'}}>
                        <ion-icon name="remove-circle-outline"></ion-icon>
                        <p>Nova <br /> saída</p>
                        </Link>
                    </BoxNewExit>
                </BoxNewInserts>
            </ContainerInserts>
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
    display:flex;
    flex-direction: column;

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
const BoxTransaction = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:15px;

    p:first-child{
        margin-left: 13px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #C6C6C6;
    }

    p:nth-child(2){
        margin-left: 10px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
    }

    p:last-child{
        margin-left: auto;
        margin-right: 13px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-align: right;
        color: ${props => props.color};
    }
`

export default Inserts;