import { rem } from "polished";
import styled from "styled-components";

const StyledButton = styled.button`
  margin: 3px 0 5px;
  font-size: ${rem(16)};
  letter-spacing: ${rem(-0.5)};
  font-weight: 400;
  padding: ${rem(14)} ${rem(14)} ${rem(11)};
  outline: none;
  border: 1px solid #000;
  border-radius: 5px;
  background: #4a4aed;

  :disabled {
    background: #ccc;
  }
`;

export default StyledButton;
