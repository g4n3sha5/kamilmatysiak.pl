import mativated from "public/images/mativated.webp";
import kryptokantor from "public/images/kryptojarocin.webp";
import auratek from "public/images/auratek.webp";
import kantorlogo from "public/images/kantor-logo.webp";
import VAlogo from "public/images/va-logo.png";
import aurateklogo from "public/images/aurateklogo.png";
import milologo from "public/images/milologo.png";
import milo from "public/images/milo.webp";
import HTML from "public/images/techs/HTML.svg";
import CSS from "public/images/techs/CSS.svg";
import JavaScript from "public/images/techs/JavaScript.svg";
import TypeScript from "public/images/techs/TypeScript.svg";
import ReactQuery from "public/images/techs/ReactQuery.svg";
import ReactRouter from "public/images/techs/ReactRouter.svg";
import iReact from "public/images/techs/React.svg";
import NextJS from "public/images/techs/NextJS.svg";
import Bootstrap from "public/images/techs/Bootstrap.svg";
import Tailwind from "public/images/techs/Tailwind.svg";
import Python from "public/images/techs/Python.svg";
import Django from "public/images/techs/Django.svg";
import NodeJs from "public/images/techs/NodeJs.svg";
import HTMX from "public/images/techs/HTMX.svg";
import Figma from "public/images/techs/Figma.svg";
import Git from "public/images/techs/Git.svg";
import WordPress from "public/images/techs/WordPress.svg";
import { Project, Tool } from "./types";

export const priorityTools: Tool[] = [
  { name: "HTML", icon: HTML },
  { name: "CSS", icon: CSS },
  { name: "Bootstrap", icon: Bootstrap },
  { name: "Tailwind", icon: Tailwind },
  { name: "TypeScript", icon: TypeScript },
  { name: "React", icon: iReact },
  { name: "NextJS", icon: NextJS },
  { name: "Python", icon: Python },
  { name: "Django", icon: Django },
  { name: "NodeJs", icon: NodeJs },
];

export const secondaryTools: Tool[] = [
  { name: "Git", icon: Git },
  { name: "React Query", icon: ReactQuery },
  { name: "React Router", icon: ReactRouter },
  { name: "HTMX", icon: HTMX },
  { name: "WordPress", icon: WordPress },
  { name: "Figma", icon: Figma },
];

export const additionalTools: Tool[] = [
  { name: "JavaScript", icon: JavaScript },
];

export const toolsIconDictionary = [
  ...priorityTools,
  ...secondaryTools,
  ...additionalTools,
];

export const projectsList: Project[] = [
  {
    name: "Milo",
    // descriptionKey is a key for i18next to access description (translated)
    descriptionKey: "Milo description",
    url: "https://kivy.pl/",
    repo: "https://imilo.pl/",
    img: milo,
    logo: milologo,
    tools: ["HTML", "CSS", "Bootstrap", "TypeScript", "React", "Figma", "Git"],
  },
  {
    name: "Auratek",
    descriptionKey: "Auratek description",
    url: "https://www.auratek.pl/",
    repo: "https://github.com/g4n3sha5/Auratek",
    img: auratek,
    logo: aurateklogo,
    tools: [
      "HTML",
      "CSS",
      "Bootstrap",
      "TypeScript",
      "React",
      "NextJS",
      "Figma",
      "Git",
    ],
  },
  {
    name: "Mativated: Refactor",
    descriptionKey: "VA Description",
    url: "https://mativated-monorepo.vercel.app/",
    repo: "https://github.com/g4n3sha5/mativated-monorepo",
    img: mativated,
    logo: VAlogo,
    tools: ["HTML", "CSS", "Tailwind", "TypeScript", "React", "Figma", "Git", "NodeJs"],
  },
  {
    name: "Crypto name",
    descriptionKey: "Crypto Description",
    url: "https://g4n3sha5.github.io/Krypto-Jarocin/",
    repo: "https://github.com/g4n3sha5/Krypto-Jarocin",
    img: kryptokantor,
    logo: kantorlogo,
    tools: ["HTML", "CSS", "Bootstrap", "JavaScript", "Figma", "Git"],
  },
];
