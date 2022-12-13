import { Component } from 'react';
import EditableText from './EditableText';

class DateRange extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="date-range">
                <EditableText element="p" textClass="date start"/>
                <p>to</p>
                <EditableText element="p" textClass="date end"/>
            </div>
        );
    }
}

export default DateRange; 