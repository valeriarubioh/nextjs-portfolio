"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import profileImg from "@/public/profile.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/activesection-context";

export default function Intro() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Home");
    }
  }, [inView, setActiveSection, timeOfLastClick]);
  return (
    <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            src={profileImg}
            alt="Valeria portrait"
            priority={true}
            width={200}
            height={200}
            quality={100}
            className="object-cover rounded-full border-[0.35rem] border-white shadow-xl"
          />
        </motion.div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Valeria</span>, a dedicated{" "}
        <span className="font-bold">full-stack developer.</span> I enjoy
        learning new technologies and{" "}
        <span className="font-bold">building apps</span>. My focus now is{" "}
        <span className="italic">ReactJS and Java</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-5 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me <BsArrowRight className="group-hover:translate-x-1 transition "/>
        </Link>

        <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10" href="/CV-ValeriaRubio.pdf" download={true}>
          Download CV <HiDownload className="group-hover:translate-y-1 transition"/>
        </a>

        <a
          className="bg-white p-4 text-gray-700  flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10"
          href="https://www.linkedin.com/in/valeriarubio-developer/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700  flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10"
          href="https://github.com/valeriarubioh"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
