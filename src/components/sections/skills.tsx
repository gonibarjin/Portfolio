import { portfolioData } from "@/lib/info";

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
          <div
            key={skill}
            className="px-4 py-2 bg-secondary rounded-full border border-transparent transition-all duration-300 cursor-default
                       hover:border-accent hover:text-accent hover:glow-shadow-sm"
          >
            <span className="font-medium">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
