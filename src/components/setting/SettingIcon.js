import React from 'react';
import '../.././assets/css/setting/SettingIcon.css';

const setting = (props) => {
    return (
        <React.Fragment>
            <i className={props.icon} />
            <span>{props.textIcon}</span>
        </React.Fragment>
    );
}

export default setting;