import React from 'react';
import SvgSelector from '../../components/SvgSelector';
import './Admin.scss';
import { Link } from "react-router-dom";
import NavBar from '../../components/NavBar';

function Admin() {
    const user = 'Администратор';

    return (
        <div className='container'>
            <NavBar />
            <div className='admin'>
                <p>Добро пожаловать, {user}</p>
            </div>
            <div className='card'>
                <div className='card__add'>
                    <div className='head'><SvgSelector id='bill' width='64px' height='64px'/></div>
                    <p>Все карты</p>
                    <Link to='/addcards'><button><div className='add__direct'>Создать карту</div>
                        <div className='btnSvg__add'><SvgSelector id='add' width='28px' height='28px'/></div> 
                    </button> </Link>
                </div>
                <div className='card__directory'>
                    <div className='head'><SvgSelector id='contract' width='64px' height='64px'/></div>
                        <p>Справочники (ТЭГИ)</p>
                        <button><div className='div__direct'>Справочники</div>
                        <div className='btnSvg__arrow'><SvgSelector id='up-arrow' width='28px' height='28px'/></div>
                        </button>
                    </div>
                </div>
               <Link to='/iab'><p>IAB ecosystems</p></Link>
        </div>
    );
}

export default Admin;