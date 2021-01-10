import React from 'react';
import '../.././assets/css/result/StoryLink.css';

const StoryLink = (props) => {
    const url = new URL("http://www.bbc.com/news/uk-43396008");
    return (
        <a href={url.href} className="story-link">
            {props.isShortLink ? `(${url.hostname})` : `(${url.href})`}
        </a>
    );
}

export default StoryLink;