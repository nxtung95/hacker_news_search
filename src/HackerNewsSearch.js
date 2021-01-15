import React from 'react';
import Header from './components/header/Header';
import SearchResult from './components/result/SearchResult';
import Filter from './components/filter/Filter';
import Pagination from './components/pagination/Pagination';
import Footer from './components/footer/Footer';
import SideBar from './components/sidebar/SideBar';
import HackerNewsAPI from './service/HackerNewsAPI';

export default class HackerNewSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stories: [],
        }
    }

    componentDidMount() {
        const stories = [];
        HackerNewsAPI.getAllIdNewStories().then(storyIds => {
            if (storyIds.status === 200) {
                storyIds.data.map(async (id) => {
                    const story = await HackerNewsAPI.getStoryById(id);
                    if (story.status === 200) {
                        stories.push(story.data);
                    }
                });
                this.setState({ stories });
            }
        }).catch(e => {
            console.log('Error call API ' + e);
        });
    }

    getStoriesData = path => {
        console.log('getStoriesData');
        console.log(path);
        const stories = [];
        HackerNewsAPI.getAllJobIds().then(result => {
            if (result.status === 200) {
                result.data.map(async (id) => {
                    const story = await HackerNewsAPI.getStoryById(id);
                    if (story.status === 200) {
                        stories.push(story.data);
                    }
                });
                this.setState({ stories });
            }
        }).catch(e => {
            console.log('Error call API ' + e);
        });
    }

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
                            callbackGetData={this.getStoriesData}
                        />
                    )
                }
                <SearchResult
                    isDefaultStyle={this.props.isDefaultStyle}
                    isShowThumbnails={this.props.isShowThumbnails}
                    stories={this.state.stories}
                />
                <Pagination />
                <Footer />
            </React.Fragment>
        );
    }
}