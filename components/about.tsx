"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-28 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Mechatronics Engineering</span> and
        experimenting within other industries, I decided to pursue my passion
        for programming. I enrolled in a coding bootcamp and pursued additional
        courses to master the fundamentals of{" "}
        <span className="font-medium">full-stack web development</span>, and
        since then, I have not stopped learning.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span>{" "}
        constantly learning new things. My core stack includes{" "}
        <span className="font-medium">
          React, Java, SpringBoot and SQL Databases.{" "}
        </span>
        I am also familiar with Node.js, Next.js and MongoDB. I am always eager
        to learn new technologies. I am currently looking for{" "}
        <span className="font-medium">challenging projects</span> and a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        I am currently expanding my knowledge in areas such as{" "}
        <span className="font-medium">cloud and testing</span>.{" "}
        <span className="italic">When I'm not coding</span>, I enjoy walking,
        baking, and exercising.
      </p>
    </motion.section>
  );
}
