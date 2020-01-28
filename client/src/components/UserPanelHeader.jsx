import React from 'react';
import { Link } from 'react-router-dom';

import menuScripts from '../scripts/menu';

function UserPanelHeader({ session }) {
    return (
    <div className="user-panel">
        {session.logged ?
            (
                <div className="user-options">
                    <button id="user-menu" onClick={() => menuScripts.toggleUserMenu()}>{session.user.firstName} {session.user.lastName}</button>
                    <ul className="user-menu">
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>
                            Option 3
                            <ul>
                                <li>Submenu 1</li>
                                <li>Submenu 2</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            ) : (
                <div className="links-login">
                    <Link to="/login" className="login">Login</Link>
                    <Link to="/register" className="register">Registro</Link>
                </div>
            )
        }
    </div>
)}

export default UserPanelHeader;
