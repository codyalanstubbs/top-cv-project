import { Component } from 'react';
import EditableText from './EditableText';

class DateRange extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="date-range">
                <EditableText element="p" textClass="start date "/>
                <p>to</p>
                <EditableText element="p" textClass="end date"/>
            </div>
        );
    }
}

export default DateRange; 