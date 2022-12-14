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
                    <EditableText element="h4" textClass="institution"/>
                    <EditableText element="p" textClass="location"/>
                </div>
                <DateRange />
                <EditableText element="em" textClass="degree"/>
                <div className='remove-container'>
                    <div className="remove experience">- Remove Education ↑</div>
                </div>
            </div>
        );
    }
}

export default Education;