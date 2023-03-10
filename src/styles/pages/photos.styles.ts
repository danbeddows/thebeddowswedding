import { rem } from "polished";
import Subheading from "src/components/Subheading";
import styled, { css } from "styled-components";

export const RsvpPage = styled.div`
  max-width: 100%;
  margin: 100px auto 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    margin: 140px 0px 0px;
    padding: 0 40px;
  }
`;
