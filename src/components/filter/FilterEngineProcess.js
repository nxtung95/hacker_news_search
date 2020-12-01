import React from 'react';
import '../.././assets/css/filter/FilterEngineProcess.css';

export default class FilterEngineProcess extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
            ariaSelected: false,
        }
        this.pulldown = React.createRef();
    }

    componentDidUpdate() {
        if (this.state.expanded) {
            document.addEventListener('click', this.handleClickOutside);
        } else {
            document.removeEventListener('click',this.handleClickOutside);
        }
    }

    handleClickOutside = event => {
        if (this.pulldown && !this.pulldown.current.contains(event.target)) {
            this.expandedPullDown();
        }
    }

    expandedPullDown = () => {
        this.setState(prevState => ({
            expanded: !prevState.expanded,
        }));
    }

    render() {
        return (
            <React.Fragment>
                <div className="result-time">
                    22.790.271 results (0.006 seconds)
                </div>
                <div className="social-share">
                    <div className="dropdown"
                        role="combobox"
                        aria-expanded={this.state.expanded}
                        onClick={this.expandedPullDown}
                        ref={this.pulldown}
                    >
                        <label className="dropdown-label">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <circle cx="18" cy="5" r="3"></circle>
                                <circle cx="6" cy="12" r="3"></circle>
                                <circle cx="18" cy="19" r="3"></circle>
                                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                            </svg>
                        </label>
                    </div>
                    <ul className={this.state.expanded ? "dropdown-list dropdown-list-open dropdown-animation" : "dropdown-list"}
                        role="listbox"
                        id="downshift-0-label">
                        {
                            this.state.expanded &&
                            (
                                <React.Fragment>
                                    <li role="option" aria-selected={this.state.ariaSelected}>
                                        <button>
                                            Share on Twitter
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                            </svg>
                                        </button>
                                    </li>
                                    <li role="option" aria-selected={this.state.ariaSelected}>
                                        <button>
                                            Share on facebook
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                            </svg>
                                        </button>
                                    </li>
                                    <li role="option" aria-selected={this.state.ariaSelected}>
                                        <button>
                                            Share via Email
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                <polyline points="22,6 12,13 2,6"></polyline>
                                            </svg>
                                        </button>
                                    </li>
                                </React.Fragment>
                            )
                        }
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}