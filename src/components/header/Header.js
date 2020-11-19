import React from 'react';
import Logo from '../logo/Logo';
import LogoName from '../logo/LogoName';
import './Header.css';

const header = () => {
    return (
        <header className="header">
            <div className="header-search">
                <a className="header-logo" href="/">
                    <Logo />
                    <LogoName />
                </a>
            </div>
        </header>
    );
}

export default header;