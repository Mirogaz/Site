import React, { useState } from 'react';
import './IAB.scss';
import NavBarIAB from '../../components/NavBarIAB';
import AddList from '../../components/AddList';

const IAB = () => {
    const [list, setList] = useState([])

    const addList = () => {
        setList(list.concat(<AddList />))
    }

    return (
        <div>
            <NavBarIAB />
            <div className='map'>
                <div className='headForm'>
                    <p id='name'>Название</p>
                    <p id='dateCreate'>Создан</p>
                    <p id='update'>Обновлен</p>
                </div>
                {list}
                <button onClick={addList} className='btnAdd'>Добавить</button>
            </div>
        </div>
    );
};

export default IAB;