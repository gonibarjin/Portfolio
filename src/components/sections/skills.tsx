import { portfolioData } from "@/lib/info";
import { Badge } from "@/components/ui/badge";

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
        {portfolioData.skills.map((skill) => (
          <Badge key={skill.id} variant="secondary" className="text-lg px-4 py-2 transition-all hover:bg-primary hover:text-primary-foreground cursor-default">
            {skill.name}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
