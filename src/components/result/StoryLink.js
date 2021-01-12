import React from 'react';
import '../.././assets/css/result/StoryLink.css';
import _ from 'lodash';

const StoryLink = (props) => {
    const storyUrl = _.isUndefined(props.storyUrl) ? "" : new URL(props.storyUrl);
    return (
        <a href={storyUrl.href} className="story-link">
            {props.isShortLink ? `(${storyUrl.hostname})` : `(${storyUrl.href})`}
        </a>
    );
}

export default StoryLink;