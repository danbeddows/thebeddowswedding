import { rem } from "polished";
import styled from "styled-components";

const InputContainer = styled.div``;

const StyledLabel = styled.label`
  width: 100%;
  display: block;

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

const StyledError = styled.div`
  color: #ff0033;
  font-size: ${rem(13)};
  padding: ${rem(4)} 4px;
  font-weight: 500;
`;

export { InputContainer, StyledLabel, StyledInput, StyledError };
