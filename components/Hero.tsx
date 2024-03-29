import React from "react";
import Developer1 from "public/images/undraw_svg.svg";
import Github from "public/images/github.svg";
import Linkedin from "public/images/linkedin.svg";
import temple from "public/images/yaniv-cohen.webp";
import Link from "next/link";
import { Wave } from "@/components/subcomponents/svg/Wave";
import { useTranslation } from "next-i18next";

export const Hero = () => {
  const { t } = useTranslation("index");

  return (
    <section id="hero">
      <div className="container-fluid w-100  position-relative ">
        <div
          style={{ backgroundImage: `url(${temple.src})` }}
          className=" heroImg row h-100 overflow-hidden"
        >
          <div
            className="col-xl-6 col-md-7 navPadding  col-12 position-relative d-flex
                         justify-content-center align-items-center m-0 px-1 p-xl-3 overflow-hidden"
          >
            <div
              className="heroSquare mt-5 mt-lg-0 rajdhani position-relative d-flex flex-column
                      py-3 slideInLeft"
            >
              <h1>
                {t("My name is")}
                <span className="font-700"> Kamil Matysiak</span>
              </h1>
              <h2>{t("I am")}</h2>

              <div className="mt-4 socialIcons px-2">
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
                            btn-outline-dark px-3 py-1 mt-5 rounded-3"
              >
                {t("About")}
              </Link>
            </div>
          </div>
          <div
            className="col-xl-6 col-md-5 col-12 d-flex align-items-center
                        justify-content-center rightColumnHero pr-5 slideInRight"
          >
            <Developer1 width="550px" height="450px" />
          </div>
        </div>
      </div>

      <Wave />
    </section>
  );
};
