import React from 'react';
import StoryData from './StoryData';
import StoryImage from './StoryImage';
import StoryShare from './StoryShare';
import '../.././assets/css/result/Story.css';
import LocalStorage from '../.././service/LocalStorage';

const story = (props) => {
    const isShowThumbnails = LocalStorage.getItemSetting("showThumbnails");
    return (
        <article className="story">
            <div className="story-container">
                {
                    !props.isDefaultStyle && isShowThumbnails && (
                        <StoryImage />
                    )
                }
                <StoryData />
                {
                    !props.isDefaultStyle && (
                        <StoryShare />
                    )
                }
            </div>
        </article>
    );
}

export default story;