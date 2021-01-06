import React from 'react';
import '../.././assets/css/result/SearchResult.css';
import Story from './Story';

const result = (props) => {
    return (
        <section className="search-result">
            <div className="container">
                <Story {...props}/>
                <Story {...props}/>
                <Story {...props}/>
                <Story {...props}/>
                <Story {...props}/>
                <Story {...props}/>
                <Story {...props}/>
                <Story {...props}/>
                <Story {...props}/>
                <Story {...props}/>
            </div>
        </section>
    );
}

export default result;