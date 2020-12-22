import React from 'react';
import '../.././assets/css/sidebar/Theme.css';

const Theme = (props) => {
    const backgroundTheme = `ThemeSwitch ${props.backgroundTheme}`;
    const change = () => {
        props.changeThemeLight();
    }
    return (
        <ul>
            <li className="theme">
                <div className={backgroundTheme}>
                    <label htmlFor="ThemeSwitch"></label>
                    <input id="ThemeSwitch" type="checkbox" checked={props.isThemeLight} onChange={change} />
                    <div className="ThemeSwitch_icon">
                        <img src={props.imageIconTheme} alt="Switch to theme" />
                    </div>
                </div>
                Theme
            </li>
        </ul>
    );
}

export default Theme;