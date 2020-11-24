import React from 'react';
import '../.././assets/css/filter/FilterTime.css';

const filterTime = () => {
    return (
        <div className='filter-time'>
            <span>for</span>
            <select name="filter-time">
                <option defaultValue>All Time</option>
                <option>Last 24h</option>
                <option>Past Week</option>
                <option>Past Month</option>
                <option>Past Year</option>
                <option>Custom Range</option>
            </select>
        </div>
    );
}

export default filterTime;