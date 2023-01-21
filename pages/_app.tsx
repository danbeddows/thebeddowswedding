import {
  dom as fontAwesomeDom,
  library,
} from "@fortawesome/fontawesome-svg-core";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "src/components/Header";
import { fontPerpetua } from "src/styles/fontPerpetua";
import { fontScriptMt } from "src/styles/fontScriptMt";
import { Theme, ThemeGlobals } from "src/styles/global";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

library.add();

const assetDomain =
  process.env.NEXT_PUBLIC_ASSET_SERVER !== undefined
    ? process.env.NEXT_PUBLIC_ASSET_SERVER
    : "";

const FontScriptMtStyle = fontScriptMt(assetDomain);
const FontPerpetuaStyle = fontPerpetua(assetDomain);

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
  const aboutTitle = "The Benn Wedding";
  const aboutDomain = "thebennwedding.com";
  const aboutUrl = `https://www.${aboutDomain}`;
  const aboutDescription = "Tom & Catherine are getting married in 2023 🎉";
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

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={aboutTitle} />
        <meta property="twitter:domain" content={aboutDomain} />
        <meta property="twitter:url" content={aboutUrl} />
        <meta property="twitter:description" content={aboutDescription} />
        <meta property="twitter:image" content={aboutImgUrl} />
      </Head>
      <GlobalStyles />
      <ThemeGlobals />
      <FontScriptMtStyle />
      <FontPerpetuaStyle />
      <ThemeProvider theme={Theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
