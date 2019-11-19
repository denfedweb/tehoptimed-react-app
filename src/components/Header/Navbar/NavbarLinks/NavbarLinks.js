import React, {Fragment} from 'react';
import {NavLink} from "react-router-dom";
// import styless from "./NavbarLinks.module.scss";

const NavbarLinks = () => {
    return (
        <Fragment>
            <li className="nav-item">
                <NavLink className="nav-link" to="/"><i className="fas fa-home"/> Главная</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/about"><i className="fas fa-suitcase"/> О Компании</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/catalog"><i className="fas fa-medkit"/> Каталог</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/contacts"><i className="fas fa-phone-square-alt"/> Контакты</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/price-list"><i className="far fa-file-powerpoint"/> Прайс-лист</NavLink>
            </li>
        </Fragment>
    );
};

export default NavbarLinks;
