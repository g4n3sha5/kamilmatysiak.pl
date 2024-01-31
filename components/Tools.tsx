import { priorityTools, secondaryTools } from "@/utils/constants";
import { Tool } from "@/utils/types";
import { useTranslation } from "next-i18next";

export const Tools = () => {
  const { t } = useTranslation("index");

  return (
    <section id="tools">
      <div className="container px-lg-4  overflow-hidden">
        <article className="mb-5">
          <h1 className="header1">{t("Tools")}</h1>
          <p>{t("Tools Description")}</p>
        </article>
        <article>
          <h2>{t("Languages")}</h2>
          <ToolIconsWrapper mappedTools={priorityTools} />
        </article>
        <article>
          <h2>{t("Tools")}</h2>
          <ToolIconsWrapper mappedTools={secondaryTools} />
        </article>
      </div>
    </section>
  );
};

const ToolIcon = (Tech) => {
  return (
    <div
      key={Tech.name}
      aria-hidden="true"
      className="techWrapper d-flex flex-column justify-content-around align-items-center text-center rajdhani flex-wrap"
    >
      <h6>{Tech.name}</h6>
      <Tech.icon width={45} height={45} className="techIcon" />
    </div>
  );
};

const ToolIconsWrapper = ({ mappedTools }: { mappedTools: Tool[] }) => {
  return (
    <div className="pb-lg-3 mt-lg-2 mb-4  my-3 px-lg-3 d-flex justify-content-center flex-wrap">
      {mappedTools.map((tool) => (
        <ToolIcon key={tool.name} {...tool} />
      ))}
    </div>
  );
};
