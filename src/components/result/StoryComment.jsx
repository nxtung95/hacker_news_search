import React from 'react';
import '../.././assets/css/result/StoryComment.css';
import _ from 'lodash';
import DOMpurify from 'dompurify';

const StoryComment = (props) => {
    const text = _.isUndefined(props.text) ? '' : props.text;
    const sanitizer = DOMpurify.sanitize;
    return (
        <div className="story-comment">
            <span dangerouslySetInnerHTML={{__html: sanitizer(text)}}>
                
            </span>
        </div>
    );
}
export default StoryComment;
