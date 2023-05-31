import '@/styles/globals.css'
import Head from 'next/head'
export default function App({Component, pageProps}) {
    return (<>
        <Head>
            <meta charSet="utf-8"/>
            <title>Kamil Matysiak | Junior Frontend Developer</title>
            <link rel="icon" href="/buddha.png"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>

            <meta name="theme-color" content="#000000"/>
            {/*// <link rel="preconnect" href="https://fonts.googleapis.com">*/}
            {/*// <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin>*/}
            {/*// <link rel="preconnect" href="https://fonts.googleapis.com">*/}
            {/*// <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin>*/}

            <meta name="description" content="Kamil Matysiak portfolio - Junior Frontend Developer"/>
        </Head>
        <Component {...pageProps} />

    </>)
}
