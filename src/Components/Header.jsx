import React from "react";
import "./header.css"

const Header = () => {
    return(
        <>
            <div className = "Header-Container" >
                <div>
                    <h1>Logo</h1>
                </div>
                <div className = "child" >
                    <h1>Home</h1>
                    <h1>About us</h1>
                </div>
            </div>
        </>
    );
}
export default Header;