import React from 'react';
import '../.././assets/css/result/SearchResult.css';
import Story from './Story';

export default class SearchResult extends React.Component {
    render() {
        console.log(this.props.stories);
        return (
            <section className="search-result">
                <div className="container">
                    {
                        this.props.stories.map((story) => <Story {...this.props} story={story} key={story.id} />)
                    }
                </div>
            </section>
        );
    }
}