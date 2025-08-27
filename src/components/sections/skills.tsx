import { portfolioData } from "@/lib/info";
import { Badge } from "@/components/ui/badge";
import {
  GitIcon,
  GithubIcon,
  HtmlIcon,
  JavascriptIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  TailwindcssIcon,
  TypescriptIcon,
} from "@/components/icons/tech-icons";
import React from "react";

const iconMap: { [key: string]: React.FC } = {
  html: HtmlIcon,
  javascript: JavascriptIcon,
  typescript: TypescriptIcon,
  react: ReactIcon,
  nextjs: NextjsIcon,
  nodejs: NodejsIcon,
  "tailwind css": TailwindcssIcon,
  git: GitIcon,
  github: GithubIcon,
};

const SkillsSection = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Technical <span className="text-primary">Skills</span>
        </h2>
        <p className="text-muted-foreground mt-2">The technologies and tools I work with.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {portfolioData.skills.map((skill) => {
          const IconComponent = iconMap[skill.name.toLowerCase()];
          return (
            <Badge key={skill.id} variant="secondary" className="text-lg px-4 py-2 transition-all hover:bg-primary hover:text-primary-foreground cursor-default flex items-center gap-2">
              {IconComponent && <IconComponent />}
              <span>{skill.name}</span>
            </Badge>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsSection;
