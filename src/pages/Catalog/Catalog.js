import React from 'react';
import stylles from './Catalog.module.scss';
import ContentBlock from "../../hoc/ContentBlock/ContentBlock";
import Toolbar from "../../components/Toolbar/Toolbar";
import InfoContent from "../../hoc/InfoContent/InfoContent";

const Catalog = () => {
    return (
        <div className={stylles.Catalog}>
            <ContentBlock>
                <Toolbar/>
            </ContentBlock>
            <InfoContent>
                <div>...</div>
            </InfoContent>
        </div>
    );
};

export default Catalog;
