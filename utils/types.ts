import { StaticImageData } from "next/image";
import { toolsIconDictionary } from "@/utils/constants";

export type LanguageCode = "pl" | "en";

export type PrimaryToolName =
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "NextJS"
  | "Python"
  | "Django"
  | "HTML"
  | "CSS"
  | "Bootstrap"
  | "Tailwind"
  | "Photoshop"
  | "NodeJs";

export type SecondaryToolName =
  | "Git"
  | "Jira"
  | "React Query"
  | "React Router"
  | "Jira"
  | "Postman"
  | "HTMX"
  | "WordPress"
  | "Figma";

export type ToolName = (typeof toolsIconDictionary)[number]["name"];

export interface Tool {
  name: string;
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
}

export interface Project {
  name: string;
  url: string;
  descriptionKey: string;
  repo: string;
  img: StaticImageData;
  logo: StaticImageData;
  tools: ToolName[];
}
