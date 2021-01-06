import React from 'react';
import StoryTitle from './StoryTitle';
import StoryMeta from './StoryMeta';

const StoryData = (props) => {
    return (
        <div className="story-data">
            <StoryTitle {...props} />
            <StoryMeta {...props} />
        </div>
    );
}

export default StoryData;