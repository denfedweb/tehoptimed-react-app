import React, {Fragment} from 'react';
import stylles from './Toolbar.module.scss';

const Toolbar = () => {
    return (
        <Fragment>
            <div className={stylles.ToolbarTitle}>Каталог</div>
            <ul className={`list-group list-group-flush ${stylles.Toolbar}`}>
                <li className="list-group-item">Аптечное</li>
                <li className="list-group-item">Больничное</li>
                <li className="list-group-item">Гинекология</li>
                <li className="list-group-item">Диагностика</li>
                <li className="list-group-item">Лабораторное</li>
                <li className="list-group-item">Наркозно-Дыхательная</li>
                <li className="list-group-item">Нейрохирургия</li>
                <li className="list-group-item">Оториноларингология</li>
                <li className="list-group-item">Офтальмология</li>
                <li className="list-group-item">Рентген</li>
                <li className="list-group-item">Стерилизация</li>
                <li className="list-group-item">Стоматология</li>
                <li className="list-group-item">Травматология</li>
                <li className="list-group-item">Урология</li>
                <li className="list-group-item">Физиотерапия</li>
                <li className="list-group-item">Хирургия</li>
            </ul>
        </Fragment>
    );
};

export default Toolbar;
