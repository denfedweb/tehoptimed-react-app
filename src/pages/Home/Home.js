import React, {Fragment} from 'react';
import styless from "./Home.module.scss";
import Slider from "../../components/Slider/Slider";
import ContentBlock from "../../hoc/ContentBlock/ContentBlock";
import MainCard from "../../components/MainCard/MainCard";


const Home = () => {

    return (
        <Fragment>
            <ContentBlock>
                <Slider/>
            </ContentBlock>
            <ContentBlock>
                <div className="row">
                    <MainCard src="https://www.tehoptimed.md/images/hirurgia.jpg" alt="hirurgia" url="#" title="CHIRURGIE" />
                    <MainCard src="https://www.tehoptimed.md/images/stomatologia.jpg" alt="stomatologia" url="#" title="STOMATOLOGIE" />
                    <MainCard src="https://www.tehoptimed.md/images/bolnichnoe.jpg" alt="bolnichnoe" url="#" title="STAŢIONAR" />
                </div>
            </ContentBlock>
        </Fragment>
    );
};

export default Home;
