import React from 'react';
import { Link } from 'react-router-dom';

import menuScripts from '../scripts/menu';

function Header({ session }) {
    return (
    <header id="header">
        <div className="logo">
            <img src="img/logo.png" alt="Logo"/>
        </div>
        <button id="btn-menu" onClick={() => menuScripts.toggleNavMenu()}>p</button>
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
                <li>
                    <Link to="/search">Search*</Link>
                </li>
            </ul>
            <div className="header-nav-right">
                {session.logged ?
                    (
                        <div className="user-panel">
                            <p>{session.user.firstName}</p>
                        </div>
                    ) : (
                        <div className="user-panel">
                            <Link to="/login" className="login">Login</Link>
                            <Link to="/register" className="register">Registro</Link>
                        </div>
                    )
                }
            </div>
        </nav>
    </header>
)}

export default Header;