import React from 'react';
import { Link } from 'react-router-dom';

const blur = (name) => {
    const input = document.querySelector(`#login-form input[name="${name}"]`);
    if (input.value !== '')
        input.classList.toggle('has-val');
}

function LoginForm() {
    return(
    <form action="" id="login-form">
        <h1>Login</h1>
        <div className="input-wrap">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" onBlur={() => blur('username')} placeholder="Type your username"/>
            <span></span>
        </div>
        <div className="input-wrap">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onBlur={() => blur('password')} placeholder="Type your password"/>
            <span></span>
        </div>
        <div className="forgot">
            <Link to="/forgot">¿Forgot Password?</Link>
        </div>
    </form>
)}

export default LoginForm;