import React from 'react';
import Header from './components/header/Header';
import SearchResult from './components/result/SearchResult';
import Filter from './components/filter/Filter';
import Pagination from './components/pagination/Pagination';
import Footer from './components/footer/Footer';

export default class HackerNewsSearch extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header visibleSearchBar={true} url="/settings" icon="fa fa-gear" textIcon="Settings"/>
                <Filter />
                <SearchResult />
                <Pagination />
                <Footer />
            </React.Fragment>
        );
    }
} 