import { Component } from 'react';
import DateRange from './DateRange';
import EditableText from './EditableText';
import AddAnotherBtn from './AddAnotherBtn';
import EditableList from './EditableList';
import uniqid from 'uniqid';

class Experience extends Component {
    constructor(props) {
        super(props);

        this.addAnother = this.addAnother.bind(this); 
        this.remove = this.remove.bind(this); 
        
        this.state = {
            experiences : [{ id : uniqid() }]
        };
    }

    addAnother() {
        this.setState({
            experiences : this.state.experiences.concat({id  : uniqid()})
        });
    }

    remove(event) {
        this.setState({
            experiences: this.state.experiences.filter((exp) => {
                return exp.id !== event.target.id;
            }),
        });
    }

    render() {
        return (
            <div>
                { // Create the exprience elements based on the experiences array in state
                    this.state.experiences.map((exp) => {
                        return (
                            <div key={exp.id} id={exp.id} className="exp">
                                <EditableText element="h4" textClass="role" />
                                <DateRange />
                                <EditableText element="em" textClass="company" />
                                <EditableList textClass="responsibility"/>
                                <div className='remove-container'>
                                    <div 
                                    id={exp.id} 
                                    className="remove experience"
                                    onClick={this.remove}
                                    >
                                        - Remove Experience ↑
                                    </div>
                                </div>
                            </div>
                        );

                    })
                }
                <div className="button-container" onClick={this.addAnother}>
                    <AddAnotherBtn sectionName="experience"  />
                </div>
            </div>
        );
    }
}

export default Experience;