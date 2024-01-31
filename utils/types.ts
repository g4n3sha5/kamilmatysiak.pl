import { StaticImageData } from "next/image";
import { ReactNode } from "react";

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

export type ToolName = PrimaryToolName | SecondaryToolName;

export interface Tool {
  name: ToolName;
  icon: any;
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
