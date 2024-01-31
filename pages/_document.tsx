import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
    return (<Html>

        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600&display=swap"
                  rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
                  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                  crossOrigin="anonymous"/>

        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>


    </Html>)
}
