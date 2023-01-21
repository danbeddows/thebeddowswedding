import { createGlobalStyle } from "styled-components";

export const fontScriptMt = (assetDomain: string) => {
  return createGlobalStyle`
		@font-face {
			font-family: "script-mt";
			src: url("${assetDomain}/font/script-mt.ttf");
			font-weight: 400;
			font-style: normal;
			font-display: fallback;
		}
	`;
};
