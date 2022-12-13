import { Component } from 'react';
import DateRange from './DateRange';

class Experience extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="experience">
                <h4 className="role">Coolness Research Scientist</h4>
                <DateRange />
                <em className="company">Coolness Insights, The Coolness Company</em>
                <ul className="responsibilities">
                    <li className="responsibility">
                        Managed, trained, and maintained the internal Coolnes panel for cross-functional and global research
                    </li>
                    <li className="responsibility">
                        Prioritized Coolness panel’s projects weekly to balance research and Coolness screening workloads
                    </li>
                    <li className="responsibility">
                        Tailored analyses and communications of results based on clients’ needs and background
                    </li>
                    <li className="responsibility">
                        Built strong, collaborative relationships with cross-functional innovation peers quickly and effectively
                    </li>
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