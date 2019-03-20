import React from 'react';
import './Navbar.scss';
import logo from '../../logo.png';

export default function Navbar() {
    return (
        <nav className="navbar">
            <img  src={logo} alt="city tours logo"/>
            <ul className="nav-links">
              
                <li>
                    <a href="#footer" className="nav-link ">Contact</a>
                </li>
                  
                <li>
                    <a href="#tour" className="nav-link ">Tours</a>
                </li>
               
            </ul>
        </nav>
    );
}
