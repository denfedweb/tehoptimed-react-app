import React from 'react';
import styless from "./Home.module.scss";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Home = () => {
    return (
        <div className={styless.Home}>
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false}
                interval={4000}
            >
                <div data-src="https://elpais.com/sociedad/imagenes/2018/11/23/actualidad/1542986739_228281_1543228829_noticia_grande.jpg" />
                <div data-src="https://proforientator.ru/publications/articles/New%20Folder/medicina.jpg" />
                <div data-src="https://espanarusa.com/files/autoupload/28/94/12/rlawqlnd373270.jpg" />
                <div data-src="http://respublikarso.org/uploads/posts/2017-08/1502724597_4.jpg" />
            </AutoplaySlider>
        </div>
    );
};

export default Home;
