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
    mobile: "374px",
    mobileNoPx: "374",
    desktop: "769px",
    desktopNoPx: "769",
    desktopLarge: "1440px",
    desktopLargeNoPx: "1440",
    smallMobileHeight: "500px",
    smallMobileHeightNoPx: "500",
  },
};
