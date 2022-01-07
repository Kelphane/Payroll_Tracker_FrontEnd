import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = (props) => {
    const [credentials, setCredentials] = useState({username: "", password: ""});
    const [invalidMessage, setInvalidMessage] = useState(false);

    const handleChange = (event) => {
        let input = {username: credentials.username, password: credentials.password};

        if(event.target.name === "username"){
            input = {
                username: event.target.value,
                password: credentials.password
            }
        }else if(event.target.name === "password"){
            input = {
                username: credentials.username,
                password: event.target.value
            }
        }
        
        setCredentials(input);
    };

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            let response = await axios.post("http://localhost:5000/api/user/login", 
                {
                    username: credentials.username,
                    password: credentials.password
                }
            );
            window.localStorage.setItem('token', response.data);
            //window.location(/home);
        } catch (error) {
            if(error.message.includes("400")) setInvalidMessage(true);
            console.log(error);
        }
    }

    return(
        <div>
            <form onSubmit={handleLogin} className="login-register">
                <h1>Login to Account</h1>
                <label>
                    Username: 
                    <input 
                        type="text" 
                        name="username" 
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Password:
                    <input 
                        type="password" 
                        name="password" 
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Login</button>
                {invalidMessage && <p>Invalid Username and Password!</p>}
                <Link to="/register" className="link">Click to Register New Account</Link>
            </form>
        </div>
    );
};

export default Login;