import React from 'react';
import classes from "./Logo.module.scss";
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <div className={classes.Logo}>
            <Link to="/"><img alt="Tehoptimed" src="/img/logo.png" /></Link>
            <div className={classes.Contacts}>
                <div><i className="fas fa-phone-alt" /> 022-47-12-15</div>
                <div><i className="fas fa-fax" /> fax: 022-47-22-73</div>
                <div><i className="fas fa-phone-alt" /> 022-47-37-69</div>
                <div>tehoptimed@inbox.ru</div>
            </div>
        </div>
    );
};

export default Logo;
