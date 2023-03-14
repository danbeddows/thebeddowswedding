import { rem } from "polished";
import Subheading from "src/components/Subheading";
import styled, { css } from "styled-components";

export const FaqPage = styled.div`
  max-width: 100%;
  margin: 100px auto 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: ${(props) => props.theme.bp.tablet}) {
    :before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: -50px;
      left: 0px;
      z-index: -1;
      background: transparent url("/img/pages/rsvp/bg.png") no-repeat;
      background-position: top right;
      background-size: cover;
      transform: rotate(180deg);
    }
  }

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    margin: 140px 0px 0px;
    padding: 0 40px;
    background: transparent url("/img/pages/rsvp/bg.png") no-repeat;
    background-position: bottom right;
    background-size: contain;
  }
`;

export const QuestionWrapper = styled.div`
  margin-top: 44px;
`;

export const Question = styled.div`
  margin-bottom: 12px;
  font-size: 22px;
  font-weight: 500;
`;

export const Answer = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.42;
`;
