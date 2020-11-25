import React from 'react';
import '../.././assets/css/filter/FilterStory.css';

const filterStory = () => {
    return (
        <div className='filter-story'>
            <span>Search</span>
            <div className="dropdown" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-labelledby="downshift-0-label">
                <label className="dropdown-label" tabIndex="0" for="downshift-0-label" id="downshift-0-label">
                    Stories
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </label>
                <ul className="dropdown-list dropdown-list-open dropdown-animation" role="listbox" aria-labelledby="downshift-0-label" id="downshift-0-label">
                    <li id="downshift-0-item-0" role="option" aria-selected="false" tabIndex="1">
                        <button>All</button>
                    </li>
                    <li id="downshift-0-item-1" role="option" aria-selected="false" tabIndex="1">
                        <button>Stories</button>
                    </li>
                    <li id="downshift-0-item-2" role="option" aria-selected="false" tabIndex="1">
                        <button>Stories</button>
                    </li>
                </ul>
            </div>
            {/* <select name="filter-story">
                <option>All</option>
                <option defaultValue>Story</option>
                <option>Comment</option>
            </select> */}
        </div>
    );
}

export default filterStory;