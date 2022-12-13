import { Component } from 'react';

class Education extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="edu">
                <div className="institution-info">
                    <h4 className="institution">The State University</h4>
                    <p className="location">, Boise, ID</p>
                </div>
                <div className="date-range">
                    <p className="date start">May 2018</p>
                    <p>to</p>
                    <p className="date end">Sep 2021</p>
                </div>
                <em className="company">Bachelor of Science in Coolness</em>
                <div className="remove experience">- Remove Education ↑</div>
            </div>
        );
    }
}

export default Education;