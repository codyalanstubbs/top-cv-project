import { Component } from 'react';
import DateRange from './DateRange';
import EditableText from './EditableText';
import Responsibilities from './Responsibilities';

class Experience extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="exp">
                <EditableText element="h4" textClass="role" />
                <DateRange />
                <EditableText element="em" textClass="company" />
                <Responsibilities />
                <div className="remove experience">- Remove Experience ↑</div>
            </div>
        );
    }
}

export default Experience;