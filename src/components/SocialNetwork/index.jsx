import React from 'react';
import SvgSelector from '../SvgSelector';
import './SocialNetwork.scss';

function SocialNetwork() {
    return (
        <div className='socialNetwork'>
            <SvgSelector id='vk' width='20px' height='19px' className='socialNetwork__link__vk' />
            <SvgSelector id='facebook' width='18px' height='18px' className='socialNetwork__link' />
            <SvgSelector id='odnoklassniki' width='18px' height='18px' className='socialNetwork__link' />
            <SvgSelector id='xmlid' width='18px' height='18px' className='socialNetwork__link' />
            <SvgSelector id='twitter' width='18px' height='15px' className='socialNetwork__link' />
            <SvgSelector id='linkedin' width='18px' height='18px' className='socialNetwork__link' />
            <SvgSelector id='telegram' width='18px' height='15px' className='socialNetwork__link' />
            <SvgSelector id='link' width='18px' height='18px' className='socialNetwork__link' />
        </div>
    );
}

export default SocialNetwork;