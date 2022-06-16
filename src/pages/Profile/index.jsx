import React from 'react';
import './Profile.scss';
import NavBar from '../../components/NavBar';

const Profile = () => {
    return (
        <div className='profile'>
            <NavBar />
            <p>Профиль</p>
        </div>
    );
};

export default Profile;