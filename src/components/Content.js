import { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.sectionName === "summary") {
            return (
                <div className="content">

                </div>
            );
        } else if (this.props.sectionName === "education") {
            return (
                <div className="content">

                </div>

            );
        } else if (this.props.sectionName === "experience") {
            return (
                <div className="content">

                </div>
            );
        }
    }
}

export default Content;