import React from 'react';
import '../.././assets/css/result/StoryTitle.css';

const StoryTitle = () => {
    return (
        <div className="story-title">
            <a href="https://news.ycombinator.com/item?id=16582136">Stephen Hawking has died</a>
            <a href="http://www.bbc.com/news/uk-43396008" className="story-link">(http://www.bbc.com/news/uk-43396008)</a>
        </div>
    );
}

export default StoryTitle;