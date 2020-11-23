import React from 'react';
import FilterPupularity from './FilterPopularity';
import FilterStory from './FilterStory';
import FilterTime from './FilterTime';
import FilterEngineProcess from './FilterEngineProcess';

import '../.././assets/css/filter/Filter.css';

const filter = () => {
    return (
        <div className="filter">
            <div className="filter-condition">
                <FilterStory />
                <FilterPupularity />
                <FilterTime />
            </div>
            <div className="engine-process">
                <FilterEngineProcess />
            </div>
        </div>
    );
}

export default filter;