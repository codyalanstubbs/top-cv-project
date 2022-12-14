import { Component } from 'react';

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
        this.setState({ text : event.target.value} );
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
            if (element === "p") {
                return <p className={textClass} onClick={this.onClickEdit}>{placeholderText}</p>;
            } else if (element === "h4") {
                return <h4 className={textClass} onClick={this.onClickEdit}>{placeholderText}</h4>;
            } else if (element === "h1") {
                return <h1 className={textClass} onClick={this.onClickEdit}>{placeholderText}</h1>;
            } else if (element === "em") {
                return <em className={textClass} onClick={this.onClickEdit}>{placeholderText}</em>;
            }
        }

    }
}

export default EditableText;