import styled from "styled-components";

export const Section = styled.div`
  max-width: 90%;
  margin: 40px auto;

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    max-width: 1260px;
    padding: 0 30px;
    margin: 60px auto;
  }
`;
