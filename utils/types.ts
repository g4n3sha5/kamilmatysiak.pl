import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type PriorityToolName =
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "NextJS"
  | "Python"
  | "Django"
  | "HTML"
  | "CSS"
  | "Bootstrap";

export type SecondaryToolName =
  | "Git"
  | "Jira"
  | "React Query"
  | "React Router"
  | "Jira"
  | "Postman"
  | "HTMX"
  | "WordPress"
  | "Figma"
  | "Photoshop"
  | "Docker";

export type ToolName = PriorityToolName | SecondaryToolName;

export interface Tool {
  name: ToolName;
  icon: ReactNode;
}

export interface Project {
  name: string;
  url: string;
  descriptionKey: string;
  repo: string;
  img: StaticImageData;
  logo: StaticImageData;
  icons: Tool["icon"][];
}
