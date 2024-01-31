import { tools } from "./constants";
import { ToolName } from "./types";

export const iconFinder = (toolsList: ToolName[]) => {
  const icons = toolsList.map((tool) => {
    const toolFound = tools.find(
      (item) => tool.toLowerCase().trim() === item.name.toLowerCase().trim(),
    );
    if (tool) return toolFound.icon;
    // if (tool) return <ToolFound.icon className="tool" />;
  });
  return icons;
};
