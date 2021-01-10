import React from 'react';
import Header from './components/header/Header';
import SearchResult from './components/result/SearchResult';
import Filter from './components/filter/Filter';
import Pagination from './components/pagination/Pagination';
import Footer from './components/footer/Footer';
import SideBar from './components/sidebar/SideBar';

const HackerNewSearch = props => {
    return (
        <React.Fragment>
            <Header visibleSearchBar={true} url="/settings" icon="fa fa-gear" textIcon="Settings" />
            <Filter isFilter={true} />
            {
                props.visibleSidebar && (
                    <SideBar 
                        isThemeLight={props.isThemeLight}
                        changeThemeLight={props.changeThemeLight}
                        login={props.login}
                        path={props.match.path}
                    />
                )
            }
            <SearchResult isDefaultStyle={props.isDefaultStyle} isShowThumbnails={props.isShowThumbnails}/>
            <Pagination />
            <Footer />
        </React.Fragment>
    );
}
export default HackerNewSearch;