import React from 'react';

const getSVGAuthor = () => {
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
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
        </svg>
    );
}
const author = (props) => {
    return (
        <span>
            <a href="https://news.ycombinator.com/item?id=16582136">
                {!props.isDefaultStyle ? getSVGAuthor() : null}
                Cogito
            </a>
        </span>
    );
}

export default author;