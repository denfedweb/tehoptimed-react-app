import React from 'react';
import stylles from './ContentBlock.module.scss';

const ContentBlock = ({children}) => {
    return (
        <div className={stylles.ContentBlock}>
            {children}
        </div>
    );
};

export default ContentBlock;
