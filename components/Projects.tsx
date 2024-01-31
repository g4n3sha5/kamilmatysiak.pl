import { useTranslation } from "next-i18next";
import { Project } from "./subcomponents/Projects/Project";
import { projectsList } from "@/utils/constants";
import { Wave } from "./subcomponents/svg/Wave";

export const Projects = () => {
  const { t } = useTranslation("index");

  return (
    <section id="projects">
      <div className="container px-lg-5">
        <article>
          <h1 className="header1">{t("Projects")}</h1>

          <p>{t("Projects Description")}</p>
          {
            <div className="projects d-flex flex-column justify-content-center align-items-center py-5 gy-4">
              {projectsList.map((project) => (
                <Project key={project.url} {...project} />
              ))}
            </div>
          }
        </article>
      </div>
      <Wave />
    </section>
  );
};
