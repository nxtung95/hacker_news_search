import React from 'react';

const TotalComment = (props) => {
    return (
        <span>
            <a href="https://news.ycombinator.com/item?id=16582136">{props.totalComment} comments</a>
        </span>
    );
}

export default TotalComment;