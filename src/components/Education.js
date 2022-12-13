import { Component } from 'react';
import DateRange from './DateRange';
import EditableText from './EditableText';

class Education extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="edu">
                <div className="institution-info">
                    <h4 className="institution">The State University</h4>
                    <EditableText element="p" textClass="location"/>
                </div>
                <DateRange />
                <em className="company">Bachelor of Science in Coolness</em>
                <div className="remove experience">- Remove Education ↑</div>
            </div>
        );
    }
}

export default Education;