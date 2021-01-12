import React from 'react';
import '../.././assets/css/result/StoryComment.css';
import _ from 'lodash';

const StoryComment = (props) => {
    return (
        <div className="story-comment">
            <span>
                {_.isUndefined(props.text) ? '' : props.text}
            </span>
        </div>
    );
}
export default StoryComment;
