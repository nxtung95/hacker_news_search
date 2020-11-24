import React from 'react';
import './HackerNewsSearch.css';
import Header from './components/header/Header';
import SearchResult from './components/result/SearchResult';

export default class HackerNewsSearch extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                <SearchResult />
            </div>
        );
    }
} 