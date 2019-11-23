import React from 'react';
import stylles from './Contacts.module.scss';
import Toolbar from "../../components/Toolbar/Toolbar";
import ContentBlock from "../../hoc/ContentBlock/ContentBlock";
import InfoContent from "../../hoc/InfoContent/InfoContent";

const Contacts = () => {
    return (
        <div className={stylles.Contacts}>
            <ContentBlock>
                <Toolbar/>
            </ContentBlock>
            <InfoContent>
                <h1>Контактная информация</h1>
                <h3>„TEHOPTIMED” SA </h3>
                <p>MD 2044, Chişinău, str. M.Dragan 19а</p>
                <table className={`table table-borderless ${stylles.Table}`}>
                    <thead>
                    <tr>
                        <th scope="col">Телефоны:</th>
                        <th scope="col">Факс:</th>
                        <th scope="col">e-mail:</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>(+373) 22-47-12-15</td>
                        <td>(+373) 22-47-22-73</td>
                        <td><a href="mailto:tehoptimed@inbox.ru">tehoptimed@indox.ru</a></td>
                    </tr>
                    <tr>
                        <td>(+373) 67272996</td>
                    </tr>
                    </tbody>
                </table>
                <p><strong> Depozitar:&nbsp;</strong>Veaceslav 06 000 79 71</p>
            </InfoContent>
        </div>
    );
};

export default Contacts;
