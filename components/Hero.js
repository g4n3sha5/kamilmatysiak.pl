import React from "react";
import Developer1 from "../public/undraw_svg.svg";
import Github from "../public/github.svg";
import Linkedin from "../public/linkedin.svg";
import temple from "../public/yaniv-cohen.webp"
import Link from "next/link";

const Hero = () => {

    return (
        <section id="Hero" className=" AnavPadding ">
            <div className="container-fluid w-100  position-relative ">
                <div  style={{backgroundImage: `url(${temple.src})`}}
                      className=" heroImg row h-100 overflow-hidden">
                    <div

                        className=" col-lg-6 col-12 position-relative d-flex
                         justify-content-center align-items-center m-0 p-5  overflow-hidden"
                    >
                        <div
                            className="heroSquare mt-3 rajdhani position-relative d-flex flex-column
                      py-3"
                        >
                            <h1>
                                Cześć, nazywam się
                                <span className="font-700"> Kamil Matysiak</span>
                            </h1>
                            <h2>Jestem Junior Frontend Developerem</h2>

                            <div className="mt-4  socialIcons  px-2">
                                <a href="https://github.com/g4n3sha5">
                                    <Github width="48px" height="48px" fill="white" />

                                </a>
                                <a href="https://www.linkedin.com/in/kamilmatysiak">
                                    {/*<Linkedin width="45px" height="45px" fill="white" />*/}
                                    <Linkedin width="48px" height="48px" fill="white"/>
                                </a>
                            </div>

                            {/*<img className="socialIcon" src={linkedin} alt = "LinkedIn logo"/>*/}
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

            <div className="custom-shape-divider-bottom-1682337666">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="shape-fill"
                    ></path>
                </svg>
            </div>
        </section>
    );
}

export default Hero;
