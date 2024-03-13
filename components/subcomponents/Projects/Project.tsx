import { useTranslation } from "next-i18next";
import { Fragment, useState } from "react";
import code from "public/images/code.png";
import web from "public/images/web.png";
import more from "public/images/more.png";
import { Modal } from "./Modal";
import { StaticImageData } from "next/image";
import { Project as ProjectType } from "@/utils/types";
import { toolsIconDictionary } from "@/utils/constants";

export const Project = (props: ProjectType) => {
  const { name, descriptionKey, url, repo, tools, img, logo } = props;
  const [show, setShow] = useState(false);
  const { t } = useTranslation("index");
  const condition = show ? "activeIcon" : "";

  const toolsIcons = tools.map((tool) => {
    const toolMatched = toolsIconDictionary.find(
      (item) => item.name.toLowerCase().trim() === tool.toLowerCase().trim(),
    );
    if (toolMatched) return toolMatched.icon;
  });

  const handleClick = () => {
    return setShow(!show);
  };

  return (
    <Fragment key={"key" + repo}>
      <article key={repo} className="project ">
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
          key={"modal" + repo}
          className="projectRight d-flex flex-column align-items-center"
        >
          <div className="d-flex flex-column pt-1 align-items-center justify-content-center">
            <img
              aria-hidden="true"
              alt="Logo of project"
              className="projectLogo"
              src={logo.src}
            />
            <h1 className="text-center">{name}</h1>

            <div className="d-flex justify-content-center my-3 px-3 pb-1">
              <button
                onClick={handleClick}
                className={`iconButton btn ${condition}`}
              >
                <img src={more.src} />
              </button>

              <IconButton icon={web} href={url} />
              <IconButton icon={code} href={repo} />
            </div>
          </div>

          <div className="projectIcons px-1">
            <h1>{t("ToolsNav")}</h1>
            <div
              className="d-flex flex-wrap justify-content-center
             align-items-center py-2 px-1 px-md-3 px-lg-1 mt-1"
            >
              {toolsIcons.map((Icon, index) => (
                <Icon key={index} className="tool" />
              ))}
            </div>
          </div>
        </div>
      </article>
      <Modal {...props} show={show} handleClick={handleClick} />
    </Fragment>
  );
};

const IconButton = ({
  icon,
  href,
}: {
  icon: StaticImageData;
  href: string;
}) => {
  return (
    <a
      key={href}
      href={href}
      target="_blank"
      className="iconButton btn"
      rel="noreferrer"
    >
      <img src={icon.src} />
    </a>
  );
};
