import React from "react";
import { Link } from 'react-router-dom';
import "../style/navbar.css";

const Masterarea = () => {
    return (
        <>
            <div class="hero-section">
                <div class="hero-msg">
                    <p class="hero-wlm">Welcome...</p>
                    <p class="hero-tagline">Empowering Democracy Digitally: Your Vote, Your Voice, Your e-Election Portal</p>
                    <div class="register-btn">
                        <Link to="/login" className="custom-button bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                            <button>
                                ReadyTo Vote
                            </button>
                        </Link>
                    </div>
                </div>



            </div>
        </>
    )
}


export default Masterarea;