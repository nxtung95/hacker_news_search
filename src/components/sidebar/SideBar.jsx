import React from 'react';
import ListItem from './ListItem';
import Starred from './Starred';
import Theme from './Theme';

const SideBar = () => {
    return (
        <aside className="sidebar">
            <ListItem />
            <Starred />
            <Theme />
        </aside>
    );
}

export default SideBar;