import React from 'react';
import stylles from './MainCard.module.scss';
import {Link} from "react-router-dom";

const MainCard = (props) => {
    const {src, alt, title, url} = props;

    return (
        <div className="col-md-4">
            <Link to={url} className={stylles.MainCard}>
                <div>
                    <img src={src} alt={alt} />
                    <span>{title}</span>
                </div>
            </Link>
        </div>
    );
};

export default MainCard;
