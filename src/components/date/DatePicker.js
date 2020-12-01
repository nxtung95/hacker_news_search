import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import '../.././assets/css/date/DatePicker.css';

export default class DatePicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            init: [
                {
                    startDate: new Date(),
                    endDate: new Date(),
                    key: 'selection'
                }
            ],
        }
        this.wrapperRef = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside = event => {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            this.props.callback();
        }
    }

    render() {
        return (
            <div className="date-picker" ref={this.wrapperRef}>
                <DateRange
                    editableDateInputs={true}
                    onChange={item => this.setState({ init: [item.selection] })}
                    moveRangeOnFirstSelection={false}
                    ranges={this.state.init}
                />
            </div>
        );
    }
}