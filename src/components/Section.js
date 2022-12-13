import { Component } from 'react';
import Content from './Content';

class Section extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.sectionName === "header") {
            return (
                <div className={this.props.sectionName}>
                    <h1 className="name">John Smith</h1>
                    <p className="address">890 Some Road, Boise, ID</p>
                    <div className="contact-info">
                        <p className="phone">(000) 000-0000</p>
                        <p>∙</p>
                        <p className="email">fake@gmail.com</p>
                        <p>∙</p>
                        <p className="website">www.linkedin.com/in/fake</p>
                    </div>
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

export default Section;