import React, { useState } from 'react';
import Header from '../header/Header';
import Filter from '../filter/Filter';
import Footer from '../footer/Footer';
import '../.././assets/css/setting/Setting.css';

const Setting = (props) => {
    console.log('Setting');
    const optionStyle = ["Default", "Experimental"];
    const optionHitPerPage = [10, 20, 30, 50];
    const optionType = ['All', 'Stories', 'Comments'];
    const optionPopularType = ['Most popular fist', 'Most recent first'];
    const optionDateRange = ['Last 24h', 'Last week', 'Last month', 'Last year', 'Forever'];
    const [visible, visibleStyle] = useState(false);

    const changeUI = () => {
        props.changeDefaultLight();
        props.changeVisibleSidebar();
    }
    return (
        <React.Fragment>
            <Header visibleSearchBar={false} url="/" icon="fa fa-arrow-left" textIcon="Back" />
            <Filter isFilter={false} titleFilter="Settings" />
            <section className="settings">
                <form>
                    <fieldset className="settings-fieldset">
                        <h2>Display options</h2>
                        {
                            visible && (
                                <SettingRow labelSettingRow="Show thumbnails" type="checkbox" defaultValue={false} />
                            )
                        }
                        <SettingRow labelSettingRow="Style" listOption={optionStyle} defaultValue="Default" type="pulldown" callback={visibleStyle} />
                        <SettingRow labelSettingRow="Hits per page" listOption={optionHitPerPage} defaultValue={optionHitPerPage[2]} type="pulldown" />
                    </fieldset>
                    <fieldset className="settings-fieldset">
                        <h2>Ranking options</h2>
                        <SettingRow labelSettingRow="Default type" listOption={optionType} defaultValue={optionType[1]} type="pulldown" />
                        <SettingRow labelSettingRow="Default type" listOption={optionPopularType} defaultValue={optionPopularType[0]} type="pulldown" />
                        <SettingRow labelSettingRow="Default date range" listOption={optionDateRange} defaultValue={optionDateRange[4]} type="pulldown" />
                        <SettingRow labelSettingRow="Use the story text for search" type="checkbox" defaultValue={true} />
                        <SettingRow labelSettingRow="Use the author's username for search" type="checkbox" defaultValue={true} />
                        <SettingRow labelSettingRow="Typo-tolerance" type="checkbox" defaultValue={true} />
                    </fieldset>
                    {
                        visible && (
                            <fieldset className="settings-fieldset">
                                <h2>Your options</h2>
                                <SettingRow labelSettingRow="Your HN login" type="input" defaultValue="" />
                            </fieldset>
                        )
                    }
                    <div className="setting-apply">
                        <button onClick={changeUI} type="button">Apply</button>
                    </div>
                </form>
            </section>
            <Footer />
        </React.Fragment>
    );
}


const SettingRow = (props) => {
    const [value, setValue] = useState(props.defaultValue);

    const handleInput = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        if (value === 'Experimental') {
            props.callback(true);
        } else if (value === 'Default') {
            props.callback(false);
        }
        setValue(value);
    }

    let element;
    if (props.type === "pulldown") {
        element = <PullDown listOption={props.listOption} callback={handleInput} default={value} />
    } else if (props.type === "checkbox") {
        element = <CheckBox type={props.type} callback={handleInput} default={value} />
    } else if (props.type === "input") {
        element = <Input type={props.type} default={value} callback={handleInput} />
    }

    return (
        <div className="setting-row">
            <label>{props.labelSettingRow}</label>
            <div className="setting-input">
                {element}
            </div>
        </div>
    );
}

const PullDown = (props) => {
    return (
        <select value={props.default} onChange={(event) => { props.callback(event) }}>
            {
                props.listOption.map((val, key) => {
                    return (
                        <option value={val} key={key}>
                            {val}
                        </option>
                    );
                })
            }
        </select>
    );
}

const CheckBox = (props) => {
    return (
        <input type={props.type} checked={props.default} onChange={(event) => { props.callback(event) }} />
    );
}

const Input = (props) => {
    return (
        <input id="login" type={props.type} value={props.default} onChange={(event) => { props.callback(event) }} />
    );
}

export default Setting;