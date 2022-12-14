import { Component } from 'react';
import DateRange from './DateRange';
import EditableText from './EditableText';
import EditableList from './EditableList';

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
                <EditableList textClass="responsibility"/>
                <div className='remove-container'>
                    <div className="remove experience">- Remove Experience ↑</div>
                </div>
            </div>
        );
    }
}

export default Experience;