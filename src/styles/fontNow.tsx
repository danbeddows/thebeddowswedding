import { createGlobalStyle } from "styled-components";

const fontNowStyle = (assetDomain: string) => {
  return createGlobalStyle`
		*, *::before, *::after {
			font-family: "now";
			font-weight: 400;
			font-style: normal;
		}

		@font-face {
			font-family: "now";
			src: url("${assetDomain}/font/now-regular.otf") format("opentype");
			font-weight: 400;
			font-style: normal;
			font-display: fallback;
		}
	`;
};

export default fontNowStyle;
