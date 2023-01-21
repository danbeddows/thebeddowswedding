import { differenceInCalendarDays } from "date-fns";
import {
  DaysToGo,
  InfoSubtext,
  MarriedNames,
  MoreInfoSoon,
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
      <MarriedNames>Catherine & Tom</MarriedNames>
      <InfoSubtext>
        <SubtextMobile>
          12th May 2023
          <br />
          Owen Barn Wedding House | Knutsford
        </SubtextMobile>
        <SubtextDesktop>
          12th May 2023 | Owen House Wedding Barn | Knutsford
        </SubtextDesktop>
        <DaysToGo>{message}</DaysToGo>
        <MoreInfoSoon>More information to follow shortly.</MoreInfoSoon>
      </InfoSubtext>
    </WelcomeTile>
  );
};

export default Index;
