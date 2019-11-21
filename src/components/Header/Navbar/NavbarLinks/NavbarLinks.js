import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import styless from "./NavbarLinks.module.scss";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import{NavbarContext} from "../NavbarContext";

const NavbarLinks = () => {
     const [state, setState] = useState({
         dropdownOpened: false
     });
    function onMouseEnter() {
        setState({dropdownOpened: true});
    }
    function onMouseLeave(){
        setState({dropdownOpened: false});
    }
    return (
        <NavbarContext.Provider value={{
            onMouseEnter, onMouseLeave, state
        }}>
            <li className="nav-item">
                <NavLink className="nav-link" exact to="/"><i className="fas fa-home"/> Главная</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/about"><i className="fas fa-suitcase"/> О Компании</NavLink>
            </li>
            <li className={`nav-item ${styless.NavbarLink}`}>
                <NavLink onMouseOver={onMouseEnter} onMouseLeave={onMouseLeave} className="nav-link" to="/catalog"><i className="fas fa-medkit"/> Каталог</NavLink>
                <DropdownMenu />
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/contacts"><i className="fas fa-phone-square-alt"/> Контакты</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/price-list"><i className="far fa-file-powerpoint"/> Прайс-лист</NavLink>
            </li>
        </NavbarContext.Provider>
    );
};

export default NavbarLinks;
