import React from 'react';
import '../.././assets/css/filter/FilterPopularity.css';

const filterPopularity = () => {
    return (
        <div className='filter-popularity'>
            <span>by</span>
            <select name="filter-popularity">
                <option defaultValue>Popularity</option>
                <option>Date</option>
            </select>
        </div>
    );
}

export default filterPopularity;