import { useState } from "react";
import { StyledLabel, StyledTextarea } from "./Textarea.styles";

interface TextareaProps {
  label: string;
  placeholder?: string;
  onChange: (newValue: string) => void;
  style?: {};
}

const Input: React.FC<TextareaProps> = ({
  label,
  placeholder,
  onChange,
  style,
}) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;

    setValue(newValue);
    onChange(newValue);
  };

  return (
    <>
      <StyledLabel>
        <div>{label}</div>
        <StyledTextarea
          placeholder={placeholder}
          onChange={handleChange}
          style={style}
        ></StyledTextarea>
      </StyledLabel>
    </>
  );
};

export default Input;
