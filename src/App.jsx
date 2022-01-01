/* Imports */
import React from "react";
import { Route, Routes } from "react-router-dom";

/* Component Imports */
import NavBar from "./Components/NavBar/NavBar";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

const App = () => {
    return(
        <div>
            <NavBar />
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    );
};

export default App;