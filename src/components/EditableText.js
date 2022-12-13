import { Component } from 'react';

class EditableText extends Component {
    constructor(props) {
        super(props);

        this.onClickEdit = this.onClickEdit.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.onEditFocusOut = this.onEditFocusOut.bind(this);

        this.state = {
            editMode : false,
            text : 'Summarize your experiences and skills in preferably less than three lines',
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
            }
        }

    }
}

export default EditableText;