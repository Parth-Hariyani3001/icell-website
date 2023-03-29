import React from "react";
import "./header.css"
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <>
            <div className = "Header-Container" >
                <div>
                    <h1>Logo</h1>
                </div>
                <div className = "child" >
                    <Link to='/'><h1>Home</h1></Link>   
                    <Link to='/about'><h1>About us</h1></Link>
                </div>
            </div>
        </>
    );
}
export default Header;