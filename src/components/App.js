import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "../css/GlobalStyle.js";

import Login from "./Login.js";
import Register from "./Register.js"

import UserContext from "./contexts/UserContext.js";

function App() {

    const [token, setToken] = useState("");

    const contextValue = { token, setToken }

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <UserContext.Provider value={contextValue}>
                    <Routes>
                        <Route path="/signin" element={<Login /> } />
                        <Route path="/signup" element={ <Register /> } />
                    </Routes>
                </UserContext.Provider>
            </BrowserRouter>
        </>
    )
}

export default App;