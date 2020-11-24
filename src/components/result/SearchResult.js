import React from 'react';
import '../.././assets/css/result/SearchResult.css';
import Story from './Story';

const result = () => {
    return (
        <section className="search-result">
            <div className="container">
                <Story />
            </div>
        </section>
    );
}

export default result;