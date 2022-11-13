import { useEffect, useState } from "react";
import {
  InputContainer,
  StyledError,
  StyledInput,
  StyledLabel
} from "./Input.styles";

interface InputProps {
  type?: "text";
  label: string;
  placeholder?: string;
  onChange: (newValue: string) => void;
  style?: {};
  value?: string;
  className?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  label,
  placeholder,
  onChange,
  style,
  value = "",
  className = "",
  error = ""
}) => {
  const [internalValue, setInternalValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    setInternalValue(newValue);
    onChange(newValue);
  };

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  return (
    <InputContainer>
      <StyledLabel>
        <div>{label}</div>
        <StyledInput
          type={type}
          value={internalValue}
          onChange={handleChange}
          placeholder={placeholder}
          style={style}
          className={className}
        />
      </StyledLabel>
      <StyledError>{error}</StyledError>
    </InputContainer>
  );
};

export default Input;
