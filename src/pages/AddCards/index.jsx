import React, { useState } from 'react';
import './AddCards.scss';
import NavBar from '../../components/NavBar';

function AddCards() {

    const [files, setFiles] = useState([]);
    const [image, setImage] = useState(null);

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
        setImage(URL.createObjectURL(event.target.files[0]));
        }
    } 
    
    const overideEventDefaults = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    const handleDragAndDropFiles = (e) => {
        overideEventDefaults(e);
        if(!e.dataTransfer) return;
        handleFiles(e.dataTransfer.files);
    }
    
    const handleFiles = (fileList) => {
        if (fileList) {
            let files = Array.from(fileList);
            setFiles(files);
            console.log(files);
        }
    }

    return (
        <div>
            <NavBar />
            <div className='header'>
                <p>Создание карты</p>
            </div>
            <div className='formAddCard'>
                <div className='dataForm'>
                    <div className='fileName'>
                            <label>Имя файла (google диск)
                            <input type='text' />
                            </label>
                        </div>
                        <div className='nameCard'>
                            <label>Название
                            <input type='text' />
                            </label>
                        </div>
                    </div>
                <div className='description'>
                    <label>Описание
                    <input type='text' />
                    </label>
                </div>
                    <div className='dataForm'>
                        <div className='year'>
                            <label>Год
                            <input type='text' />
                            </label>
                        </div>
                        <div className='version'>
                            <label>Версия
                            <input type='text' />
                            </label>
                        </div>
                        <div className='shortURL'>
                            <label>ShortURL (Только английские буквы, без пробелов и спец.симоволов)
                            <input type='text' />
                            </label>
                        </div>
                    </div>
                    <div className='dataForm'>
                        <div className='compiler'>
                            <label>Составитель
                                <input type='text' />
                            </label>
                        </div>
                        <div className='compilerLink'>
                            <label>Составитель / ссылка
                                <input type='text' />
                            </label>
                        </div>
                    </div>
                    <div className='nameCategory'>
                    <label>Название категории
                    <input type='text' />
                    </label>
                    </div>
                    <div className='fileInput'>
                    <p>Загрузить логотипы</p>
                        <div className='dropArea'
                            onDrop={handleDragAndDropFiles}
                            onDragEnter={overideEventDefaults}
                            onDragLeave={overideEventDefaults}
                            onDragOver={overideEventDefaults}
                        >
                            <form className='myForm'>
                                <p>Перетащите в это поле логотипы или</p>
                                <input type='file' id='fileElem' multiple accept='image/*' onChange={onImageChange}  />
                                <label class='button' for='fileElem' >Загрузить файл с ПК</label>

                                {
                                    files.length > 0 ? files[0].name : ""
                                }

                                {
                                    image ? <img src={image} alt='Img' /> : ""
                                }
                                
                                
                            </form>
                        </div>
                    </div>
                    <div className='btnCard'><button>Создать карту</button></div>
            </div>
        </div>
    );
}

export default AddCards;