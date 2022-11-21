import { Section } from "./Section.styles";

interface SectionProps {
  alignment?: string;
}

const StyledSection: React.FC<SectionProps> = ({ children, alignment }) => {
  return <Section>{children}</Section>;
};

export default StyledSection;
