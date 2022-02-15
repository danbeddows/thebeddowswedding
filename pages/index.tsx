import {
  MarriedDate,
  MarriedNames,
  MarriedSubtext,
  PageWrapper,
} from "./index.styles";

const Index = () => {
  return (
    <PageWrapper>
      <MarriedNames>
        Natalie
        <br />+<br />
        Dan
      </MarriedNames>
      <MarriedSubtext>Are Getting Married</MarriedSubtext>
      <MarriedDate>2023</MarriedDate>
    </PageWrapper>
  );
};

export default Index;
