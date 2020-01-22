import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
    <header id="header">
        <div className="logo">
            <img src="img/logo.png" alt="Logo"/>
        </div>
        <button id="btn-menu" onClick={() => null /* toggle_menu() */}>p</button>
        <nav className="header-nav">
            <ul className="main-menu">
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/about">Nosotros</Link>
                </li>
                <li>
                    <Link to="/contact">Contacto</Link>
                </li>
            </ul>
            <div className="header-nav-right">
                <div className="user-panel">
                    <Link to="/login" className="login">Login</Link>
                    <Link to="/register" className="register">Registro</Link>
                </div>
            </div>
        </nav>
    </header>
)}

export default Header;