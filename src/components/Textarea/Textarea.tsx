import { useState } from "react";

interface TextareaProps {
  label: string;
  onChange: (newValue: string) => void;
}

const Input: React.FC<TextareaProps> = ({ label }) => {
  const [value, setValue] = useState("");

  return (
    <>
      <label>
        <div>{label}</div>
        <textarea></textarea>
      </label>
    </>
  );
};

export default Input;
