import { rem } from "polished";
import styled from "styled-components";

const StyledLabel = styled.label`
  > div {
    font-size: 20px;
    font-weight: 500;
    letter-spacing: ${rem(-1)};
  }
`;

const StyledInput = styled.input`
  margin: 3px 0 5px;
  font-size: ${rem(16)};
  letter-spacing: ${rem(-0.5)};
  font-weight: 400;
  padding: ${rem(14)} ${rem(14)} ${rem(11)};
  outline: none;
  border: 1px solid #000;
  border-radius: 5px;

  &::placeholder {
    color: #9c9c9c;
    font-weight: 400;
    letter-spacing: ${rem(-0.5)};
  }
`;

export { StyledLabel, StyledInput };
