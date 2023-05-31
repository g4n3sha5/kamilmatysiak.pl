import React from "react";
import Developer1 from "../public/undraw_svg.svg";
import Github from "../public/github.svg";
import Linkedin from "../public/linkedin.svg";
import temple from "../public/yaniv-cohen.webp"
import Link from "next/link";
import Wave from "@/components/Wave";

const Hero = () => {

    return (
        <section id="Hero">
            <div className="container-fluid w-100  position-relative ">
                <div  style={{backgroundImage: `url(${temple.src})`}}
                      className=" heroImg row h-100 overflow-hidden">
                    <div

                        className=" col-lg-6 navPadding col-12 position-relative d-flex
                         justify-content-center align-items-center m-0 p-md-4 p-3  overflow-hidden"
                    >
                        <div
                            className="heroSquare mt-3 rajdhani position-relative d-flex flex-column
                      py-3"
                        >
                            <h1>
                                Cześć, nazywam się
                                <span className="font-700"> Kamil Matysiak</span>
                            </h1>
                            <h2>Jestem Junior Web Developerem</h2>

                            <div className="mt-4  socialIcons  px-2">
                                <a href="https://github.com/g4n3sha5">
                                    <Github width="48px" height="48px" fill="white" />

                                </a>
                                <a href="https://www.linkedin.com/in/kamilmatysiak">
                                    <Linkedin width="48px" height="48px" fill="white"/>
                                </a>
                            </div>

                            <Link
                                href="#about"
                                scroll = {false}
                                className="d-block  btn
                            btn-outline-dark px-3 py-2  mt-5 "
                            >
                                O mnie
                            </Link>
                        </div>
                    </div>
                    <div
                        className="col-lg-6 col-12  d-flex align-items-center
                        justify-content-center rightColumnHero p-3 ">



                            <Developer1 width="550px" height="450px"/>

                    </div>
                </div>
            </div>

            <Wave/>
        </section>
    );
}

export default Hero;
