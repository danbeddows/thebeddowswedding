import { StyledParagraph } from "./Paragraph.styles";

interface ParagraphProps {
  children: React.ReactNode;
}

const Paragraph = ({ children }: ParagraphProps) => {
  return <StyledParagraph>{children}</StyledParagraph>;
};

export default Paragraph;
