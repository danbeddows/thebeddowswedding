import { differenceInCalendarDays } from "date-fns";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  DaysToGo,
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
  selected?: boolean;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({
  url,
  label,
  selected = false,
}) => {
  return (
    <Link href={url} passHref={true}>
      <HeaderLinkStyle selected={selected}>{label}</HeaderLinkStyle>
    </Link>
  );
};

const getHeaderLinks = (route: string) => {
  const links = [
    { url: "/", label: "Home" },
    { url: "/venue", label: "Venue" },
    { url: "/message", label: "Message Us" },
  ];

  return links.map((link) => {
    const hightlightMatch = link.url.replaceAll("/", "/");
    const highlightRegex = new RegExp(`^${hightlightMatch}$`, "g");

    let selected = false;
    if (highlightRegex.exec(route)) {
      selected = true;
    }

    return <HeaderLink url={link.url} label={link.label} selected={selected} />;
  });
};

const Header = () => {
  const router = useRouter();

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
        <Link href="/" passHref={true}>
          <OurNames>Natalie &amp; Dan</OurNames>
        </Link>
        <InfoSubtext>
          22nd April 2023 &#8901; The Holford Estate, Knutsford
          <DaysToGo>{message}</DaysToGo>
        </InfoSubtext>
      </InfoWrapper>
      <LinkWrapper>{getHeaderLinks(router.pathname)}</LinkWrapper>
    </HeaderWrapper>
  );
};

export default Header;
