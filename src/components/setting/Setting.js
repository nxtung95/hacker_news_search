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
import LocalStorage from '../.././service/LocalStorage';
import _ from 'lodash';
import '../.././assets/css/setting/Setting.css';

export default class Setting extends React.Component {
    constructor(props) {
        super(props);
        const setting = LocalStorage.getObjectSetting();
        this.state = { ...setting };
    }

    handleStyle = (style) => {
        this.setState({ visibleThumbnails: style });
    }

    setValueForm = (name, value) => {
        this.setState({
            [name]: value,
        });
    }

    applySetting = () => {
        const prevStyle = LocalStorage.getItemSetting('style');
        const isFirstApply = _.isNull(prevStyle);
        if (!_.isEqual(prevStyle, this.state.style) || isFirstApply) {
            this.props.changeDefaultLight();
            this.props.changeVisibleSidebar();
        }
        LocalStorage.saveValueSetting(this.state);
    }
    render() {
        return (
            <React.Fragment>
                <Header visibleSearchBar={false} url="/" icon="fa fa-arrow-left" textIcon="Back" />
                <Filter isFilter={false} titleFilter="Settings" />
                {
                    this.props.visibleSidebar && (
                        <SideBar
                            isThemeLight={this.props.isThemeLight}
                            changeThemeLight={this.props.changeThemeLight}
                        />
                    )
                }
                <section className="settings">
                    <form>
                        <fieldset className="settings-fieldset">
                            <h2>Display options</h2>
                            {
                                this.state.visibleThumbnails && (
                                    <SettingRow
                                        labelSettingRow="Show thumbnails"
                                        type="checkbox"
                                        value={this.state.showThumbnails}
                                        name="showThumbnails"
                                        setValueForm={this.setValueForm}
                                    />
                                )
                            }
                            <SettingRow
                                labelSettingRow="Style"
                                listOption={OPTION_STYLE}
                                value={this.state.style}
                                type="pulldown"
                                callback={this.handleStyle}
                                name="style"
                                setValueForm={this.setValueForm}
                            />
                            <SettingRow
                                labelSettingRow="Hits per page"
                                listOption={OPTION_HIT_PER_PAGE}
                                value={this.state.hitsPerPage}
                                type="pulldown"
                                name="hitsPerPage"
                                setValueForm={this.setValueForm}
                            />
                        </fieldset>
                        <fieldset className="settings-fieldset">
                            <h2>Ranking options</h2>
                            <SettingRow
                                labelSettingRow="Default type"
                                listOption={OPTION_TYPE}
                                value={this.state.defaultType}
                                type="pulldown"
                                name="defaultType"
                                setValueForm={this.setValueForm}
                            />
                            <SettingRow
                                labelSettingRow="Default type"
                                listOption={OPTION_POPULAR_TYPE}
                                value={this.state.defaultSort}
                                type="pulldown"
                                name="defaultSort"
                                setValueForm={this.setValueForm}
                            />
                            <SettingRow
                                labelSettingRow="Default date range"
                                listOption={OPTION_DATE_RANGE}
                                value={this.state.defaultDateRange}
                                type="pulldown"
                                name="defaultDateRange"
                                setValueForm={this.setValueForm}
                            />
                            <SettingRow
                                labelSettingRow="Use the story text for search"
                                type="checkbox"
                                value={this.state.storyText}
                                name="storyText"
                                setValueForm={this.setValueForm}
                            />
                            <SettingRow
                                labelSettingRow="Use the author's username for search"
                                type="checkbox"
                                value={this.state.authorText}
                                name="authorText"
                                setValueForm={this.setValueForm}
                            />
                            <SettingRow
                                labelSettingRow="Typo-tolerance"
                                type="checkbox"
                                value={this.state.typoTolerance}
                                name="typoTolerance"
                                setValueForm={this.setValueForm}
                            />
                        </fieldset>
                        {
                            this.state.visibleThumbnails && (
                                <fieldset className="settings-fieldset">
                                    <h2>Your options</h2>
                                    <SettingRow
                                        labelSettingRow="Your HN login"
                                        type="input"
                                        value={this.state.login}
                                        name="login"
                                        setValueForm={this.setValueForm}
                                    />
                                </fieldset>
                            )
                        }
                        <div className="setting-apply">
                            <button onClick={this.applySetting} type="button">Apply</button>
                        </div>
                    </form>
                </section>
                <Footer />
            </React.Fragment>
        );
    }
}

const SettingRow = (props) => {
    const [value, setValueSetting] = useState(props.value);
    const handleInput = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        if (_.isEqual(value, "Default")) {
            props.callback(false);
        } else if (_.isEqual(value, "Experimental")) {
            props.callback(true);
        }
        setValueSetting(value);
        props.setValueForm(name, value);
    }

    let element;
    if (props.type === "pulldown") {
        element = <PullDown listOption={props.listOption} callback={handleInput} default={value} name={props.name} />
    } else if (props.type === "checkbox") {
        element = <CheckBox type={props.type} callback={handleInput} default={value} name={props.name} />
    } else if (props.type === "input") {
        element = <Input type={props.type} default={value} callback={handleInput} name={props.name} />
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
        <select value={props.default} name={props.name} onChange={(event) => { props.callback(event) }}>
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
        <input type={props.type} checked={props.default} name={props.name} onChange={(event) => { props.callback(event) }} />
    );
}

const Input = (props) => {
    return (
        <input id="login" type={props.type} value={props.default} name={props.name} onChange={(event) => { props.callback(event) }} />
    );
}