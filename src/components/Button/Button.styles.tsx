import { cssVar, darken, grayscale, lighten, rem } from "polished";
import styled from "styled-components";

const buttonColour = String(cssVar("--orange", "#be9279"));
const buttonTextColour = String("#fff");

const StyledButton = styled.button`
  margin: 3px 0 5px;
  font-size: ${rem(16)};
  letter-spacing: ${rem(-0.5)};
  padding: ${rem(14)} ${rem(18)} ${rem(11)};
  outline: none;
  border: 1px solid ${darken(0.2, buttonColour)};
  border-radius: 5px;
  background: ${buttonColour};
  color: ${buttonTextColour};
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;

  :hover {
    border-color: ${darken(0.2, buttonColour)};
    background: ${darken(0.1, buttonColour)};
  }

  :disabled {
    border-color: ${lighten(0.05, grayscale(buttonColour))};
    background: ${lighten(0.1, grayscale(buttonColour))};
    color: #444;
    cursor: default;
  }
`;

export default StyledButton;
