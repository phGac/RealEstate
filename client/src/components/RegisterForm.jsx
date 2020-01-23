import React from 'react';
import { Link } from 'react-router-dom';

function RegisterForm() {
    return(
    <form action="" id="register-form">
        <h1>Register</h1>
        <div className="input-wrap">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" placeholder="Type your first name"/>
            <span></span>
        </div>
        <div className="input-wrap">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" placeholder="Type your last name"/>
            <span></span>
        </div>
        <div className="input-wrap">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Type your email"/>
            <span></span>
        </div>
        <div className="input-wrap">
            <label htmlFor="password">Password</label>
            <input type="text" name="password" placeholder="Create a password"/>
            <span></span>
        </div>
        <div className="submit">
            <button type="submit">Register</button>
        </div>
        <div className="signin">
            <Link to="/login">login</Link>
        </div>
    </form>
)}

export default RegisterForm;