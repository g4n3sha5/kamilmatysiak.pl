import React from "react";
import Developer1 from "../public/undraw_svg.svg";
import Github from "../public/github.svg";
import Linkedin from "../public/linkedin.svg";
import temple from "../public/yaniv-cohen.webp"
import Link from "next/link";
import Wave from "@/components/Wave";

import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";


const Hero = () => {
    const {locale} = useRouter()
    const {t, i18n} = useTranslation('index')

    return (
        <section id="Hero">
            <div className="container-fluid w-100  position-relative ">
                <div style={{backgroundImage: `url(${temple.src})`}} className=" heroImg row h-100 overflow-hidden">
                    <div className=" col-xl-6 col-md-7 navPadding col-12 position-relative d-flex
                         justify-content-center align-items-center m-0 px-1 p-xl-3 overflow-hidden">
                        <div className="heroSquare mt-3 rajdhani position-relative d-flex flex-column
                      py-3">
                            <h1>
                                {t("My name is")}
                                <span className="font-700"> Kamil Matysiak</span>
                            </h1>
                            <h2>{t("I am")}</h2>

                            <div className="mt-4  socialIcons  px-2">
                                <a href="https://github.com/g4n3sha5">
                                    <Github width="48px" height="48px" fill="white"/>

                                </a>
                                <a href="https://www.linkedin.com/in/kamilmatysiak">
                                    <Linkedin width="48px" height="48px" fill="white"/>
                                </a>
                            </div>

                            <Link
                                href="#about"
                                scroll={false}
                                className="d-block  btn
                            btn-outline-dark px-3 py-2  mt-5 "
                            >
                                {t("About")}
                            </Link>
                        </div>
                    </div>
                    <div
                        className="col-xl-6 col-md-5 col-12  d-flex align-items-center
                        justify-content-center rightColumnHero pr-5 ">


                        <Developer1 width="550px" height="450px"/>

                    </div>
                </div>
            </div>

            <Wave/>
        </section>
    );
}


export default Hero;
