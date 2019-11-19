import React, {Fragment} from 'react';
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";

const Header = () => {
    return (
        <Fragment>
            <Logo />
            <Navbar />
        </Fragment>
    );
};

export default Header;
