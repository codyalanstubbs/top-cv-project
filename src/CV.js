import './assets/css/CV.css';
import Section from './components/Section';

const CV = () => {
  return (
    <form className="cv">
      {Section("header")}
      {Section("summary")}
      {Section("education")}
      {Section("experience")}
    </form>
  );
};

export default CV;
