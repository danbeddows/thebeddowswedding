import { faSpinnerThird } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createRef, useEffect, useRef, useState } from "react";
import StyledButton from "./Button.styles";

interface ButtonProps {
  isLoading?: boolean;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  isLoading = false,
  className = "",
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [content, setContent] = useState(children);
  const [width, setWidth] = useState<"auto" | number | string>(-1);

  const getBtnWidth = () => {
    if (!btnRef || !btnRef.current) {
      return "auto";
    }

    const styles = window.getComputedStyle(btnRef.current);
    return styles.width !== null ? styles.width : "auto";
  };

  const [prevWidth, setPrevWidth] = useState<"auto" | number | string>(-1);

  const handleClick = () => {
    onClick();
  };

  useEffect(() => {
    setPrevWidth(getBtnWidth());
  }, [btnRef]);

  // When loading state changes, reevaluate the button content
  // If showing the spinner, record the btn width so there's no layout shift
  useEffect(() => {
    if (isLoading) {
      // If btn is rendered, set the width before we change the content
      if (btnRef.current) {
        setPrevWidth(getBtnWidth());
        setWidth(btnRef.current.offsetWidth);
      }

      // Change the content to the loading spinner
      setContent(<FontAwesomeIcon icon={faSpinnerThird} spin fixedWidth />);

      setIsDisabled(true);
    } else {
      if (prevWidth !== -1) {
        setWidth(prevWidth);
      }
      setContent(children);
      setIsDisabled(false);
    }
  }, [isLoading]);

  return (
    <StyledButton
      ref={btnRef}
      type="button"
      disabled={isDisabled}
      onClick={handleClick}
      style={{ width }}
      className={className}
    >
      {content}
    </StyledButton>
  );
};

export default Button;
