import { Component } from 'react';

class AddAnotherBtn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const sectionName = this.props.sectionName;
        const capitalizedSection = sectionName.charAt(0).toUpperCase() + sectionName.slice(1);
        return (
            <div className={"add "+sectionName}>+ Add Another {capitalizedSection}</div>
        );
    }
}

export default AddAnotherBtn;