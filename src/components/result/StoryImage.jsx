import React from 'react';
import '../.././assets/css/result/StoryImage.css';

const StoryImage = () => {
    return (
        <div className="story-image">
            <image loading="lazy" alt="Image thumbnail for result" src="https://drcs9k8uelb9s.cloudfront.net/25612223.png" />
        </div>
    );
}

export default StoryImage;