import { useState } from "react";
import {
  StyledError,
  StyledLabel,
  StyledTextarea,
  TextareaContainer,
} from "./Textarea.styles";

interface TextareaProps {
  label: string;
  placeholder?: string;
  onChange: (newValue: string) => void;
  style?: {};
  error?: string;
}

const Input: React.FC<TextareaProps> = ({
  label,
  placeholder,
  onChange,
  style,
  error = "",
}) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;

    setValue(newValue);
    onChange(newValue);
  };

  return (
    <TextareaContainer>
      <StyledLabel>
        <div>{label}</div>
        <StyledTextarea
          placeholder={placeholder}
          onChange={handleChange}
          style={style}
        ></StyledTextarea>
      </StyledLabel>
      <StyledError>{error}</StyledError>
    </TextareaContainer>
  );
};

export default Input;
