import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
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

export const experiencesData = [
  {
    title: "A role title",
    location: "Cali, Valle",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra, nunc eget sodales porttitor, nunc velit pharetra nisi, varius tincidunt augue tortor pretium metus. Integer.",
    icon: React.createElement(LuGraduationCap),
    date: "A year",
  },
  {
    title: "A role title",
    location: "City, State",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra, nunc eget sodales porttitor, nunc velit pharetra nisi, varius tincidunt augue tortor pretium metus. Integer.",
    icon: React.createElement(CgWorkAlt),
    date: "A year",
  },
  {
    title: "A role title",
    location: "City, State",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra, nunc eget sodales porttitor, nunc velit pharetra nisi, varius tincidunt augue tortor pretium metus. Integer.",
    icon: React.createElement(FaReact),
    date: "A year",
  },
] as const;
