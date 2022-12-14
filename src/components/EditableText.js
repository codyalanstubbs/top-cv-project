import { Component } from 'react';
import Responsibilities from './Responsibilities';

class EditableText extends Component {
    constructor(props) {
        super(props);

        this.onClickEdit = this.onClickEdit.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.onEditFocusOut = this.onEditFocusOut.bind(this);

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

    render() {
        const {element, textClass} = this.props; 
        const {editMode, text} = this.state; 

        if (editMode) {
            // If the text is the default text...
            if (text === `Add ${textClass}`) {
                // ... then use placeholder, not value
                return (
                    <textarea
                    placeholder={text} 
                    autoFocus className={textClass} 
                    onChange={this.onTextChange}
                    onBlur={this.onEditFocusOut}
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
                    >
                    </textarea>
                );  
            }                                  
        } else {
            if (element === "p") {
                return <p className={textClass} onClick={this.onClickEdit}>{text}</p>;
            } else if (element === "h4") {
                return <h4 className={textClass} onClick={this.onClickEdit}>{text}</h4>;
            } else if (element === "h1") {
                return <h1 className={textClass} onClick={this.onClickEdit}>{text}</h1>;
            } else if (element === "em") {
                return <em className={textClass} onClick={this.onClickEdit}>{text}</em>;
            }
        }

    }
}

export default EditableText;