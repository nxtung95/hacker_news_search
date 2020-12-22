import React, { useState } from 'react';
import Header from '../header/Header';
import Filter from '../filter/Filter';
import Footer from '../footer/Footer';
import SideBar from '../sidebar/SideBar';
import {
    OPTION_STYLE, 
    OPTION_HIT_PER_PAGE, 
    OPTION_TYPE, 
    OPTION_POPULAR_TYPE, 
    OPTION_DATE_RANGE
} from '../.././utils/Const';
import '../.././assets/css/setting/Setting.css';

const Setting = (props) => {
    const [visible, visibleStyle] = useState(false);

    const changeUI = () => {
        props.changeDefaultLight();
        props.changeVisibleSidebar();
    }
    return (
        <React.Fragment>
            <Header visibleSearchBar={false} url="/" icon="fa fa-arrow-left" textIcon="Back" />
            <Filter isFilter={false} titleFilter="Settings" />
            {
                props.visibleSidebar && (
                    <SideBar
                        isThemeLight={props.isThemeLight}
                        changeThemeLight={props.changeThemeLight}
                     />
                )
            }
            <section className="settings">
                <form>
                    <fieldset className="settings-fieldset">
                        <h2>Display options</h2>
                        {
                            visible && (
                                <SettingRow labelSettingRow="Show thumbnails" type="checkbox" defaultValue={props.value} setValue={value => props.setValue(value)}/>
                            )
                        }
                        <SettingRow labelSettingRow="Style" listOption={OPTION_STYLE} defaultValue={props.value} type="pulldown" callback={visibleStyle} setValue={value => props.setValue(value)} />
                        <SettingRow labelSettingRow="Hits per page" listOption={OPTION_HIT_PER_PAGE} defaultValue={props.value} type="pulldown" setValue={value => props.setValue(value)} />
                    </fieldset>
                    <fieldset className="settings-fieldset">
                        <h2>Ranking options</h2>
                        <SettingRow labelSettingRow="Default type" listOption={OPTION_TYPE} defaultValue={props.value} type="pulldown" setValue={value => props.setValue(value)} />
                        <SettingRow labelSettingRow="Default type" listOption={OPTION_POPULAR_TYPE} defaultValue={props.value} type="pulldown" setValue={value => props.setValue(value)} />
                        <SettingRow labelSettingRow="Default date range" listOption={OPTION_DATE_RANGE} defaultValue={props.value} type="pulldown" setValue={value => props.setValue(value)} />
                        <SettingRow labelSettingRow="Use the story text for search" type="checkbox" defaultValue={props.value} setValue={value => props.setValue(value)} />
                        <SettingRow labelSettingRow="Use the author's username for search" type="checkbox" defaultValue={props.value} setValue={value => props.setValue(value)} />
                        <SettingRow labelSettingRow="Typo-tolerance" type="checkbox" defaultValue={props.value} setValue={value => props.setValue(value)} />
                    </fieldset>
                    {
                        visible && (
                            <fieldset className="settings-fieldset">
                                <h2>Your options</h2>
                                <SettingRow labelSettingRow="Your HN login" type="input" defaultValue={props.value} setValue={value => props.setValue(value)} />
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
    const handleInput = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        if (value === 'Experimental') {
            props.callback(true);
        } else if (value === 'Default') {
            props.callback(false);
        }
        props.setValue(value);
    }

    let element;
    if (props.type === "pulldown") {
        element = <PullDown listOption={props.listOption} callback={handleInput} default={props.defaultValue} />
    } else if (props.type === "checkbox") {
        element = <CheckBox type={props.type} callback={handleInput} default={props.defaultValue} />
    } else if (props.type === "input") {
        element = <Input type={props.type} default={props.defaultValue} callback={handleInput} />
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