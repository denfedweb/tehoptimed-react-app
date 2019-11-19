import React from 'react';
import styless from "./Navbar.module.scss";
import NavbarLinks from "./NavbarLinks/NavbarLinks";

const Navbar = () => {
    return (
            <nav className={`navbar navbar-expand-lg navbar-light ${styless.Navbar}`} style={{backgroundColor: "#e3f2fd"}}>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className={`navbar-nav mr-auto ${styless.NavbarLinks}`}>
                        <NavbarLinks/>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search"
                               aria-label="Search"/>

                    </form>
                </div>
            </nav>
    );
};

export default Navbar;
