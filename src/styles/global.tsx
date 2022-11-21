import { createGlobalStyle } from "styled-components";

export const ThemeGlobals = createGlobalStyle`
	:root {
		--dark-blue: #2c497f;
		--light-blue: #7e9cbf;
		--green: #9fbfB0;
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
