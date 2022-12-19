import { useState } from 'react';
import DateRange from './DateRange';
import EditableText from './EditableText';
import AddAnotherBtn from './AddAnotherBtn';
import uniqid from 'uniqid';
import '../assets/css/Education.css';

const Education = () => {
    const [educations, setEducations] = useState([]);

    const add = () => {
        setEducations(
            educations.concat({id  : uniqid()})
        );
    };

    const remove = (event) => {
        setEducations(
            educations.filter((edu) => {
                return edu.id !== event.target.id;
            })
        );
    };
    
    return (
        <div>
            { // Create the education elements based on the educations array in state
               educations.map((edu) => {
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
                                <div 
                                id={edu.id} 
                                className="remove education"
                                onClick={remove}
                                >
                                    - Remove Education ↑
                                </div>
                            </div>
                        </div>
                    );
                })
            }
            <div className="button-container" onClick={add}>
                <AddAnotherBtn sectionName="education"  />
            </div>
        </div>
    );
}

export default Education;