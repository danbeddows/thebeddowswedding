import styled from "styled-components";

export const Section = styled.div`
  width: 90%;
  margin: 40px auto;

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    max-width: 1200px;
    padding: 0 30px;
    margin: 60px auto;
  }
`;
