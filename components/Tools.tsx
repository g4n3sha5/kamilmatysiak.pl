import { priorityTools, secondaryTools } from "@/utils/constants";
import { Tool } from "@/utils/types";
import { useTranslation } from "next-i18next";
import { Wave } from "./subcomponents/svg/Wave";

export const Tools = () => {
  const { t } = useTranslation("index");

  return (
    <section id="tools">
      <div className="container px-0 w-screen overflow-hidden">
        <article className="mb-5 px-4">
          <h1 className="header1">{t("ToolsNav")}</h1>
          <p>{t("Tools Description")}</p>
        </article>
        <article>
          <h2>{t("Primary Tools")}</h2>
          <ToolIconsWrapper mappedTools={priorityTools} />
        </article>
        <article>
          <h2>{t("Secondary Tools")}</h2>
          <ToolIconsWrapper mappedTools={secondaryTools} />
        </article>
      </div>
      <Wave />
    </section>
  );
};

const ToolIcon = (Tool) => {
  return (
    <div
      key={Tool.name}
      aria-hidden="true"
      className="techWrapper d-flex flex-column justify-content-around align-items-center text-center rajdhani flex-wrap"
    >
      <h6>{Tool.name}</h6>
      <Tool.icon width={45} height={45} className="toolIcon" />
    </div>
  );
};

const ToolIconsWrapper = ({ mappedTools }: { mappedTools: Tool[] }) => {
  return (
    <div className="pb-lg-3 mt-lg-2 mb-4 px-0 w-100 my-3 px-lg-3 d-flex justify-content-center  align-items-center flex-wrap">
      {mappedTools.map((tool, index) => (
        <ToolIcon key={tool.name + index} {...tool} />
      ))}
    </div>
  );
};
