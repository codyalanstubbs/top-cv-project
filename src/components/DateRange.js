import EditableText from './EditableText';
import '../assets/css/DateRange.css';

const DateRange = () => {
    return (
        <div className="date-range">
            <EditableText element="p" textClass="start date"/>
            <p>to</p>
            <EditableText element="p" textClass="end date"/>
        </div>
    );
}

export default DateRange; 