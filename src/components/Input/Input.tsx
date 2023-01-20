import { useEffect, useState } from "react";
import {
  InputContainer,
  RadioOption,
  RadioOptionLabel,
  StyledError,
  StyledHeader,
  StyledInput,
  StyledLabel,
} from "./Input.styles";

interface InputProps {
  type?: "text" | "radio";
  label: string;
  placeholder?: string;
  onChange: (newValue: string) => void;
  style?: {};
  name?: string;
  options?: { label: string; value: any }[];
  value?: string;
  className?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  label,
  placeholder,
  onChange,
  options = [],
  style,
  name = "",
  value = "",
  className = "",
  error = "",
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
      {type !== "radio" && (
        <StyledLabel>
          <StyledHeader>{label}</StyledHeader>
          <StyledInput
            type={type}
            value={internalValue}
            onChange={handleChange}
            placeholder={placeholder}
            style={style}
            className={className}
          />
        </StyledLabel>
      )}
      {type === "radio" && (
        <>
          <StyledHeader>{label}</StyledHeader>
          {options.map((option, index) => (
            <StyledLabel>
              <RadioOption>
                <StyledInput
                  type={type}
                  value={option.value}
                  onChange={handleChange}
                  placeholder={placeholder}
                  style={style}
                  className={className}
                  key={index}
                  name={name}
                  checked={value == option.value}
                />{" "}
                <RadioOptionLabel>{option.label}</RadioOptionLabel>
              </RadioOption>
            </StyledLabel>
          ))}
        </>
      )}

      <StyledError>{error}</StyledError>
    </InputContainer>
  );
};

export default Input;
