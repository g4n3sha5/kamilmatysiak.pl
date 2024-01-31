import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Tools } from "../components/Tools";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";
import { isMobile } from "@/utils/isMobile";
import { MobileStatusContext } from "@/utils/context";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["index"])),
    },
  };
}

export default function Home() {
  const [mobileStatus, setMobileStatus] = useState(isMobile);

  useEffect(() => {
    const listener = () => setMobileStatus(isMobile);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [mobileStatus]);

  return (
    <>
      <main>
        <MobileStatusContext.Provider value={mobileStatus}>
          <Navbar />
          <Hero />
          <About />
          <Tools />
          <Projects />
          <Contact />
          <Footer />
        </MobileStatusContext.Provider>
      </main>
    </>
  );
}
