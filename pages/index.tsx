import {Inter} from 'next/font/google'

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import {serverSideTranslations} from 'next-i18next/serverSideTranslations';


const inter = Inter({subsets: ['latin']})

export async function getStaticProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["index"])),
        }
    }
}

export default function Home() {
    return (
        <>
            <main>
                <Navbar/>
                <Hero/>
                <About/>
                <Technologies/>
                <Projects/>
                <Contact/>
                <Footer/>
            </main>
        </>
    )
}
