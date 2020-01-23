import React from 'react';
import { Link } from 'react-router-dom';
import v8n from 'v8n';

const blur = (name) => {
    const input = document.querySelector(`#login-form input[name="${name}"]`);
    if (input.value !== '')
        input.classList.toggle('has-val');
}

function LoginForm() {
    return(
    <form action="" onSubmit={validate} id="login-form">
        <h1>Login</h1>
        <div className="input-wrap">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" onBlur={() => blur('email')} placeholder="Type your email"/>
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
        <div className="submit">
            <button type="submit">Login</button>
        </div>
        <div className="signup">
            <Link to="/register">register</Link>
        </div>
    </form>
)}

function validate(e) {
    e.preventDefault();
    
    const form = e.target;
    const email = form.querySelector('input[name="email"]');
    const password = form.querySelector('input[name="password"]');

    const emailVal = v8n().pattern(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/);
    const passwordVal = v8n().string().minLength(6).maxLength(10);

    if(! emailVal.test(email.value))
        console.log('email is not valid');

    if (! passwordVal.test(password.value))
        console.log('password is not valid');

    return false;
}

export default LoginForm;