import {
  dom as fontAwesomeDom,
  library,
} from "@fortawesome/fontawesome-svg-core";
import type { AppProps } from "next/app";
import Head from "next/head";
import fontEuphoria from "src/common/themes/fontEuphoria";
import fontNow from "src/common/themes/fontNow";
import { Theme, ThemeGlobals } from "src/common/themes/global";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

library.add();

const assetDomain =
  process.env.NEXT_PUBLIC_ASSET_SERVER !== undefined
    ? process.env.NEXT_PUBLIC_ASSET_SERVER
    : "";

const FontEuphoriaStyle = fontEuphoria(assetDomain);
const FontNowStyle = fontNow(assetDomain);

const GlobalStyles = createGlobalStyle`
	html, body {
		height: 100%;
	}

  body {
		padding: 0;
		margin: 0;
		text-rendering: optimizeLegibility;
		background: #fff;
	}

	* {
		box-sizing: border-box;
	}

	#__next {
		height: 100%;
	}
`;

function MyApp({ Component, pageProps }: AppProps) {
  const aboutTitle = "The Beddows Wedding";
  const aboutDomain = "thebeddowswedding.com";
  const aboutUrl = `https://www.${aboutDomain}`;
  const aboutDescription = "Natalie & Dan are getting married in 2023.";
  const aboutImgUrl = `${process.env.NEXT_PUBLIC_ASSET_SERVER}/img/og.png`;

  return (
    <>
      <Head>
        <title>{aboutTitle}</title>

        <meta name="description" content={aboutDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        <link rel="icon" href="/favicon.png" />

        <style type="text/css">{fontAwesomeDom.css()}</style>

        <meta property="og:url" content={aboutUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={aboutTitle} />
        <meta property="og:description" content={aboutDescription} />
        <meta property="og:title" content={aboutTitle} />
        <meta property="og:image" content={aboutImgUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={aboutTitle} />
        <meta property="twitter:domain" content={aboutDomain} />
        <meta property="twitter:url" content={aboutUrl} />
        <meta name="twitter:description" content={aboutDescription} />
        <meta name="twitter:image" content={aboutImgUrl} />
      </Head>
      <GlobalStyles />
      <ThemeGlobals />
      <FontEuphoriaStyle />
      <FontNowStyle />
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
