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
  const btnRef = createRef<HTMLButtonElement>();
  const [isDisabled, setIsDisabled] = useState(false);
  const [content, setContent] = useState(children);
  const [width, setWidth] = useState<"auto" | number | string>("auto");
  const [prevWidth, setPrevWidth] = useState<"auto" | number | string>("auto");

  const handleOnClick = () => {
    onClick();
  };

  // When loading state changes, reevaluate the button content
  // If showing the spinner, record the btn width so there's no layout shift
  useEffect(() => {
    if (isLoading) {
      // If btn is rendered, set the width before we change the content
      if (btnRef.current) {
        const styles = window.getComputedStyle(btnRef.current);

        if (styles.width !== null) {
          setPrevWidth(styles.width);
        } else {
          setPrevWidth("auto");
        }

        setWidth(btnRef.current.offsetWidth);
      }

      // Change the content to the loading spinner
      setContent(<FontAwesomeIcon icon={faSpinnerThird} spin fixedWidth />);

      setIsDisabled(true);
    } else {
      setWidth(prevWidth);
      setContent(children);
      setIsDisabled(false);
    }
  }, [isLoading]);

  return (
    <StyledButton
      ref={btnRef}
      type="button"
      disabled={isDisabled}
      onClick={handleOnClick}
      style={{ width }}
      className={className}
    >
      {content}
    </StyledButton>
  );
};

export default Button;
