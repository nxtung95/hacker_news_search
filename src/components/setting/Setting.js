import React from 'react';
import '../.././assets/css/setting/Setting.css';

const setting = () => {
    return (
        <a className="setting" href="/settings">
            <i class="fa fa-gear"></i>
            <span>Settings</span>
        </a>
    );
}

export default setting;