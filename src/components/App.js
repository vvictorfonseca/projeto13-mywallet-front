import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "../css/GlobalStyle.js";

import Login from "./Login.js";
import Register from "./Register.js"
import Inserts from "./Inserts.js";

import UserContext from "./contexts/UserContext.js";
import NewEntry from "./NewEntry.js";

function App() {

    const [token, setToken] = useState("");
    const [userData, setUserData] = useState({})
    const [nameUser, setNameUser] = useState("");
    const [inserts, setInserts] = useState([]);
    const [newEntry, setNewEntry] = useState(false);
    const [newExit, setNewExit] = useState(false)


    const contextValue = { userData, setUserData, token, setToken, nameUser, setNameUser,inserts, setInserts, newEntry, setNewEntry, newExit, setNewExit }

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <UserContext.Provider value={contextValue}>
                    <Routes>
                        <Route path="/" element={<Login /> } />
                        <Route path="/signup" element={ <Register /> } />
                        <Route path="/inserts" element={ <Inserts /> } />
                        <Route path="/inserts/:type" element={ <NewEntry /> } />
                    </Routes>
                </UserContext.Provider>
            </BrowserRouter>
        </>
    )
}

export default App;