import { createGlobalStyle } from "styled-components";

export const ThemeGlobals = createGlobalStyle`
	:root {
		--dark-blue: #434f5f;
		--mid-blue: #8b9bb8;
		--light-blue: #b0c8ef;
		--green: #879284;
		--orange: #be9279;
		--black: #000000;
		--white: #ffffff;
	}
`;

export const Theme = {
  bp: {
    smallMobileHeight: "500px",
    smallMobileHeightNoPx: "500",
    mobile: "374px",
    mobileNoPx: "374",
    tablet: "769px",
    tabletNoPx: "769",
    desktop: "940px",
    desktopNoPx: "940",
    desktopLarge: "1440px",
    desktopLargeNoPx: "1440",
  },
};
