/* Imports */
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import jwtDecode from "jwt-decode";

/* Component Imports */
import NavBar from "./Components/NavBar/NavBar";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Home from "./Components/Home/Home";
import Employees from "./Components/Employees/Employees";

const App = () => {
    const [userId, setUserId] = useState(" ");
    useEffect(() => {getToken();});

    const getToken = () => {
        let token = window.localStorage.getItem('token');
        if(token){
            let id = jwtDecode(token).id;
            setUserId(id);
        }
    }
    
    return(
        <div>
            <NavBar userId={userId} />
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<Home />} />
                <Route path="/employees" element={<Employees userId={userId} />} />
            </Routes>
        </div>
    );
};

export default App;