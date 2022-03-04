import { createGlobalStyle } from "styled-components";

const ThemeGlobals = createGlobalStyle`
	:root {
		--dark-blue: #2c497f;
		--light-blue: #7e9cbf;
		--green: #9fbfB0;
		--black: #000000;
		--white: #ffffff;
	}
`;

const Theme = {
  bp: {
    mobile: "374px",
    mobileNoPx: "374",
    desktop: "769px",
    desktopNoPx: "769",
    smallMobileHeight: "500px",
    smallMobileHeightNoPx: "500",
  },
};

export { ThemeGlobals, Theme };
