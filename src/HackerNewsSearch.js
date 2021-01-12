import React from 'react';
import Header from './components/header/Header';
import SearchResult from './components/result/SearchResult';
import Filter from './components/filter/Filter';
import Pagination from './components/pagination/Pagination';
import Footer from './components/footer/Footer';
import SideBar from './components/sidebar/SideBar';

export default class HackerNewSearch extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header visibleSearchBar={true} url="/settings" icon="fa fa-gear" textIcon="Settings" />
                <Filter isFilter={true} />
                {
                    this.props.visibleSidebar && (
                        <SideBar
                            isThemeLight={this.props.isThemeLight}
                            changeThemeLight={this.props.changeThemeLight}
                            login={this.props.login}
                            path={this.props.match.path}
                        />
                    )
                }
                <SearchResult
                    isDefaultStyle={this.props.isDefaultStyle}
                    isShowThumbnails={this.props.isShowThumbnails}
                />
                <Pagination />
                <Footer />
            </React.Fragment>
        );
    }
}