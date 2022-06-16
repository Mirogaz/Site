import React, {useState} from 'react';
import './AddList.scss'
import SvgSelector from '../SvgSelector';

function AddList() {

    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    let newMonth = month < 10 ? `0${month}` : `${month}`;

    let fullDate = date + "." + newMonth + "." + year;
    let update = date + "." + newMonth + "." + year;

    const [showResult, setShowResult] = useState(true);

    const deleteList = () => {
        setShowResult(false);
    }
    
    return (
            <div>
            {
                showResult ? <div className='list'>
                <div className="add">
                    <p id="name">Название</p>
                        <p id="fullDate">{fullDate}</p>
                        <p id="update">{update}</p>
                        <div id='edit'><SvgSelector id='edit' width='20px' height='20px'/></div>
                        <div id='delete'><button onClick={deleteList} className='del'><SvgSelector id='delete' width='20px' height='20px'/></button></div>
                    </div>
                 </div> : null
            }
            </div>
    );
}

export default AddList;