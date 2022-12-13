import { Component } from 'react';

class DateRange extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="date-range">
                <p className="date start">May 2018</p>
                <p>to</p>
                <p className="date end">Sep 2021</p>
            </div>
        );
    }
}

export default DateRange; 