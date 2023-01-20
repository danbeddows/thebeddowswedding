import styled from "styled-components";

export const AccommodationPage = styled.div`
  margin: 100px 0px;

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    margin: 140px 40px;
  }
`;

export const AccomList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
`;
