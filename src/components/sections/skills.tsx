import { portfolioData } from "@/lib/info";
import { Badge } from "@/components/ui/badge";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaWordpress,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiMongodb,
  SiAframe,
} from "react-icons/si";
import { IconType } from "react-icons";

// Define icons with their official colors
const iconMap: { [key: string]: { component: IconType; color: string } } = {
  html: { component: FaHtml5, color: "#E34F26" },
  javascript: { component: FaJs, color: "#F7DF1E" },
  typescript: { component: SiTypescript, color: "#3178C6" },
  react: { component: FaReact, color: "#61DAFB" },
  nextjs: { component: SiNextdotjs, color: "#000000" },
  nodejs: { component: FaNodeJs, color: "#339933" },
  "tailwind css": { component: SiTailwindcss, color: "#06B6D4" },
  git: { component: FaGit, color: "#F05032" },
  github: { component: FaGithub, color: "#181717" },
  figma: { component: SiFigma, color: "#F24E1E" },
  wordpress: { component: FaWordpress, color: "#21759B" },
  mongodb: { component: SiMongodb, color: "#47A248" },
  aframe: { component: SiAframe, color: "#EF2D5E" },
};

const SkillsSection = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Technical <span className="text-primary">Skills</span>
        </h2>
        <p className="text-muted-foreground mt-2">
          The technologies and tools I work with.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <TooltipProvider>
          {portfolioData.skills.map((skill) => {
            const icon = iconMap[skill.name.toLowerCase()];
            if (!icon) return null;

            const IconComponent = icon.component;
            return (
              <Tooltip key={skill.id}>
                <TooltipTrigger asChild>
                  <Badge
                    variant="secondary"
                    className="text-2xl p-3 transition-all hover:bg-primary/20"
                  >
                    <IconComponent color={icon.color} />
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{skill.name}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </TooltipProvider>
      </div>
    </div>
  );
};

export default SkillsSection;
