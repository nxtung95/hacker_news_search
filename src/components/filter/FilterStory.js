import React from 'react';
import '../.././assets/css/filter/FilterStory.css';

const filterStory = () => {
    return (
        <div className='filter-story'>
            <span>Search</span>
            <select name="filter-story">
                <option>All</option>
                <option selected="selected">Story</option>
                <option>Comment</option>
            </select>
        </div>
    );
}

export default filterStory;