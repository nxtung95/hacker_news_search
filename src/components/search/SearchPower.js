import React from 'react';
import SearchTool from '../tool/SearchTool';
import './SearchPower.css';

const searchPower = () => {
    return (
        <div className="search-power">
            <span>Search by</span>
            <SearchTool />
        </div>
    );
}

export default searchPower;