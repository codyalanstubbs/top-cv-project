import Education from './Education';
import Experience from './Experience';
import EditableText from './EditableText';
import '../assets/css/Content.css';

const Content = (sectionName) => {
    if (sectionName === "summary") {
        return (
            <div className="content">
                <EditableText element="p" textClass="summary text"/>
            </div>
        );
    } else if (sectionName === "education") {
        return (
            <div className="content">
                <Education />
            </div>
        );
    } else if (sectionName === "experience") {
        return (
            <div className="content">
                {Experience()}
            </div>
        );
    }
};

export default Content;