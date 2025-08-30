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
    bio: "I am a frontend developer passionate about creating clean, user-friendly, and modern web applications. With a strong foundation in React, Next.js, and TypeScript, I enjoy turning complex ideas into intuitive digital experiences. I am continuously learning and refining my skills to stay on top of the ever-evolving web development landscape.",
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
      title: "General Quiz",
      description: "A simple quiz application built with React, allowing users to answer questions interactively.",
      imageUrl: "/quiz.png",
      technologies: ["React", "HTML", "CSS"],
      githubUrl: "https://github.com/gonibarjin/React-Quiz",
      liveUrl: "https://stunning-cendol-c96cad.netlify.app/",
    },

    {
      title: "Movie Magic",
      description: "A React-based movie search app that lets users explore films, save them to a personal list, and add ratings.",
      imageUrl: "/movie.png",
      technologies: ["React", "HTML", "CSS"],
      githubUrl: "https://github.com/TehFat/Group-9",
      liveUrl: "https://whimsical-bunny-38ec3b.netlify.app",
    },

    {
      title: "Circulair",
      description: " A React based production-ready landing page based on Figma mockups for a client called Circulaire",
      imageUrl: "/circ.png",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      githubUrl: "https://github.com/antxhan/circulaire",
      liveUrl: "https://circulaire.vercel.app/",
    }
  ],
  contact: {
    email: "Mehranstockholm@gmail.com",
    socials: [
      { name: "GitHub", url: "https://github.com/gonibarjin", icon: "github" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/mehran-ahmadnia-50638535b/", icon: "linkedin" },
    ],
  },
  resumeUrl: "/resume.pdf", // Place your resume file in your public/ folder to make this work
};

export type PortfolioData = typeof portfolioData;