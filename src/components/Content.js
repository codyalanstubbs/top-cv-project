import { Component } from 'react';
import Education from './Education';
import Experience from './Experience';

class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.sectionName === "summary") {
            return (
                <div className="content">
                    <p>Demonstrated experience quickly learning new processes, organizing and communicating projects, and leveraging analytical technologies to define and solve research problems.</p>
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