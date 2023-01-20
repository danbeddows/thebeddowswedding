import { Section } from "./Section.styles";

interface SectionProps {
  alignment?: string;
  className?: string;
}

const StyledSection: React.FC<SectionProps> = ({
  children,
  alignment,
  className,
}) => {
  return <Section className={className}>{children}</Section>;
};

export default StyledSection;
