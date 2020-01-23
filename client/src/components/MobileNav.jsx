import React from 'react';
import { Link } from 'react-router-dom';

import menuScripts from '../scripts/menu';

function MobileNav() {
    return (
    <nav id="mobile-menu">
        <button className="close" onClick={() => menuScripts.toggleNavMenu()}>X</button>
        <ul>
            <li>
                <Link to='/'>Inicio</Link>
            </li>
            <li>
                <Link to='/about'>Nosotros</Link>
            </li>
            <li>
                <Link to='/contact'>Contacto</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
            <li>
                <Link to="/search">Search*</Link>
            </li>
        </ul>
    </nav>
)}

export default MobileNav;