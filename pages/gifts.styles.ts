import { rem } from "polished";
import styled from "styled-components";

export const GiftPage = styled.div`
  max-width: 1200px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    margin: 140px 40px;
  }

  > * {
    margin-bottom: ${rem(20)};
  }
`;
