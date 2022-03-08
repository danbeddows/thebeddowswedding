import { useState } from "react";
import { StyledInput, StyledLabel } from "./Input.styles";

interface InputProps {
  type: "text";
  label: string;
  placeholder?: string;
  onChange: (newValue: string) => void;
  style?: {};
}

const Input: React.FC<InputProps> = ({
  type,
  label,
  placeholder,
  onChange,
  style,
}) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    setValue(newValue);
    onChange(newValue);
  };

  return (
    <StyledLabel>
      <div>{label}</div>
      <StyledInput
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        style={style}
      />
    </StyledLabel>
  );
};

export default Input;
