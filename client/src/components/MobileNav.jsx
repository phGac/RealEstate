import React from 'react';
import { Link } from 'react-router-dom';

function MobileNav() {
    return (
    <nav id="mobile-menu">
        <button className="close" onClick={() => null /* toggle_menu() */}>X</button>
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
        </ul>
    </nav>
)}

export default MobileNav;