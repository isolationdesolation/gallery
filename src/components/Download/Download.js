import React from 'react';
import './Download.scss';

const ButtonDownload = () =>
(
    <button
        type="button"
        className="ButtonDownload"
        onClick={() => alert("Здесь будет загрузка изображения...")}
    >
        Загрузить изображения
    </button>
)

export default ButtonDownload;