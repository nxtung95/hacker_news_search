import React from 'react';
import StoryLink from './StoryLink';
import '../.././assets/css/result/StoryTitle.css';

const StoryTitle = (props) => {
    return (
        <div className="story-title">
            <a href="https://news.ycombinator.com/item?id=16582136">Stephen Hawking has died</a>
            {
                props.isDefaultStyle && (
                    <StoryLink />
                )
            }
        </div>
    );
}

export default StoryTitle;