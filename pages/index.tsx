import { differenceInCalendarDays } from "date-fns";
import {
  DaysToGo,
  InfoSubtext,
  MarriedNames,
  SubtextDesktop,
  SubtextMobile,
  WelcomeTile,
} from "./index.styles";

const Index = () => {
  const numDays = differenceInCalendarDays(new Date("2023/05/12"), Date.now());
  let message = `${numDays} ${numDays > 1 ? "days" : "day"} to go`;

  if (numDays == 0) {
    message = "The wedding is TODAY!";
  } else if (numDays < 0) {
    message = `${-numDays} ${-numDays > 1 ? "days" : "day"} since the wedding`;
  }

  return (
    <WelcomeTile>
      <MarriedNames>
        Tom
        <br />+<br />
        Catherine
      </MarriedNames>
      <InfoSubtext>
        <SubtextMobile>
          12th May 2023
          <br />
          Owen Barn Wedding House | Knutsford
        </SubtextMobile>
        <SubtextDesktop>
          12th May 2023 | Owen Barn Wedding House | Knutsford
        </SubtextDesktop>
        <DaysToGo>{message}</DaysToGo>
      </InfoSubtext>
    </WelcomeTile>
  );
};

export default Index;
