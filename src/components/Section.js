import { Component } from 'react';
import Content from './Content';
import EditableText from './EditableText';
import '../assets/css/Section.css';

class Section extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.sectionName === "header") {
            return (
                <div className={this.props.sectionName}>
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
            if (this.props.sectionName === "education" || this.props.sectionName === "experience") {
                return (
                    <div className={this.props.sectionName}>
                        <h3 className="title">{this.props.sectionName.toUpperCase()}:</h3>
                        <Content sectionName={this.props.sectionName}/>
                    </div>
                );
            } else {
                return (
                    <div className={this.props.sectionName}>
                        <h3 className="title">{this.props.sectionName.toUpperCase()}:</h3>
                        <Content sectionName={this.props.sectionName}/>
                    </div>
                );
            }
        }
    }
}

export default Section;