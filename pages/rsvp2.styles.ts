import { rem } from "polished";
import styled, { css } from "styled-components";

export const GuestHeader = styled.div`
  display: flex;
  flex-align: row;
  align-items: center;
  justify-content: space-between;
`;

interface GuestProps {
  isHeader?: boolean;
}
export const Guest = styled.div<GuestProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${(props) =>
    props.isHeader &&
    css`
      background: var(--dark-blue);
      color: #fff;
      font-size: ${rem(14)};
      text-transform: uppercase;
    `}

  > * {
    flex: 1;
    padding: 20px 10px;
  }
`;

export const GuestName = styled.input`
  padding: 10px 14px;
  border-radius: 3px;
  border: 1px solid #444;
  font-size: 16px;
`;

export const GuestDecision = styled.select`
  padding: 10px 14px;
  border-radius: 3px;
  border: 1px solid #444;
  font-size: 16px;
`;
