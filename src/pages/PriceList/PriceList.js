import React from 'react';
import stylles from './PriceList.module.scss';
import ContentBlock from "../../hoc/ContentBlock/ContentBlock";
import Toolbar from "../../components/Toolbar/Toolbar";
import InfoContent from "../../hoc/InfoContent/InfoContent";

const PriceList = () => {
    return (
        <div className={stylles.PriceList}>
            <ContentBlock>
                <Toolbar/>
            </ContentBlock>
            <InfoContent>
                <h1>Прайс-лист</h1>
                <h3 className="text-center">Скачать прайс листы</h3>
                <p><a href="/images/files/1.-Ianuarie-ro-ru-2019-TEHOPTIMED---General.doc">Price List 2019 TEHOPTIMED</a></p>
            </InfoContent>
        </div>
    );
};

export default PriceList;
