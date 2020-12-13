import React from 'react';
import Header from './components/header/Header';
import SearchResult from './components/result/SearchResult';
import Filter from './components/filter/Filter';
import Pagination from './components/pagination/Pagination';
import Footer from './components/footer/Footer';

const HackerNewSearch = props => {
    return (
        <div className={props.defaultStyle}>
            <div className="container">
                <Header visibleSearchBar={true} url="/settings" icon="fa fa-gear" textIcon="Settings" />
                <Filter isFilter={true} />
                <SearchResult />
                <Pagination />
                <Footer />
            </div>
        </div>
    );
}
export default HackerNewSearch;