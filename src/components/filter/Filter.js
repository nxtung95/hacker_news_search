import React from 'react';
import FilterBy from './FilterBy';
import FilterEngineProcess from './FilterEngineProcess';

import '../.././assets/css/filter/Filter.css';

const filter = () => {
    const filterStory = ['All', 'Stories', 'Comment'];
    const filterPopularity = ['Popularity', 'Date'];
    const filterDate = ['All time', 'Last 24h', 'Past Week', 'Past Month', 'Past Year', 'Custom range'];
    return (
        <div className="filter">
            <div className="filter-condition">
                <FilterBy label="Search" filter={filterStory} defaultValue="Stories"/>
                <FilterBy label="by" filter={filterPopularity} defaultValue="Popularity"/>
                <FilterBy label="for" filter={filterDate} defaultValue="All time"/>
            </div>
            <div className="engine-process">
                <FilterEngineProcess />
            </div>
        </div>
    );
}

export default filter;