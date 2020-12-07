import React from 'react';
import '../.././assets/css/filter/Filter.css';
import DatePicker from '../date/DatePicker';

export default class FilterBy extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
            search: this.props.defaultValue,
            datepicker: false,
            selected: false,
        };

        this.filter = React.createRef();
    }

    componentDidUpdate() {
        if (this.state.expanded) {
            document.addEventListener('click',this.handleClickOutsideOfComponent);
        } else {
            document.removeEventListener('click',this.handleClickOutsideOfComponent);
        }
    }

    handleChangeSelected = e => {
        if (this.element.current && this.element.current.contains(e.target)) {
            return;
        }
        this.setState({ selected: false });
    }

    changeSelected = () => {
        this.setState(prevState => ({
            selected: !prevState.selected,
        }));
    }

    handleClickOutsideOfComponent = e => {
        if (this.filter.current && this.filter.current.contains(e.target)) {
            return;
        }
        this.setState({ expanded: false });
    };

    expandedPullDown = () => {
        this.setState(prevState => ({
            expanded: !prevState.expanded
        }));
    }

    changeValue = (valSearch) => {
        this.setState({
            search: valSearch,
            datepicker: valSearch === 'Custom range' ? true : false,
        });
    }

    closeDatePicker = () => {
        this.setState({
            datepicker: false,
        });
    }

    render() {
        return (
            <div className='filter-by'>
                <span>{this.props.label}</span>
                <div className="dropdown"
                    role="combobox"
                    aria-expanded={this.state.expanded}
                    aria-controls="group"
                    onClick={this.expandedPullDown}
                    ref={this.filter}
                >
                    <label className="dropdown-label">
                        {this.state.search}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            {
                                this.state.expanded ? <polyline points="18 15 12 9 6 15"></polyline> : <polyline points="6 9 12 15 18 9"></polyline>
                            }
                        </svg>
                    </label>
                    <ul className={this.state.expanded ? "dropdown-list dropdown-list-open dropdown-animation" : "dropdown-list"}
                        role="listbox"
                        id="downshift-0-label">
                        {
                            this.state.expanded &&
                            (
                                <React.Fragment>
                                    {
                                        this.props.filter.map((val, i) => {
                                            return (
                                                <li role="option" 
                                                aria-selected={this.state.selected} 
                                                key={i} 
                                                onClick={() => this.changeValue(val)}
                                                onMouseEnter={this.changeSelected}>
                                                    <button>{val}</button>
                                                </li>
                                            );
                                        })
                                    }
                                </React.Fragment>
                            )
                        }
                    </ul>
                </div>
                {this.state.datepicker && <DatePicker callback={this.closeDatePicker} />}
            </div>
        );
    }
}