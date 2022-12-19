import Content from './Content';
import EditableText from './EditableText';
import '../assets/css/Section.css';

const Section = (sectionName) => {
    if (sectionName === "header") {
        return (
            <div className={sectionName}>
                <EditableText element="h1" textClass="name"/>
                <EditableText element="p" textClass="address"/>
                <div className="contact-info">
                    <EditableText element="p" textClass="phone"/>
                    <p>∙</p>
                    <EditableText element="p" textClass="email"/>
                    <p>∙</p>
                    <EditableText element="p" textClass="website"/>
                </div>
            </div>
        );
    } else {
        if (sectionName === "education" || sectionName === "experience") {
            return (
                <div className={sectionName}>
                    <h3 className="title">{sectionName.toUpperCase()}:</h3>
                    {Content(sectionName)}
                </div>
            );
        } else {
            return (
                <div className={sectionName}>
                    <h3 className="title">{sectionName.toUpperCase()}:</h3>
                    {Content(sectionName)}
                </div>
            );
        }
    }
}

export default Section;