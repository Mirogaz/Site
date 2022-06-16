import React from 'react';
import SvgSelector from '../SvgSelector';
import './NavBarStyle.scss';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className='menu'>
            <div className='logo'>
            <Link to='/'> <img src='/icons/img/logo.png' alt='Logo' /> </Link>
            </div>
            <div className='svgNavBar'>
               <Link to='/settings'> <SvgSelector id='settings' width='26px' height='26px' className='settings'/> </Link>
               <Link to='/profile'> <SvgSelector id='user' width='26px' height='26px' className='user'/> </Link>
            </div>
        </div>
    );
}

export default NavBar;