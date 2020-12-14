import React from 'react';
import Link from 'react-router-dom';

const Theme = () => {
    return (
        <ul>
            <li>
                <div class="ThemeSwitch ThemeSwitch-light">
                    <label for="ThemeSwitch"></label>
                    <input id="ThemeSwitch" type="checkbox" />
                    <div class="ThemeSwitch_icon">
                        <img src="//d3nb9u6x572n0.cloudfront.net/packs/media/components/ThemeSwitch/light-f7f5d17abc46bda6e819f67d2296052e.svg" alt="Switch to dark theme" />
                    </div>
                </div>
                Theme
            </li>
        </ul>
    );
}

export default Theme;