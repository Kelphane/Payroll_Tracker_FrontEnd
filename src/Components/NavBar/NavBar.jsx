import React from "react";
import { Link } from "react-router-dom";

/* CSS Import */
import "./NavBar.css";

const NavBar = (props) => {
    return(
        <nav className="nav-bar">
            <Link to="/login" className="nav-link">Login</Link>
        </nav>
    );
};

export default NavBar;