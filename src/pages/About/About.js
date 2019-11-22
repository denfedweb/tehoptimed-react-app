import React from 'react';
import stylles from './About.module.scss';
import ContentBlock from "../../hoc/ContentBlock/ContentBlock";
import Toolbar from "../../components/Toolbar/Toolbar";

const About = () => {
    return (
        <div className={stylles.About}>
            <ContentBlock>
                <Toolbar/>
            </ContentBlock>
            <div>
                gdfgdfgdf
            </div>
        </div>
    );
};

export default About;
