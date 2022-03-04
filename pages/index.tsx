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
      <MarriedDate>22nd April 2023</MarriedDate>
    </PageWrapper>
  );
};

export default Index;
