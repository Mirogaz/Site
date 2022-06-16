import React from 'react';
import { Link } from "react-router-dom";
import './NavBarIAB.scss';

function NavBar() {
    return (
        <div className='menuIAB'>
            <div className='logo'>
            <Link to='/'> <img src='/icons/img/logo.png' alt='Logo' /> </Link>
            </div>
            <p>IBM ecosystems maps</p>
        </div>
    );
}

export default NavBar;