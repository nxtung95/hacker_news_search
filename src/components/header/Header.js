import React from 'react';
import Logo from '../logo/Logo';
import LogoName from '../logo/LogoName';
import SearchIcon from '../search/SearchIcon';
import SearchInput from '../search/SearchInput';
import SearchPower from '../search/SearchPower';
import Setting from '../setting/Setting';
import '../.././assets/css/header/Header.css';
import Filter from '../filter/Filter';

const header = () => {
    return (
        <header className="header">
            <div className="header-search">
                <a className="header-logo" href="/">
                    <Logo />
                    <LogoName />
                </a>
                <div className="search-bar">
                    <SearchIcon />
                    <SearchInput />
                    <SearchPower />
                </div>
                 <Setting />
            </div>
            <Filter />
        </header>
    );
}

export default header;