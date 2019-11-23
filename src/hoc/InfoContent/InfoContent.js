import React from 'react';
import stylles from './InfoContent.module.scss';

const InfoContent = ({children}) => {
    return (
        <div className={`card ${stylles.InfoContent}`}>
            {children}
        </div>
    );
};

export default InfoContent;
