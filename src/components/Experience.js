import { useState } from 'react';
import DateRange from './DateRange';
import EditableText from './EditableText';
import AddAnotherBtn from './AddAnotherBtn';
import EditableList from './EditableList';
import uniqid from 'uniqid';
import '../assets/css/Experience.css';

const Experience = () => {
    const [experiences, setExperiences] = useState([]);

    const add = () => {
        setExperiences(
            experiences.concat({id  : uniqid()})
        );
    };

    const remove = (event) => {
        setExperiences(
            experiences.filter((exp) => {
                return exp.id !== event.target.id;
            })
        );
    };

    return (
        <div>
            { // Create the experience elements based on the experiences array in state
                experiences.map((exp) => {
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
                                onClick={remove}
                                >
                                    - Remove Experience ↑
                                </div>
                            </div>
                        </div>
                    );

                })
            }
            <div className="button-container" onClick={add}>
                <AddAnotherBtn sectionName="experience"  />
            </div>
        </div>
    );
};

export default Experience;