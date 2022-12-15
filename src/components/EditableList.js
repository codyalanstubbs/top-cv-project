import { Component } from "react";
import uniqid from 'uniqid';

class EditableList extends Component {
    constructor(props) {
        super(props);       
        
        this.onClickEdit = this.onClickEdit.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.onEditFocusOut = this.onEditFocusOut.bind(this);
        this.addAnotherResponsibility = this.addAnotherResponsibility.bind(this);
        this.removeResponsibility = this.removeResponsibility.bind(this);

        this.state = {
            responsibilities: [{
                editMode    : false,
                id          : uniqid(),
                text        : `Enter responsibility here`,
            }],
        };
    }

    onClickEdit(event) {
        let items       = [...this.state.responsibilities];
        let item        = items.find(x => x.id === event.target.id);
        item.editMode   = true;
        this.setState({ responsibilities: items} );
    }

    onTextChange(event) {
        let items       = [...this.state.responsibilities];
        let item        = items.find(x => x.id === event.target.id);
        item.text       = event.target.value;
        this.setState({ responsibilities: items} );
    }

    onEditFocusOut(event) {
        let items       = [...this.state.responsibilities];
        let item        = items.find(x => x.id === event.target.id);
        item.editMode   = false;
        this.setState({ responsibilities: items} );
    }

    addAnotherResponsibility() {
        this.setState({
            responsibilities    : this.state.responsibilities.concat(
                {
                    editMode    : true,
                    id          : uniqid(),
                    text        : `Enter responsibility here`,
                }
            ),
        });
    }

    removeResponsibility(event) {
        this.setState({
            responsibilities: this.state.responsibilities.filter((responsibility) => {
                return responsibility.id !== event.target.id;
            }),
        });
    }

    render() {
        const textClass = "responsibility"; 
        const { responsibilities } = this.state;

            return (
                <ul className="responsibilities">
                    
                    { // For each responsibility...
                        responsibilities.map((r, i) => {
                            // ...if a respsonsibility's editMode is true
                            if (r.editMode) {
                                // ... display a textarea input to user

                                // If the text is the default text...
                                if (r.text === `Enter responsibility here`) {
                                    // ... then use placeholder, not value
                                    return (                        
                                        <div key={r.id} className={textClass} >
                                            <div id={r.id} className="remove-responsibility" onClick={this.removeResponsibility}>X</div>
                                            <li key={r.id} className={textClass}  >
                                                <div>
                                                    <textarea
                                                    placeholder={r.text} 
                                                    autoFocus id={r.id}
                                                    className={textClass} 
                                                    onChange={this.onTextChange}
                                                    onBlur={this.onEditFocusOut}
                                                    >
                                                    </textarea>
                                                </div>
                                            </li>
                                        </div>
                                    );  
                                } else {
                                    // If not default text... 
                                    // ...then use value, not placeholder
                                    return (
                                        
                                    <div key={r.id} className={textClass} >
                                        <div id={r.id} className="remove-responsibility" onClick={this.removeResponsibility}>X</div>
                                        <li key={r.id} className={textClass}  >
                                            <div>
                                                <textarea
                                                value={r.text} 
                                                autoFocus id={r.id}
                                                className={textClass} 
                                                onChange={this.onTextChange}
                                                onBlur={this.onEditFocusOut}
                                                >
                                                </textarea>
                                            </div>
                                        </li>
                                    </div>
                                    );  
                                }                          
                            } else {
                                // If editMode is false... 
                                // ... then return an editable list item
                                return (
                                    <div key={r.id} className={textClass} >
                                        <div id={r.id} className="remove-responsibility" onClick={this.removeResponsibility}>X</div>
                                        <li id={r.id} onClick={this.onClickEdit}>{r.text+" "}</li>
                                    </div>
                                );
                            }                                                        
                    })
                }

                <div className="add responsibility" onClick={this.addAnotherResponsibility}>+ Add Responsibility</div>

            </ul>
        );
    }
}

export default EditableList;