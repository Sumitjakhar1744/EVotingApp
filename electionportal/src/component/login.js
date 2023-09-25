import React from "react";
import "../style/navbar.css";
import { Link } from 'react-router-dom';
const Login = () => {

    // Function to generate a random math problem
    function generateCaptchaProblem() {
        const num1 = Math.floor(Math.random() * 10);
        const num2 = Math.floor(Math.random() * 10);
        return `${num1} + ${num2} = ?`;
    }

    // Function to check the CAPTCHA answer
    function checkCaptchaAnswer(userAnswer) {
        const [num1Str, , num2Str] = document.getElementById("captchaProblem").textContent.split(" ");
        const num1 = parseInt(num1Str);
        const num2 = parseInt(num2Str);
        const correctAnswer = num1 + num2;
        return parseInt(userAnswer) === correctAnswer;
    }

    // Toggle password visibility
    function togglePasswordVisibility() {
        const passwordInput = document.getElementById("password");
        const passwordToggle = document.querySelector(".password-toggle");
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            passwordToggle.textContent = "👁️";
        } else {
            passwordInput.type = "password";
            passwordToggle.textContent = "🔒";
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        // Populate the CAPTCHA problem
        const captchaProblem = generateCaptchaProblem();
        document.getElementById("captchaProblem").textContent = captchaProblem;

        // Form submission handler
        const loginForm = document.getElementById("loginForm");
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const captchaAnswer = document.getElementById("captcha").value;

            if (checkCaptchaAnswer(captchaAnswer)) {
                // CAPTCHA correct
                alert(`Login successful!\nUsername: ${username}\nPassword: ${password}`);
            } else {
                // CAPTCHA incorrect
                alert("CAPTCHA incorrect. Please try again.");
                // Generate a new CAPTCHA problem
                document.getElementById("captchaProblem").textContent = generateCaptchaProblem();
                // Clear the user's input
                document.getElementById("captcha").value = "";
            }
        });
    });


    return (
        <>
            <main class="login_form bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <div class="login-form">
                    <div class="login">
                        <p>Login</p>
                    </div>
                    <div class="have-acc">
                        <p>Don't Have Account?</p>
                        <Link to="/signup" id="create-acc">
                            Create an account
                        </Link>
                    </div>
                    <div class="username_text">
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div class="password_text">
                        <label for="password">Password:</label>
                        <div class="password-input">
                            <input type="password" id="password" name="password" required />
                            <span class="password-toggle" onclick="togglePasswordVisibility()">&#128065;</span>
                        </div>
                    </div>
                    <div class="pass-function">
                        <div class="remember-pass">
                            <input type="checkbox" id="rememberPassword" name="rememberPassword" />
                            <label for="rememberPassword">Remember Password</label>
                        </div>
                        <div class="forgot-pass">
                            <a href="#" >Forgot Password?</a>
                        </div>
                    </div>
                    <div class="captcha">
                        <label for="captcha">Captcha (solve the math problem):</label>
                        <div class="captcha-enter">
                            <span id="captchaProblem" class="captcha-style"></span>
                            <input type="text" id="captcha" name="captcha" required />
                        </div>
                    </div>
                    <div class="login-btn">
                        <button type="submit">Login</button>
                    </div>
                </div>
            </main>

        </>
    )
}

export default Login;