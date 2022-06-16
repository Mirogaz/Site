import React from 'react';
import './NotFound.scss';
import NavBar from '../../components/NavBar';

const NotFound = () => {
    return (
        <div className='error'>
            <NavBar />
            <p>Not Found</p>
        </div>
    );
};

export default NotFound;