import React from 'react';
import stylles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={stylles.Footer}>
            <span>© 2017 „TEHOPTIMED” SA MD 2044, Chişinău, str. M.Dragan 19 а</span>
            <span>Создание сайта: <a href="https://github.com/denfedweb">denfedweb</a></span>
        </footer>
    );
};

export default Footer;
