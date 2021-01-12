import React from 'react';
import '../.././assets/css/result/SearchResult.css';
import Story from './Story';
import HackerNewsAPI from '../.././service/HackerNewsAPI';

export default class SearchResult extends React.Component {
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

    render() {
        return (
            <section className="search-result">
                <div className="container">
                    {
                        this.state.stories.map((story) => <Story {...this.props} story={story} key={story.id} />)
                    }
                </div>
            </section>
        );
    }
}