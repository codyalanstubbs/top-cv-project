import './assets/css/CV.css';
import Section from './components/Section';

const CV = () => {
  return (
    <form className="cv">
      <Section sectionName="header" />
      <Section sectionName="summary" />
      <Section sectionName="education" />
      <Section sectionName="experience" />
    </form>
  );
};

export default CV;
