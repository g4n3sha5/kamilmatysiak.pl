import Head from 'next/head'

import {Inter} from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>
            {/*<Head/>*/}
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
