import React from 'react';
import SearchTool from '../tool/SearchTool';
import '../.././assets/css/search/SearchPower.css';

const searchPower = () => {
    return (
        <div className="search-power">
            <span>Search by</span>
            <SearchTool />
        </div>
    );
}

export default searchPower;