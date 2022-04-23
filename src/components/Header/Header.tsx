import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  HeaderLinkStyle,
  HeaderWrapper,
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
    { url: "/accommodation", label: "Accommodation" },
    { url: "/gifts", label: "Gifts" },
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

  return (
    <HeaderWrapper>
      <InfoWrapper>
        <Link href="/" passHref={true}>
          <OurNames>Natalie &amp; Dan</OurNames>
        </Link>
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
