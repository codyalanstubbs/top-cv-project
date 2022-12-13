import { Component } from 'react';
import Education from './Education';
import Experience from './Experience';
import EditableText from './EditableText';

class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.sectionName === "summary") {
            return (
                <div className="content">
                    <EditableText element="p" textClass=""/>
                </div>
            );
        } else if (this.props.sectionName === "education") {
            return (
                <div className="content">
                    <Education />
                </div>
            );
        } else if (this.props.sectionName === "experience") {
            return (
                <div className="content">
                    <Experience />
                </div>
            );
        }
    }
}

export default Content;