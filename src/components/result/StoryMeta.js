import React from 'react';
import StoryPoint from './StoryPoint';
import StoryAuthor from './StoryAuthor';
import StoryTime from './StoryTime';
import TotalComment from './TotalComment';
import StoryComment from './StoryComment';
import StoryLink from './StoryLink';
import '../.././assets/css/result/StoryMeta.css';

const meta = (props) => {
    const point = props.story.score;
    const author = props.story.by;
    const postedTime = props.story.time;
    const totalComment = props.story.descendants;
    return (
        <div className="story-meta">
            <StoryPoint isDefaultStyle={props.isDefaultStyle} point={point} />
            <span className="story-separator">|</span>
            <StoryAuthor isDefaultStyle={props.isDefaultStyle} author={author} />
            <span className="story-separator">|</span>
            <StoryTime isDefaultStyle={props.isDefaultStyle} postedTime={postedTime} />
            <span className="story-separator">|</span>
            {props.isDefaultStyle ? <TotalComment totalComment={totalComment} /> : <StoryLink isShortLink={true} storyUrl={props.story.url} />}
            <StoryComment />
        </div>
    );
}

export default meta;