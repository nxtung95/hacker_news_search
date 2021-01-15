import React from 'react';
import StoryData from './StoryData';
import StoryImage from './StoryImage';
import StoryShare from './StoryShare';
import '../.././assets/css/result/Story.css';

const story = (props) => {
    return (
        <article className="story">
            <div className="story-container">
                {
                    (!props.isDefaultStyle && props.isShowThumbnails) && (
                        <StoryImage imgURL={props.story.url} />
                    )
                }
                <StoryData isDefaultStyle={props.isDefaultStyle} story={props.story} />
                {
                    !props.isDefaultStyle && (
                        <StoryShare totalComment={props.story.descendants} />
                    )
                }
            </div>
        </article>
    );
}

export default story;