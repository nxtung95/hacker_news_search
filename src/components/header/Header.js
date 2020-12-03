import React from 'react';
import Logo from '../logo/Logo';
import LogoName from '../logo/LogoName';
import SearchIcon from '../search/SearchIcon';
import SearchInput from '../search/SearchInput';
import SearchPower from '../search/SearchPower';
import SettingIcon from '../setting/SettingIcon';
import '../.././assets/css/header/Header.css';

const header = (props) => {
    return (
        <header className="header">
            <div className="header-search">
                <a className="header-logo" href="/">
                    <Logo />
                    <LogoName />
                </a>
                {
                    props.visibleSearchBar && (
                        <div className="search-bar">
                            <SearchIcon />
                            <SearchInput />
                            <SearchPower />
                        </div>
                    )
                }
                <a className="setting-icon" href={props.url}>
                    <SettingIcon icon={props.icon} textIcon={props.textIcon} />
                </a>
            </div>
        </header>
    );
}

export default header;