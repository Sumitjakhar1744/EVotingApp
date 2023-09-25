import React from "react";
import "../style/navbar.css";
import { Link } from 'react-router-dom';
const Navbar = ()=>{
    return (
    
    <>
    <nav className="Navigation">
        <div className="navbar">
            <div className="nav-logo">
                <div className="nav-logo_img"></div>
                <div className="logo-title">
                    <div className="logo-name">
                        <p>E-election Portol</p>
                    </div>
                    <div className="logo-tag-line">
                        <p>Vote For Better Tomarrow</p>
                    </div>

                </div>
            </div>
            <div className="nav-tabs mr-4 ">
                <div
                    className="nav-home bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded font-serif ">
                    <a href="../skeleton/header.html">Home</a>
                </div>
                <div className="nav-about bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 rounded font-serif	">
                    <Link to="/aboutUs">About</Link>
                </div>
                <div className="nav-contect bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 rounded font-serif	">
                    <a href="#">Contect Us</a>
                </div>
                <div className="nav-help bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 rounded font-serif	">
                <Link to="/help">FAQs/Help</Link>
                </div>
            </div>
        </div>
    </nav>
    </>
    )
}


export default Navbar;