import { Section } from "./Section.styles";

const StyledSection: React.FC = ({ children }) => {
  const hi = 123;
  return <Section>{children}</Section>;
};

export default StyledSection;
