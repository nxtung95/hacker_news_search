import React from 'react';
import { Date } from 'core-js';

const getSVGTime = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
    );
}

const time = (props) => {
    // const time = new Date(props.postedTime * 1000);
    const now = Date.now();
    return (
        <span>
            <a href="https://news.ycombinator.com/item?id=16582136">
                {!props.isDefaultStyle ? getSVGTime() : null}
                {now}
            </a>
        </span>
    );
}

export default time;