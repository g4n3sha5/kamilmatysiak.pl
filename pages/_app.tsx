import "styles/globals.css";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Kamil Matysiak | Web Developer</title>
        <link rel="icon" type="image/x-icon" href="/images/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Kamil Matysiak Portfolio - Web Developer"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(App);
