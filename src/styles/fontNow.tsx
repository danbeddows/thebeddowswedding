import { createGlobalStyle } from "styled-components";

export const fontNow = (assetDomain: string) => {
  return createGlobalStyle`
		*, *::before, *::after {
			font-family: "now";
			font-weight: 400;
			font-style: normal;
		}

		@font-face {
			font-family: "now";
			src: url("${assetDomain}/font/now-thin.otf") format("opentype");
			font-weight: 300;
			font-style: normal;
			font-display: fallback;
		}

		@font-face {
			font-family: "now";
			src: url("${assetDomain}/font/now-light.otf") format("opentype");
			font-weight: 400;
			font-style: normal;
			font-display: fallback;
		}

		@font-face {
			font-family: "now";
			src: url("${assetDomain}/font/now-regular.otf") format("opentype");
			font-weight: 500;
			font-style: normal;
			font-display: fallback;
		}

		@font-face {
			font-family: "now";
			src: url("${assetDomain}/font/now-medium.otf") format("opentype");
			font-weight: 600;
			font-style: normal;
			font-display: fallback;
		}

		@font-face {
			font-family: "now";
			src: url("${assetDomain}/font/now-bold.otf") format("opentype");
			font-weight: 700;
			font-style: normal;
			font-display: fallback;
		}

		@font-face {
			font-family: "now";
			src: url("${assetDomain}/font/now-black.otf") format("opentype");
			font-weight: 800;
			font-style: normal;
			font-display: fallback;
		}
	`;
};
