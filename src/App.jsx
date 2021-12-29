/* Imports */
import React from "react";
import { Route, Routes } from "react-router-dom";

/* Component Imports */
import NavBar from "./Components/NavBar/NavBar";
import Login from "./Components/Login/Login";

const App = () => {
    return(
        <div>
            <h1>Hello World!</h1>
            <NavBar />
            <Routes>
                <Route path="/login" element={<Login />}/>
            </Routes>
        </div>
    );
};

export default App;