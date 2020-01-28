import React from 'react';
import { Link } from 'react-router-dom';

import UserPanelHeader from '../containers/UserPanelHeader';

import menuScripts from '../scripts/menu';

function Header() {
    return (
    <header id="header">
        <div className="logo">
            <span className="helper"></span>
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
                <UserPanelHeader />
            </div>
        </nav>
    </header>
)}

export default Header;