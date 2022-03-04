import { useEffect, useState } from "react";
import StyledButton from "./Button.styles";

interface ButtonProps {
  label: string;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, isLoading = false }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const evaluateIsDisabled = () => {
    if (isLoading === true) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  useEffect(() => {
    evaluateIsDisabled();
  }, [isLoading]);

  return (
    <StyledButton type="button" disabled={isDisabled}>
      {isLoading && <>loading</>}
      {!isLoading && label}
    </StyledButton>
  );
};

export default Button;
