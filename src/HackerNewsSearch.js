import React from 'react';
import './HackerNewsSearch.css';
import Header from './components/header/Header';
import SearchResult from './components/result/SearchResult';
import Filter from './components/filter/Filter';

export default class HackerNewsSearch extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Filter />
                <SearchResult />
            </div>
        );
    }
} 