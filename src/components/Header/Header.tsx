import { differenceInCalendarDays } from "date-fns";
import Link from "next/link";
import {
  HeaderLinkStyle,
  HeaderWrapper,
  InfoSubtext,
  InfoWrapper,
  LinkWrapper,
  OurNames,
} from "./Header.styles";

interface HeaderLinkProps {
  url: string;
  label: string;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ url, label }) => {
  return (
    <Link href={url} passHref={true}>
      <HeaderLinkStyle>{label}</HeaderLinkStyle>
    </Link>
  );
};

const Header = () => {
  const numDays = differenceInCalendarDays(new Date("2023/04/22"), Date.now());
  let message = `${numDays} ${numDays > 1 ? "days" : "day"} to go.`;

  if (numDays == 0) {
    message = "The wedding is TODAY!";
  } else if (numDays < 0) {
    message = `${-numDays} ${-numDays > 1 ? "days" : "day"} since the wedding.`;
  }

  return (
    <HeaderWrapper>
      <InfoWrapper>
        <OurNames>Natalie &amp; Dan</OurNames>
        <InfoSubtext>
          22nd April 2023 &#8901; The Holford Estate, Knutsford
          <br />
          {message}
        </InfoSubtext>
      </InfoWrapper>
      <LinkWrapper>
        <HeaderLink url={"/"} label={"Home"} />
        <HeaderLink url={"/venue"} label={"Venue"} />
        <HeaderLink url={"/message"} label={"Message Us"} />
      </LinkWrapper>
    </HeaderWrapper>
  );
};

export default Header;
