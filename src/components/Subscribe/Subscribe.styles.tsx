import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { rem } from "polished";
import styled from "styled-components";
import Button from "../Button";
import Input from "../Input";

const SubscribeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: ${rem(50)};
  padding-left: ${rem(20)};

  @media (min-width: ${props => props.theme.bp.desktop}) {
    width: auto;
  }
`;

const SubscribeText = styled.div``;

const SubscribeForm = styled.div`
  margin-top: ${rem(4)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: ${props => props.theme.bp.desktop}) {
    //padding-right: ${rem(40)};
    flex-direction: row;
    width: 100%;
  }
`;

const SubscribeInput = styled(Input)`
  width: 100%;

  @media (min-width: ${props => props.theme.bp.desktop}) {
    width: 320px;
  }
`;

const SubscribeSubmit = styled(Button)`
  width: 100%;

  @media (min-width: ${props => props.theme.bp.desktop}) {
    margin-left: ${rem(10)};
    width: auto;
  }
`;

const SubscribeStatus = styled.div`
  height: 20px;
  margin: 12px 4px 0;
`;

const SubscribeStatusSuccess = styled.div`
  color: var(--black);
  font-weight: 600;

  i,
  svg {
    color: var(--green);
  }
`;

const SubscribeStatusError = styled.div`
  color: #f00;
  max-width: 300px;
`;

export {
  SubscribeWrapper,
  SubscribeText,
  SubscribeForm,
  SubscribeInput,
  SubscribeSubmit,
  SubscribeStatus,
  SubscribeStatusSuccess,
  SubscribeStatusError
};
