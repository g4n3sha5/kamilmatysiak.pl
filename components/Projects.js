import { techsArr } from "./Technologies.js";
import mativated from "../public/mativated.webp";
import kryptokantor from "../public/kryptojarocin.webp";
import portfolio from "../public/portfolio.webp";
import auratek from "../public/auratek.webp";

import potrfoliologo from "../public/buddha.png";
import kantorlogo from "../public/kantor-logo.webp";
import VAlogo from "../public/va-logo.png";
import aurateklogo from "../public/aurateklogo.png";

import code from "../public/code.png";
import web from "../public/web.png";
import more from "../public/more.png";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const IconComponent = (Icon, index) => {
  return <Icon aria-hidden="true" key={index} className="technology" />;
};
const BtnComponent = ({ icon, href }) => {
  return (
    <a key={href} href={href} target="_blank" className="BtnComponent btn ">
      <img src={icon.src} />
    </a>
  );
};
const isMobile = () => {
  if (typeof window !== "undefined") {
    const breakpoint = "1280px";
    const query = `(max-width : ${breakpoint})`;
    const matches = window.matchMedia(query).matches;
    return matches;
  }
};

const Modal = ({ show, handleClick, img, descriptionKey, keyA }) => {
  const { t } = useTranslation("index");
  return (
    <div
      className="modal "
      style={{ display: show && isMobile() ? "flex" : "none" }}
      tabIndex="-1"
      role="dialog"
      // <div className="Modal" id=`modal${keyA}` tabIndex="-1" role="dialog"
      aria-hidden="true"
    >
      <div
        className=" d-flex w-100 justify-content-center modal-dialog-centered m-0"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              onClick={() => handleClick()}
              aria-label={t("Close")}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body customScroll">
            <div className="projectModal  h-100">
              <div className=" projectMain overflow-auto customScroll d-flex h-100">
                <p className="p-3 paragraph2">{t(`${descriptionKey}`)}</p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => handleClick()}
            >
              {" "}
              {t("Close")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const strToArr = (str) => {
  return str.split(",");
};

const iconFinder = (list) =>
  list.map((tech) => {
    return (
      //find function above filters objects from techsArr, each object has two properties: name of a technology used and its icon,
      // find matching objects and get icon
      techsArr.find((item) => {
        //remove whitespaces, ignore letter case
        const equalStr = (i) => i.toLowerCase().trim();
        return equalStr(item.name) === equalStr(tech);
      }).icon
    );
  });

let projectsList = [
  {
    name: "Auratek",
    descriptionKey: "Auratek description",
    techs: strToArr(
      "HTML, CSS, React, NextJS, Bootstrap, JavaScript, Webstorm, Figma, Git"
    ),
    url: "https://auratek.vercel.app/",
    repo: "https://github.com/g4n3sha5/Auratek",
    keyA: "auratek",
    img: auratek,
    logo: aurateklogo,
  },
  {
    name: "Portfolio name",
    descriptionKey: "Portfolio Description",
    techs: strToArr(
      "HTML, CSS, React, NextJS, Bootstrap, JavaScript, Webstorm, Figma, Git"
    ),
    url: "https://www.kamilmatysiak.pl/",
    repo: "https://github.com/g4n3sha5/kamilmatysiak.pl",
    keyA: "portfolio",
    img: portfolio,
    logo: potrfoliologo,
  },

  {
    name: "MATIVATED",
    descriptionKey: "VA Description",
    techs: strToArr(
      "HTML, CSS, Bootstrap, JavaScript, HTMX, Django, Python , Figma, PyCharm, JSON, Git"
    ),
    url: "https://www.mativated.com/",
    repo: "https://github.com/g4n3sha5/MATIVATED_dev",
    keyA: "mativated",
    img: mativated,
    logo: VAlogo,
  },

  {
    name: "Crypto name",
    descriptionKey: "Crypto Description",
    techs: strToArr(
      "HTML, CSS, Bootstrap, JavaScript, Webstorm, Figma, Git, WordPress"
    ),
    url: "https://www.kryptojarocin.pl/",
    repo: "https://github.com/g4n3sha5/Krypto-Jarocin",
    keyA: "kantor",
    img: kryptokantor,
    logo: kantorlogo,
  },
].map((obj) => {
  obj.icons = iconFinder(obj.techs);
  return obj;
});

const ProjectComponent = (props) => {
  let [show, setShow] = useState(false);
  const status = [show, setShow];
  let [mobileStatus, setMobileStatus] = useState(isMobile);
  const { name, descriptionKey, url, repo, icons, keyA, img, logo } = props;

  useEffect(() => {
    let listener = () => setMobileStatus(isMobile);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [mobileStatus]);

  const handleClick = () => {
    return setShow(!show);
  };

  const { t } = useTranslation("index");

  let condition = show ? "activeIcon" : "";

  return (
    <React.Fragment key={"key" + keyA}>
      <article key={keyA} className="project ">
        <div
          className={`${
            show ? "showProject" : ""
          } projectMain overflow-auto customScroll d-flex `}
        >
          {!show ? (
            <img alt="Project image" src={img.src} />
          ) : (
            <p className="p-3 paragraph2">{t(`${descriptionKey}`)}</p>
          )}
        </div>

        <div
          key={"modal" + keyA}
          className="projectRight d-flex flex-column  pt-3 align-items-center"
        >
          <div className="d-flex flex-column align-items-center justify-content-center h-100">
            <img
              aria-hidden="true"
              alt="Logo of project"
              className="projectLogo"
              src={logo.src}
            />
            <h1 className="text-center">{t(`${name}`)}</h1>

            <div className="d-flex justify-content-center my-3 px-3 pb-1">
              <button
                onClick={() => handleClick()}
                className={`BtnComponent btn ${condition}`}
              >
                <img src={more.src} />
              </button>
              <BtnComponent icon={web} href={url} />
              <BtnComponent icon={code} href={repo} />
            </div>
          </div>
          <div className="projectIcons  px-1">
            <h1>{t("Technologies")}</h1>
            <div
              className=" d-flex flex-wrap justify-content-center
             align-items-center py-2 px-1 px-md-3 px-lg-1 mt-1"
            >
              {icons.map(IconComponent)}
            </div>
          </div>
        </div>
      </article>
      <Modal {...props} show={show} handleClick={handleClick} />
    </React.Fragment>
  );
};

const Projects = () => {
  const { locale } = useRouter();
  const { t } = useTranslation("index");
  return (
    <section id="projects">
      <div className="container  px-lg-5 ">
        <article>
          <h1 className="header1">{t("Projects")}</h1>

          <p>{t("Projects Description")}</p>
          {
            <div className="projects d-flex flex-column justify-content-center align-items-center py-5 gy-4">
              {projectsList.map((project) => (
                <ProjectComponent {...project} />
              ))}
            </div>
          }
        </article>
      </div>
    </section>
  );
};
export default Projects;
