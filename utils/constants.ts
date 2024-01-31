import mativated from "public/images/mativated.webp";
import kryptokantor from "public/images/kryptojarocin.webp";
import portfolio from "public/images/portfolio.webp";
import auratek from "public/images/auratek.webp";
import potrfoliologo from "public/images/buddha.png";
import kantorlogo from "public/images/kantor-logo.webp";
import VAlogo from "public/images/va-logo.png";
import aurateklogo from "public/images/aurateklogo.png";
import HTML from "public/images/techs/HTML.svg";
import CSS from "public/images/techs/CSS.svg";
import JavaScript from "public/images/techs/JavaScript.svg";
import TypeScript from "public/images/techs/TypeScript.svg";
import ReactQuery from "public/images/techs/ReactQuery.svg";
import ReactRouter from "public/images/techs/ReactRouter.svg";
import iReact from "public/images/techs/React.svg";
import NextJS from "public/images/techs/NextJS.svg";
import Bootstrap from "public/images/techs/Bootstrap.svg";
import Python from "public/images/techs/Python.svg";
import Django from "public/images/techs/Django.svg";
import HTMX from "public/images/techs/HTMX.svg";
import Postman from "public/images/techs/Postman.svg";
import Figma from "public/images/techs/Figma.svg";
import Git from "public/images/techs/Git.svg";
import Jira from "public/images/techs/Jira.svg";
import WordPress from "public/images/techs/WordPress.svg";
import Photoshop from "public/images/techs/Photoshop.svg";
import Docker from "public/images/techs/Docker.svg";
import { Project, Tool } from "./types";

export const priorityTools: Tool[] = [
  { name: "JavaScript", icon: JavaScript },
  { name: "TypeScript", icon: TypeScript },
  { name: "React", icon: iReact },
  { name: "NextJS", icon: NextJS },
  { name: "Python", icon: Python },
  { name: "Django", icon: Django },
  { name: "HTML", icon: HTML },
  { name: "CSS", icon: CSS },
  { name: "Bootstrap", icon: Bootstrap },
];

export const secondaryTools: Tool[] = [
  { name: "Git", icon: Git },
  { name: "Jira", icon: Jira },
  { name: "React Query", icon: ReactQuery },
  { name: "React Router", icon: ReactRouter },
  { name: "Jira", icon: Jira },
  { name: "Postman", icon: Postman },
  { name: "HTMX", icon: HTMX },
  { name: "WordPress", icon: WordPress },
  { name: "Figma", icon: Figma },
  { name: "Photoshop", icon: Photoshop },
  { name: "Docker", icon: Docker },
];
export const toolsIconDictionary = [...priorityTools, ...secondaryTools];

export const projectsList: Project[] = [
  {
    name: "Auratek",
    // descriptionKey is a key for i18next to access description (translated)
    descriptionKey: "Auratek description",
    url: "https://www.auratek.pl/",
    repo: "https://github.com/g4n3sha5/Auratek",
    img: auratek,
    logo: aurateklogo,
    tools: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "React",
      "NextJS",

      "Figma",
      "Git",
    ],
  },
  {
    name: "Portfolio name",
    descriptionKey: "Portfolio Description",
    url: "https://www.kamilmatysiak.pl/",
    repo: "https://github.com/g4n3sha5/kamilmatysiak.pl",
    img: portfolio,
    logo: potrfoliologo,
    tools: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "React",
      "NextJS",

      "Figma",
      "Git",
    ],
  },
  {
    name: "MATIVATED",
    descriptionKey: "VA Description",
    url: "https://www.mativated.com/",
    repo: "https://github.com/g4n3sha5/MATIVATED_dev",
    img: mativated,
    logo: VAlogo,
    tools: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "HTMX",
      "Django",
      "Python",
      "Figma",
      "Git",
    ],
  },
  {
    name: "Crypto name",
    descriptionKey: "Crypto Description",
    url: "https://g4n3sha5.github.io/Krypto-Jarocin/",
    repo: "https://github.com/g4n3sha5/Krypto-Jarocin",
    img: kryptokantor,
    logo: kantorlogo,
    tools: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "HTMX",
      "Django",
      "Python",
      "Figma",
      "Git",
    ],
  },
];
