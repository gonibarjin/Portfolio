export const portfolioData = {
  name: "Mehran Ahmadnia",
  hero: {
    taglines: [
      "Frontend Developer",
      "Problem Solver",
      "Clean & Modern UI Builder",
    ],
    subtitle:
      "I craft responsive, accessible, and performant web applications with a focus on modern frontend technologies.",
  },
  navItems: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],
  about: {
    imageUrl: "/mere.jpeg",
    bio: "Frontend development quickly became the place where everything clicked for me. What excites me most is the mix of creativity and logic, the satisfaction of seeing something take shape as I build it, and the joy of creating experiences that others can actually use. I’m curious by nature and enjoy experimenting, always looking for new ways to learn and grow. For me, frontend is not just about code, but about putting care and passion into details that make a difference",
  },
  skills: [
    { id: "html", name: "HTML" },
    { id: "css", name: "CSS" },
    { id: "javascript", name: "JavaScript" },
    { id: "typescript", name: "TypeScript" },
    { id: "react", name: "React" },
    { id: "nextjs", name: "Next.js" },
    { id: "tailwindcss", name: "Tailwind CSS" },
    { id: "nodejs", name: "NodeJS" },
    { id: "mongodb", name: "MongoDB" },
    { id: "wordpress", name: "WordPress" },
    { id: "figma", name: "Figma" },
    { id: "aframe", name: "A-Frame" },
    { id: "git", name: "Git" },
    { id: "github", name: "GitHub" },
  ],
  projects: [
    {
      title: "Circulair",
      description:
        " A React based production-ready landing page based on Figma mockups for a client called Circulaire",
      imageUrl: "/circ.png",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      githubUrl: "https://github.com/antxhan/circulaire",
      liveUrl: "https://circulaire.vercel.app/",
    },
    {
      title: "General Quiz",
      description:
        "A simple quiz application built with React, allowing users to answer questions interactively.",
      imageUrl: "/quiz.png",
      technologies: ["React", "HTML", "CSS"],
      githubUrl: "https://github.com/gonibarjin/React-Quiz",
      liveUrl: "https://stunning-cendol-c96cad.netlify.app/",
    },

    {
      title: "Movie Magic",
      description:
        "A React-based movie search app that lets users explore films, save them to a personal list, and add ratings.",
      imageUrl: "/movie.png",
      technologies: ["React", "HTML", "CSS"],
      githubUrl: "https://github.com/TehFat/Group-9",
      liveUrl: "https://whimsical-bunny-38ec3b.netlify.app",
    },
  ],
  contact: {
    email: "Mehranstockholm@gmail.com",
    socials: [
      { name: "GitHub", url: "https://github.com/gonibarjin", icon: "github" },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mehran-ahmadnia-50638535b/",
        icon: "linkedin",
      },
    ],
  },
  resumeUrl: "/resume.pdf", // Place your resume file in your public/ folder to make this work
};

export type PortfolioData = typeof portfolioData;
