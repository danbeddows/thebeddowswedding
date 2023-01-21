import { createGlobalStyle } from "styled-components";

export const fontPerpetua = (assetDomain: string) => {
  return createGlobalStyle`
		*, *::before, *::after {
			font-family: "perpetua";
			font-weight: 400;
			font-style: normal;
		}

		@font-face {
			font-family: "perpetua";
			src: url("${assetDomain}/font/perpetua-regular.ttf");
			font-weight: 400;
			font-style: normal;
			font-display: fallback;
		}
	`;
};
