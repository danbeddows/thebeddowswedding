import { rem } from "polished";
import styled from "styled-components";

export const MessageContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  > * {
    margin-bottom: ${rem(20)};
  }
`;
