import React from 'react';
import '../.././assets/css/result/SearchResult.css';
import Story from './Story';

const result = (props) => {
    return (
        <section className="search-result">
            <div className="container">
                <Story isDefaultStyle={props.isDefaultStyle}/>
                <Story isDefaultStyle={props.isDefaultStyle}/>
                <Story isDefaultStyle={props.isDefaultStyle}/>
                <Story isDefaultStyle={props.isDefaultStyle}/>
                <Story isDefaultStyle={props.isDefaultStyle}/>
                <Story isDefaultStyle={props.isDefaultStyle}/>
                <Story isDefaultStyle={props.isDefaultStyle}/>
                <Story isDefaultStyle={props.isDefaultStyle}/>
                <Story isDefaultStyle={props.isDefaultStyle}/>
                <Story isDefaultStyle={props.isDefaultStyle}/>
            </div>
        </section>
    );
}

export default result;