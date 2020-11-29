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
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside = event => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.callback();
        }
    }

    render() {
        return (
            <div className="date-picker" ref={node => { this.wrapperRef = node; }}>
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


// const DatePicker = () => {
//     const [state, setState] = useState([
//         {
//             startDate: new Date(),
//             endDate: new Date(),
//             key: 'selection'
//         }
//     ]);
//     console.log(state);
//     return (
//         <div className="date-picker">
//             <DateRange
//                 editableDateInputs={true}
//                 onChange={item => setState([item.selection])}
//                 moveRangeOnFirstSelection={false}
//                 ranges={state}
//             />
//         </div>
//     );
// }

// export default DatePicker;