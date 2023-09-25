import React from "react";
import "../style/navbar.css";

const Footer = () => {
    return(
        <>
            <footer class="footer">
                <div class="row">
                    <div class="footer-col">
                        <div class="footer-logo">
                            <div class="foot-logo_img"></div>
                        </div>

                        <div class="footer-social">
                            <ul>

                                <li class="follow">Follow Us on</li>
                                <div class="social-links">
                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                    <a href="#"><i class="fab fa-youtube"></i></a>
                                    <a href="#"><i class="fab fa-discord"></i></a>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-col">
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Advertise with us</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <ul>
                            <li><a href="#">Terms and conditions</a></li>
                            <li><a href="#">Review Guidlines</a></li>
                            <li><a href="#">Donot sell any information</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <ul>
                            <li><a href="#">Privacy policy</a></li>
                            <li><a href="#">Cookies policy</a></li>
                            <li><a href="#">Contact us</a></li>
                        </ul>
                    </div>

                </div>
                <div class="copyright">
                
                 <p>© 2023 Gamer's ADDA. ALL RIGHTS RESERVED.</p>
                </div>

            </footer>
        </>
    )
}

export default Footer;
