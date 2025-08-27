import { portfolioData } from "@/lib/info";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import * as TechIcons from "@/components/icons/tech-icons";

const iconMap: { [key: string]: React.ReactNode } = {
  html: <TechIcons.Html5 />,
  javascript: <TechIcons.Javascript />,
  typescript: <TechIcons.Typescript />,
  react: <TechIcons.React />,
  nextjs: <TechIcons.Nextjs />,
  nodejs: <TechIcons.Nodejs />,
  tailwindcss: <TechIcons.Tailwindcss />,
  git: <TechIcons.Git />,
  github: <TechIcons.Github />,
  figma: <TechIcons.Figma />,
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
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        <TooltipProvider>
          {portfolioData.skills.map((skill) => (
            <Tooltip key={skill.name}>
              <TooltipTrigger asChild>
                <div
                  className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-secondary rounded-full border-2 border-transparent transition-all duration-300
                             cursor-pointer hover:border-accent hover:text-accent hover:glow-shadow-sm text-foreground/80 hover:scale-110"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10">{iconMap[skill.id]}</div>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{skill.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </div>
  );
};

export default SkillsSection;
