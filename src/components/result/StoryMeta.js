import React from 'react';
import StoryPoint from './StoryPoint';
import StoryAuthor from './StoryAuthor';
import StoryTime from './StoryTime';
import StoryComment from './StoryComment';
import StoryLink from './StoryLink';
import '../.././assets/css/result/StoryMeta.css';

const meta = (props) => {
    return (
        <div className="story-meta">
            <StoryPoint isDefaultStyle={props.isDefaultStyle} />
            <span className="story-separator">|</span>
            <StoryAuthor isDefaultStyle={props.isDefaultStyle} />
            <span className="story-separator">|</span>
            <StoryTime isDefaultStyle={props.isDefaultStyle} />
            <span className="story-separator">|</span>
            {props.isDefaultStyle ? <StoryComment /> : <StoryLink />}
        </div>
    );
}

export default meta;