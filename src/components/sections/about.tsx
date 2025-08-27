import { portfolioData } from "@/lib/info";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 items-center">
      <div className="relative w-full max-w-sm mx-auto md:max-w-none h-80 md:h-96 rounded-lg overflow-hidden group">
        <Image
          src={portfolioData.about.imageUrl}
          alt={portfolioData.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          data-ai-hint="developer portrait"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
      </div>
      <div className="md:col-span-2 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          About <span className="text-primary">Me</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {portfolioData.about.bio}
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
