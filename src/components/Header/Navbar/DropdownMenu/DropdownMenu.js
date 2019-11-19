import React from 'react';
import styless from './DropdownMenu.module.scss';

const DropdownMenu = () => {
    return (
        <div className={styless.DropdownMenu}>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Аптечное</li>
                <li className="list-group-item">Больничное</li>
                <li className="list-group-item">Гинекология</li>
                <li className="list-group-item">Диагностика</li>
                <li className="list-group-item">Лабораторное</li>
                <li className="list-group-item">Наркозно-Дыхательная</li>
            </ul>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Нейрохирургия</li>
                <li className="list-group-item">Оториноларингология</li>
                <li className="list-group-item">Офтальмология</li>
                <li className="list-group-item">Рентген</li>
                <li className="list-group-item">Стерилизация</li>
            </ul>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Стоматология</li>
                <li className="list-group-item">Травматология</li>
                <li className="list-group-item">Урология</li>
                <li className="list-group-item">Физиотерапия</li>
                <li className="list-group-item">Хирургия</li>
            </ul>
        </div>
    );
};

export default DropdownMenu;
