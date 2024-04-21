import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Acadevmia",
    description:
      "I led a team of four in developing a Stack Overflow-inspired Q&A social network. This was the final project for the coding bootcamp",
    tags: ["JavaScript", "SpringBoot", "MongoDB"],
    imageUrl: corpcommentImg,
  },
  {
    title: "NotesApp",
    description:
      "A full-featured note-taking application. Users can filter notes by title, category, and completion status.",
    tags: ["React", "SpringBoot", "MySQL", "Docker"],
    imageUrl: rmtdevImg,
  },
] as const;

export const skillsData = [
  "Java",
  "SpringBoot",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git & GitHub",
  "HTML",
  "CSS",
  "MySQL",
  "MongoDB",
  "Postman",
  "Python",
] as const;
