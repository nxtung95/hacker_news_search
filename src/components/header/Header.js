import React from 'react';
import Logo from '../logo/Logo';
import LogoName from '../logo/LogoName';
import SearchIcon from '../search/SearchIcon';
import SearchInput from '../search/SearchInput';
import SearchPower from '../search/SearchPower';
import SettingIcon from '../setting/SettingIcon';
import { Link } from 'react-router-dom';
import '../.././assets/css/header/Header.css';

const header = (props) => {
    return (
        <header className="header">
            <div className="header-search">
                <Link to="/" className="header-logo">
                    <Logo />
                    <LogoName />
                </Link>
                {
                    props.visibleSearchBar && (
                        <div className="search-bar">
                            <SearchIcon />
                            <SearchInput />
                            <SearchPower />
                        </div>
                    )
                }
                <Link to={props.url} className="setting-icon">
                    <SettingIcon icon={props.icon} textIcon={props.textIcon} />
                </Link>
            </div>
        </header>
    );
}

export default header;