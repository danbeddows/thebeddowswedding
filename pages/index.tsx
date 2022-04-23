import { differenceInCalendarDays } from "date-fns";
import Header from "src/components/Header";
import { DaysToGo, InfoSubtext, WelcomeTile } from "./index.styles";

const Index = () => {
  const numDays = differenceInCalendarDays(new Date("2023/04/22"), Date.now());
  let message = `${numDays} ${numDays > 1 ? "days" : "day"} to go.`;

  if (numDays == 0) {
    message = "The wedding is TODAY!";
  } else if (numDays < 0) {
    message = `${-numDays} ${-numDays > 1 ? "days" : "day"} since the wedding.`;
  }

  return (
    <>
      <Header />
      <WelcomeTile>
        <div>natalie and dan</div>
        <InfoSubtext>
          22nd April 2023 &#8901; The Holford Estate, Knutsford
          <DaysToGo>{message}</DaysToGo>
        </InfoSubtext>
      </WelcomeTile>
    </>
  );
};

export default Index;
