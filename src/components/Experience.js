import { Component } from 'react';
import DateRange from './DateRange';
import EditableText from './EditableText';

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
                <ul className="responsibilities">
                    <EditableText element="li" textClass="responsibility" />
                    <li className="add responsibility">
                        + Add Another Responsibility
                    </li>
                </ul>
                <div className="remove experience">- Remove Experience ↑</div>
            </div>
        );
    }
}

export default Experience;