/* Imports */
import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import jwtDecode from "jwt-decode";

/* Component Imports */
import NavBar from "./Components/NavBar/NavBar";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

const App = () => {
    const [userId, setUserId] = useState("");

    useEffect(() => {getToken();});

    const getToken = () => {
        let token = window.localStorage.getItem('token');
        if(token){
            let userId = jwtDecode(token);
            console.log(userId);
        }
    }

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