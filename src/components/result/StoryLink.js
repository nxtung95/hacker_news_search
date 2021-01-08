import React from 'react';
import PSL from 'psl';
import '../.././assets/css/result/StoryLink.css';

const StoryLink = (props) => {
    const fullUrl = "http://www.bbc.com/news/uk-43396008";
    return (
        <a href={fullUrl} className="story-link">
            {props.isShortLink ? PSL.get(fullUrl) : fullUrl}
        </a>
    );
}

export default StoryLink;