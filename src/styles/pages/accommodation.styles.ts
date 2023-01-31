import Subheading from "src/components/Subheading";
import styled from "styled-components";

export const AccommodationPage = styled.div`
  margin: 100px 0px;

  > h2,
  > p {
    margin-left: 12px;
  }

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    > h2,
    > p {
      margin-left: 0;
    }
  }

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
