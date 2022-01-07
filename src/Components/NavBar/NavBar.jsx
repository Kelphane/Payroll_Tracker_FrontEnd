import React, { useEffect } from "react";
import { Link } from "react-router-dom";

/* CSS Import */
import "./NavBar.css";

const NavBar = ({ userId }) => {

    if(userId === " "){
        return(
            <nav className="nav-bar">
                <p>Hello World!</p>
            </nav>
        );
    }else if(userId !== " "){
        return(
            <nav className="nav-bar">
                <Link to="/login" className="nav-link">Login</Link>
            </nav>
        );
    }
};

export default NavBar;