import React, { useState } from "react";
import "./Register.css";

const Register = () => {
    return(
        <form className="register">
            <h1>Register New Account</h1>
            <label>
                Enter Username:
                <input type="text" name="username"></input>
            </label>
            <label>
                Enter Password: 
                <input type="password" name="password"></input>
            </label>
            <button>Submit</button>
        </form>
    );
}

export default Register;