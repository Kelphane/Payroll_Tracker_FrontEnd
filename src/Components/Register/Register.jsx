import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Register.css";

const Register = () => {
    const [credentials, setCredentials] = useState({username: "", password: ""});

    const handleChange = (event) => {
        let newUser = {};

        if(event.target.name === "username"){
            newUser = {
                username: event.target.value,
                password: credentials.password
            }; 
        }else if(event.target.name === "password"){
            newUser = {
                username: credentials.username,
                password: event.target.value
            }; 
        }
        setCredentials(newUser);
    }

    const handleRegister = async (event) => {
        event.preventDefault();

        try {
            await axios.post("http://localhost:5000/api/user/register",
                {
                    username: credentials.username,
                    password: credentials.password
                }
            );
            setCredentials({
                username: "",
                password: ""
            });
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <form className="login-register" onSubmit={handleRegister}>
            <h1>Register New Account</h1>
            <label>
                Username:
                <input 
                    type="text" 
                    name="username" 
                    onChange={handleChange}
                    value={credentials.username}
                />
            </label>
            <label>
                Password: 
                <input 
                    type="password" 
                    name="password" 
                    onChange={handleChange}
                    value={credentials.password}
                />
            </label>
            <button>Register</button>
            <Link to="/login" className="link">Already Have an Account?</Link>
        </form>
    );
}

export default Register;