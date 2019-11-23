import React, {Fragment} from 'react';
import stylles from './InfoContent.module.scss';
import Toolbar from "../../components/Toolbar/Toolbar";
import ContentBlock from "../ContentBlock/ContentBlock";

const InfoContent = ({children}) => {
    return (
        <Fragment>
            <ContentBlock>
                <Toolbar/>
            </ContentBlock>
            <div className={`card ${stylles.InfoContent}`}>
                {children}
            </div>
        </Fragment>
    );
};

export default InfoContent;
