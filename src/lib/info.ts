export const portfolioData = {
  name: "Jane Doe",
  hero: {
    taglines: [
      "Full-Stack Developer",
      "Creative Problem-Solver",
      "TypeScript Enthusiast",
    ],
    subtitle: "I build beautiful and reliable web applications from front to back.",
  },
  navItems: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],
  about: {
    imageUrl: "https://picsum.photos/600/800",
    bio: "I am a passionate full-stack developer with a knack for creating dynamic and intuitive web applications. With a foundation in modern technologies like React, Next.js, and Node.js, I enjoy turning complex problems into elegant, user-friendly solutions. I am driven by a constant desire to learn and grow, always exploring new tools and techniques to enhance my craft.",
  },
  skills: [
    { id: "html", name: "HTML" },
    { id: "javascript", name: "JavaScript" },
    { id: "typescript", name: "TypeScript" },
    { id: "react", name: "React" },
    { id: "nextjs", name: "Next.js" },
    { id: "nodejs", name: "Node.js" },
    { id: "tailwindcss", name: "Tailwind CSS" },
    { id: "git", name: "Git" },
    { id: "github", name: "GitHub" },
    { id: "figma", name: "Figma" },
  ],
  projects: [
    {
      title: "Project Cybersync",
      description: "A real-time collaborative code editor with integrated chat and file sharing, built for remote development teams.",
      imageUrl: "https://picsum.photos/600/400?random=1",
      technologies: ["Next.js", "TypeScript", "WebSockets", "Prisma"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "NeonGrid Dashboard",
      description: "A data visualization dashboard for IoT sensor networks, featuring customizable widgets and real-time updates.",
      imageUrl: "https://picsum.photos/600/400?random=2",
      technologies: ["React", "D3.js", "Tailwind CSS", "Firebase"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "QuantumLeap API",
      description: "A high-performance GraphQL API for a fictional e-commerce platform, optimized for scalability and low latency.",
      imageUrl: "https://picsum.photos/600/400?random=3",
      technologies: ["Node.js", "GraphQL", "PostgreSQL", "Docker"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ],
  contact: {
    email: "contact@example.com",
    socials: [
      { name: "GitHub", url: "#", icon: "github" },
      { name: "LinkedIn", url: "#", icon: "linkedin" },
      { name: "Twitter", url: "#", icon: "twitter" },
    ],
  },
  resumeUrl: "/resume.pdf",
};

export type PortfolioData = typeof portfolioData;
