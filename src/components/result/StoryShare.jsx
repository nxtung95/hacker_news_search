import React from 'react';
import StorySocialShare from '../filter/FilterEngineProcess';
import '../.././assets/css/result/StoryShare.css';

export default class StoryShare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActiveStarred: false,
        };

    }
    activeStoryStarred = () => {
        this.setState(prevState => ({
            isActiveStarred: !prevState.isActiveStarred,
        }));
    }

    render() {
        return (
            <div className="story-share">
                <button className="total-comment" disabled={this.props.totalComment == 0} >{this.props.totalComment}</button>
                <StorySocialShare isFilter={false} />
                <button className={this.state.isActiveStarred ? "story-starred active" : "story-starred"} onClick={this.activeStoryStarred}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 26 26"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                </button>
            </div>
        );
    }
}