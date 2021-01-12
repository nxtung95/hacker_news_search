import React from 'react';
import StoryLink from './StoryLink';
import '../.././assets/css/result/StoryTitle.css';

const StoryTitle = (props) => {
    const storyTitle = props.story.title;
    const storyUrl = props.story.url;
    return (
        <div className="story-title">
            <a href={storyUrl}>{storyTitle}</a>
            {
                props.isDefaultStyle && (
                    <StoryLink isShortLink={false}/>
                )
            }
        </div>
    );
}

export default StoryTitle;