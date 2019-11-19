import React, {Fragment} from 'react';
import {NavLink} from "react-router-dom";
// import styless from "./NavbarLinks.module.scss";

const NavbarLinks = () => {
    return (
        <Fragment>
            <li className="nav-item">
                <NavLink className="nav-link" to="/">Главная <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/">Link</NavLink>
            </li>
            <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button"
                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                </NavLink>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <NavLink className="dropdown-item" to="/">Action</NavLink>
                    <NavLink className="dropdown-item" to="/">Another action</NavLink>
                    <div className="dropdown-divider"/>
                    <NavLink className="dropdown-item" to="/">Something else here</NavLink>
                </div>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link disabled" to="/" tabIndex="-1" aria-disabled="true">Disabled</NavLink>
            </li>
        </Fragment>
    );
};

export default NavbarLinks;
