import { createGlobalStyle } from "styled-components";

export const fontRoboto = (assetDomain: string) => {
  return createGlobalStyle`
		@font-face {
			font-family: "roboto";
			src: url("${assetDomain}/font/roboto-regular.ttf");
			font-weight: 400;
			font-style: normal;
			font-display: fallback;
		}
	`;
};
