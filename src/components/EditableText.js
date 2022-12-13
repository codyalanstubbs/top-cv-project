import { Component } from 'react';

class EditableText extends Component {
    constructor(props) {
        super(props);

        this.onClickEdit = this.onClickEdit.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.onEditFocusOut = this.onEditFocusOut.bind(this);

        this.state = {
            editMode : false,
            text : `Add your ${this.props.textClass} here`,
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
            return (
                <textarea
                className={textClass} 
                value={text} 
                onChange={this.onTextChange}
                onBlur={this.onEditFocusOut}
                >
                </textarea>
            );
        } else {
            if (element === "p") {
                return <p className={textClass} onClick={this.onClickEdit}>{text}</p>;
            } else if (element === "h4") {
                return <h4 className={textClass} onClick={this.onClickEdit}>{text}</h4>;
            } else if (element === "h1") {
                return <h1 className={textClass} onClick={this.onClickEdit}>{text}</h1>;
            } else if (element === "em") {
                return <em className={textClass} onClick={this.onClickEdit}>{text}</em>;
            } else if (element === "li") {
                return <li className={textClass} onClick={this.onClickEdit}>{text}</li>;
            }
        }

    }
}

export default EditableText;