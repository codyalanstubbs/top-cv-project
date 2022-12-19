import './assets/css/CV.css';
import Section from './components/Section';

const CV = () => {
  return (
    <form className="cv">
      <Section sectionName="header"></Section>
      <Section sectionName="summary"></Section>
      <Section sectionName="education"></Section>
      <Section sectionName="experience"></Section>
    </form>
  );
};

export default CV;
