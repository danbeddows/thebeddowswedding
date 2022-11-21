import { rem } from "polished";
import styled from "styled-components";

export const InputContainer = styled.div``;

export const StyledLabel = styled.label`
  width: 100%;
  display: block;
`;

export const StyledHeader = styled.div`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: ${rem(-1)};
`;

export const StyledInput = styled.input`
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

export const RadioOptionLabel = styled.span``;

export const RadioOption = styled.div`
  font-size: ${rem(16)};
  margin: ${rem(10)} 0;

  > ${StyledInput} {
  }

  > ${RadioOptionLabel} {
    font-size: ${rem(18)};
  }
`;

export const StyledError = styled.div`
  color: #ff0033;
  font-size: ${rem(13)};
  padding: ${rem(4)} 4px;
  font-weight: 500;
`;
