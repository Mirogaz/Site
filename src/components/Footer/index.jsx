import React from 'react';
import SocialNetwork from '../SocialNetwork';
import './Footer.scss';

function Footer() {
    return (
        <footer className='footer'>
            <div className='SocialNetwork'><SocialNetwork /></div>
            <div className='line'></div>
            <div className='reference'>
                <p>&copy; 2020 IAB Russian</p>
                <p>Свои комментарии/пожелания/замечания вы можете оставить <span>здесь</span></p>
            </div>
        </footer>
    );
}

export default Footer;