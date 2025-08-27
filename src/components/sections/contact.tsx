import { portfolioData } from "@/lib/info";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const iconMap: { [key: string]: React.ReactNode } = {
  github: <Github />,
  linkedin: <Linkedin />,
  twitter: <Twitter />,
  email: <Mail />,
};

const ContactSection = () => {
  return (
    <div className="text-center space-y-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
          I&apos;m currently open to new opportunities and collaborations. Feel free to reach out!
        </p>
      </div>
      <div className="flex justify-center gap-4 flex-wrap">
        {portfolioData.contact.socials.map((social) => (
          <Button
            key={social.name}
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/50"
            asChild
          >
            <Link href={social.url} target="_blank" aria-label={social.name}>
              {iconMap[social.name.toLowerCase()]}
            </Link>
          </Button>
        ))}
      </div>
      <a href={`mailto:${portfolioData.contact.email}`} className="inline-block text-lg text-primary hover:underline">
        {portfolioData.contact.email}
      </a>
    </div>
  );
};

export default ContactSection;
