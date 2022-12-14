import { Component } from 'react';
import DateRange from './DateRange';
import EditableText from './EditableText';
import AddAnotherBtn from './AddAnotherBtn';
import uniqid from 'uniqid';

class Education extends Component {
    constructor(props) {
        super(props);

        this.addAnother = this.addAnother.bind(this);

        this.state = {
            educations  : [{
                id      : uniqid(),
            }],
        };
    }

    addAnother() {
        this.setState({
            educations  : this.state.educations.concat({id  : uniqid()})
        });
    }

    render() {
        return (
            <div>
                { // Create the education elements based on the educations array in state
                    this.state.educations.map((edu) => {
                        return (
                            <div key={edu.id} id={edu.id} className="edu">
                                <div className="institution-info">
                                    <EditableText element="h4" textClass="institution"/>
                                    <p>,&nbsp;</p>
                                    <EditableText element="p" textClass="location"/>
                                </div>
                                <DateRange />
                                <EditableText element="em" textClass="degree"/>
                                <div className='remove-container'>
                                    <div className="remove education">- Remove Education ↑</div>
                                </div>
                            </div>
                        );
                    })
                }
                <div className="button-container" onClick={this.addAnother}>
                    <AddAnotherBtn sectionName="education"  />
                </div>
            </div>
        );
    }
}

export default Education;