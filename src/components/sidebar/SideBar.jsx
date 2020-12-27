import React from 'react';
import ListItem from './ListItem';
import Starred from './Starred';
import Theme from './Theme';
import '../.././assets/css/sidebar/SideBar.css';

const SideBar = props => {
    return (
        <aside className="sidebar">
            <ListItem />
            <Starred />
            <Theme
                backgroundTheme={props.isThemeLight ? "ThemeSwitch-light" : "ThemeSwitch-dark"}
                isThemeLight={props.isThemeLight}
                changeThemeLight={props.changeThemeLight}
                imageIconTheme={props.isThemeLight ? "//d3nb9u6x572n0.cloudfront.net/packs/media/components/ThemeSwitch/light-f7f5d17abc46bda6e819f67d2296052e.svg" : "//d3nb9u6x572n0.cloudfront.net/packs/media/components/ThemeSwitch/dark-8c32a1bd9064ea6ad828becaac3f603b.svg"} />
        </aside>
    );
}

export default SideBar;