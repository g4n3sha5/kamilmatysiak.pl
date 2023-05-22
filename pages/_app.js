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
            <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600&display=swap"
                  rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
                  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                  crossOrigin="anonymous"/>
            <meta name="description" content="Kamil Matysiak portfolio - Junior Frontend Developer"/>
        </Head>
        <Component {...pageProps} />

    </>)
}
