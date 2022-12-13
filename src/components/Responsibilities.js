import { Component } from 'react';
import EditableText from './EditableText';
import AddAnotherBtn from './AddAnotherBtn';

class Responsibilities extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <ul className="responsibilities">
                <EditableText element="li" textClass="responsibility" />
                <AddAnotherBtn sectionName="responsibility" />
            </ul>
        );
    }
}

export default Responsibilities;