import { createGlobalStyle } from "styled-components";

export const fontEuphoria = (assetDomain: string) => {
  return createGlobalStyle`
		@font-face {
			font-family: "euphoria";
			src: url("${assetDomain}/font/euphoria-script.ttf") format("truetype");
			font-weight: 400;
			font-style: normal;
			font-display: fallback;
		}
	`;
};
