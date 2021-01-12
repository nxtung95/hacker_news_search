import React from 'react';
import StorySocialShare from '../filter/FilterEngineProcess';
import '../.././assets/css/result/StoryShare.css';

const StoryShare = (props) => {
    return (
        <div className="story-share">
            <button className="total-comment">{props.totalComment}</button>
            <StorySocialShare isFilter={false} />
            <button className="story-starred">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 26 26"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
            </button>
        </div>
    );
}

export default StoryShare;