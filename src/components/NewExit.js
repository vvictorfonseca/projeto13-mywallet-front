import styled from 'styled-components';

function NewExit() {

        return (
            <ContainerNewEntry>
                <h1>Nova Saída</h1>
                <form>
                    <input type="text" placeholder="Valor" />
                    <input type="text" placeholder="Descrição" />
                    <button type='submit'>Salvar Saída</button>
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
export default NewExit