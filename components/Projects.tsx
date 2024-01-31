// import mativated from "public/images/mativated.webp";
// import kryptokantor from "public/images/kryptojarocin.webp";
// import portfolio from "public/images/portfolio.webp";
// import auratek from "public/images/auratek.webp";
// import potrfoliologo from "public/images/buddha.png";
// import kantorlogo from "public/images/kantor-logo.webp";
// import VAlogo from "public/images/va-logo.png";
// import aurateklogo from "public/images/aurateklogo.png";
import { useTranslation } from "next-i18next";
import { Project } from "./subcomponents/Projects/Project";
import { projectsList } from "@/utils/constants";

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
    </section>
  );
};
