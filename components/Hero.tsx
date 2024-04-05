import React from "react";
import Github from "public/images/github.svg";
import Linkedin from "public/images/linkedin.svg";
import hero from "public/images/remy_loz.webp";
import Link from "next/link";
import { Wave } from "@/components/subcomponents/svg/Wave";
import { useTranslation } from "next-i18next";

export const Hero = () => {
  const { t } = useTranslation("index");

  return (
    <section id="hero">
      <div className="container-fluid px-0  position-relative overflow-hidden d-flex align-items-start justify-content-center justify-content-lg-start">
        <div
          style={{ backgroundImage: `url(${hero.src})` }}
          className=" heroImg h-100 overflow-hidden"
        ></div>
        <div className="col-11 col-lg-6 z-1 ml-lg-5  d-flex justify-content-center align-items-start  px-1 p-xl-3 overflow-hidden heroSquare rajdhani d-flex flex-column slideInLeft">
          <h1 className="mb-1 display-5">
            {t("My name is")}
            <span className="font-600 kamil"> Kamil Matysiak</span>
          </h1>
          <h2 className="display-4 pl-2 font-700">Web Developer</h2>

          <div className="mt-2 socialIcons d-flex px-2 flex-column">
            <div className="d-flex">
              <a href="https://github.com/g4n3sha5">
                <Github width="48px" height="48px" fill="white" />
              </a>
              <a href="https://www.linkedin.com/in/kamilmatysiak">
                <Linkedin width="48px" height="48px" fill="white" />
              </a>
            </div>
            <Link
              href="#about"
              scroll={false}
              className="d-block btn aboutBtn 
                            btn-outline-dark  px-3 py-1 mt-4 rounded-3 text-center flex d-flex align-items-center justify-content-center"
            >
              {t("About")}
            </Link>
          </div>
        </div>
      </div>

      <Wave />
    </section>
  );
};
