import { differenceInCalendarDays } from "date-fns";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  DaysToGo,
  HeaderLinkStyle,
  HeaderWrapper,
  InfoSubtext,
  InfoWrapper,
  LinkWrapper,
  OurNames,
} from "./Header.styles";

interface HeaderLinkType {
  url: string;
  label: string;
  selected?: boolean;
}

const HeaderLink: React.FC<HeaderLinkType> = ({
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

const Header = () => {
  const router = useRouter();

  const [headerLinks, setHeaderLinks] = useState<HeaderLinkType[]>([
    { url: "/", label: "Home" },
    { url: "/venue", label: "Venue" },
    { url: "/message", label: "Message Us" },
  ]);

  // Check for URL change, and reevaluate selected header link
  useEffect(() => {
    setHeaderLinks(
      headerLinks.map((link) => {
        const highlightRegex = new RegExp(`^${link.url}$`, "g");

        delete link.selected;

        if (highlightRegex.exec(router.pathname)) {
          return { ...link, selected: true };
        }

        return link;
      })
    );
  }, [router.pathname]);

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
      <LinkWrapper>
        {headerLinks.map((link, index) => (
          <HeaderLink
            url={link.url}
            label={link.label}
            selected={link.selected}
            key={index}
          />
        ))}
      </LinkWrapper>
    </HeaderWrapper>
  );
};

export default Header;
