import React from 'react';
import '../.././assets/css/result/StoryLink.css';
import _ from 'lodash';

const StoryLink = (props) => {
    const storyUrl = _.isUndefined(props.storyUrl) ? "" : new URL(props.storyUrl);
    let url;
    if (props.isShortLink) {
        url = _.isUndefined(storyUrl.hostname) ? "" : `(${storyUrl.hostname})`;
    } else {
        url = _.isUndefined(storyUrl.href) ? "" : `(${storyUrl.href})`;
    }
    return (
        <a href={url} className="story-link">
            {url}
        </a>
    );
}

export default StoryLink;