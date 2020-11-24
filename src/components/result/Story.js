import React from 'react';
import StoryTitle from './StoryTitle';
import StoryMeta from './StoryMeta';

const story = () => {
    return (
        <article className="story">
            <div className="story-container">
                <div className="story-data">
                    <StoryTitle />
                    <StoryMeta />
                </div>
            </div>
        </article>
    );
}

export default story;