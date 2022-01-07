import React, { useEffect } from "react";
import { Link } from "react-router-dom";

/* CSS Import */
import "./NavBar.css";

const NavBar = ({ userId }) => {

    const handleLogout = () => {
        window.localStorage.clear();
        window.location = "/login";
    }

    if(userId === " "){
        /* Displayed When User is NOT Logged In. */
        return(
            <nav className="nav-bar">
                <p>Hello World!</p>
                <Link to="/login" className="nav-link">Login</Link>
            </nav>
        );
    }else if(userId !== " "){
        /* Displayed When User IS Logged In */
        return(
            <nav className="nav-bar">
                <Link to="/home" className="nav-link">Home</Link>
                <button className="nav-link" onClick={handleLogout}>Logout</button>
            </nav>
        );
    }
};

export default NavBar;