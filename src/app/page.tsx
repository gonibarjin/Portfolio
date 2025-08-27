import Header from "@/components/layout/header";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import { portfolioData } from "@/lib/info";
import { Section } from "@/components/ui/section";

const sections = [
  { id: "about", component: <AboutSection /> },
  { id: "skills", component: <SkillsSection /> },
  { id: "projects", component: <ProjectsSection /> },
  { id: "contact", component: <ContactSection /> },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header navItems={portfolioData.navItems} />
      <main className="flex-1">
        <HeroSection />
        <div className="relative z-10 bg-background">
          {sections.map((section) => (
            <Section key={section.id} id={section.id}>
              {section.component}
            </Section>
          ))}
        </div>
      </main>
    </div>
  );
}
