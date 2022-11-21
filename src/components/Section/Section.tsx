import { Section } from "./Section.styles";

const StyledSection: React.FC = ({ children, alignment }) => {
  return <Section>{children}</Section>;
};

export default StyledSection;
