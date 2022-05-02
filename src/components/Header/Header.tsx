import { faBars } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useWindowDimensions from "src/hooks/useWindowDimensions";
import {
  DesktopLinkWrapper,
  HeaderLinkStyle,
  HeaderWrapper,
  InfoWrapper,
  MobileLinks,
  MobileLinkWrapper,
  MobileMenuButtonContainer,
  OurNames,
} from "./Header.styles";

interface HeaderLinkType {
  url: string;
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

const HeaderLink: React.FC<HeaderLinkType> = ({
  url,
  label,
  selected = false,
  onClick,
}) => {
  return (
    <Link href={url} passHref={true}>
      <HeaderLinkStyle selected={selected} onClick={onClick}>
        {label}
      </HeaderLinkStyle>
    </Link>
  );
};

const Header = () => {
  const router = useRouter();
  const windowDimensions = useWindowDimensions();

  const showLogo = !(windowDimensions.width > 768 && router.pathname === "/");

  const [headerLinks, setHeaderLinks] = useState<HeaderLinkType[]>([
    { url: "/", label: "Home" },
    { url: "/venue", label: "Venue" },
    { url: "/accommodation", label: "Accommodation" },
    { url: "/gifts", label: "Gifts" },
    { url: "/message", label: "Message Us" },
  ]);

  const [isMobileLinksVisible, setIsMobileLinksVisible] = useState(false);
  const onMobileMenuClick = () => {
    setIsMobileLinksVisible((isVisible) => !isVisible);
  };

  const closeMobileMenu = () => {
    setIsMobileLinksVisible(false);
  };

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
          <OurNames>{showLogo ? <>Natalie &amp; Dan</> : <>&nbsp;</>}</OurNames>
        </Link>
      </InfoWrapper>
      <DesktopLinkWrapper>
        {headerLinks.map((link, index) => (
          <HeaderLink
            url={link.url}
            label={link.label}
            selected={link.selected}
            key={index}
          />
        ))}
      </DesktopLinkWrapper>
      <MobileLinkWrapper>
        <MobileMenuButtonContainer onClick={onMobileMenuClick}>
          <FontAwesomeIcon icon={faBars} size={"2x"} />
        </MobileMenuButtonContainer>
        <MobileLinks visible={isMobileLinksVisible}>
          {headerLinks.map((link, index) => (
            <HeaderLink
              url={link.url}
              label={link.label}
              selected={link.selected}
              key={index}
              onClick={closeMobileMenu}
            />
          ))}
        </MobileLinks>
      </MobileLinkWrapper>
    </HeaderWrapper>
  );
};

export default Header;
