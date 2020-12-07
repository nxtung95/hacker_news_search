import React from 'react';
import Header from '../header/Header';
import Filter from '../filter/Filter';
import Setting from '../.././assets/css/setting/Setting.css';

const setting = () => {
    return (
        <React.Fragment>
            <Header visibleSearchBar={false} url="/" icon="fa fa-arrow-left" textIcon="Back" />
            <Filter isFilter={false} />
            <section className="settings">
                <form>
                    <fieldset className="settings-fieldset">
                        <h2>Display options</h2>
                        <div></div>
                    </fieldset>
                    <fieldset className="settings-fieldset"></fieldset>
                    <div className="settings-apply"></div>
                </form>
            </section>
        </React.Fragment>
    );
}

export default setting;