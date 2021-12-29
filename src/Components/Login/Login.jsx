import React, { useState } from "react";

const Login = (props) => {
    const [credentials, setCredentials] = useState({username: "", password: ""});

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

    console.log(credentials);

    return(
        <div>
            <form>
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
            </form>
        </div>
    );
};

export default Login;