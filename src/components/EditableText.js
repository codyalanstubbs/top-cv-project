import { Component } from 'react';
import '../assets/css/EditableText.css';

class EditableText extends Component {
    constructor(props) {
        super(props);

        this.onClickEdit = this.onClickEdit.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.onEditFocusOut = this.onEditFocusOut.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);

        this.state = {
            editMode : false,
            text : `Add ${this.props.textClass}`,
        };
    }

    onClickEdit() {
        this.setState({ editMode : true} );
    }

    onTextChange(event) {
        // if the input is empty...
        if (event.target.value === "") {
            // ...then set state text to default text
            this.setState({ text : "Add "+event.target.className} );  
        } else {
            // if the input is not empty...

            // ...then set state to user input
            this.setState({ text : event.target.value} );   
            
            // If the input is the name input...
            if (event.target.className === "name") {
                // ...then change the title text
                const title = document.querySelector("title");
                title.textContent = event.target.value + " Resume";
            }
        }
    }

    onEditFocusOut() {
        this.setState({ editMode : false} );
    }

    handleKeyDown(e) {
        if (e.key === "Enter") {this.onEditFocusOut()}
    }

    render() {
        const {element, textClass} = this.props; 
        const {editMode, text} = this.state; 
        
        // If the element is a date, then modify the default/placeholder text
        let placeholderText = text;
        if (textClass === "start date" || textClass === "end date") {
            placeholderText = textClass.charAt(0).toUpperCase() + textClass.slice(1);
        }

        if (editMode) {
            // If the text is the default text...
            if (text === `Add ${textClass}`) {
                // ... then use placeholder, not value
                return (
                    <textarea
                    placeholder={placeholderText}
                    autoFocus className={textClass} 
                    onChange={this.onTextChange}
                    onBlur={this.onEditFocusOut}
                    onKeyDown={this.handleKeyDown}
                    >
                    </textarea>
                );  
            } else {
                // If not default text... 
                // ...then use value, not placeholder
                return (
                    <textarea
                    value={text} 
                    autoFocus className={textClass} 
                    onChange={this.onTextChange}
                    onBlur={this.onEditFocusOut}
                    onKeyDown={this.handleKeyDown}
                    >
                    </textarea>
                );  
            }                                  
        } else {

            let editedClass = "unedited";
            // If the text is not the default text (it has been edited)...
            if (text !== `Add ${textClass}`) {
                // ...then change the editClass to change red text to black
                editedClass = 'edited';
            }

            if (element === "p") {
                if (text === `Add ${textClass}`) {
                    return <p className={textClass+" "+editedClass} onClick={this.onClickEdit}>{placeholderText}</p>;
                } else {
                    return <p className={textClass+" "+editedClass} onClick={this.onClickEdit}>{text}</p>;
                }
            } else if (element === "h4") {
                return <h4 className={textClass+" "+editedClass} onClick={this.onClickEdit}>{placeholderText}</h4>;
            } else if (element === "h1") {
                return <h1 className={textClass+" "+editedClass} onClick={this.onClickEdit}>{placeholderText}</h1>;
            } else if (element === "em") {
                return <em className={textClass+" "+editedClass} onClick={this.onClickEdit}>{placeholderText}</em>;
            }
        }

    }
}

export default EditableText;