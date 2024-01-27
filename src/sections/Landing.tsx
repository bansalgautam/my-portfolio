"use client";

import Typewriter from "@/components/Typewriter/Typewriter";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Landing = ({ contact }: { contact: () => void }) => {
  return (
    <motion.div
      className="h-[calc(100%-50px)] w-full flex flex-col md:flex-row items-center"
      initial={{ opacity: 0, mixBlendMode: "darken", y: 400 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col justify-evenly  gap-4 flex-1 text-center md:text-start">
        <div className="text-[50px] lg:text-[70px] font-[600] leading-tight">
          I'm Gautam Bansal
        </div>
        <div className="text-2xl lg:text-3xl font-[500] pb-4">
          I am{" "}
          <Typewriter
            text={["React Developer", "Blockchain Enthusiast", "Freelancer"]}
            speed={200}
            delay={500}
          />
        </div>
        <div className="flex justify-center items-center md:justify-start gap-4">
          <Link
            href="https://drive.google.com/file/d/1QGAvATNXXXnzAL6HboYIcP_KLGvjrw-K/view?usp=sharing"
            target="_blank"
            className="bg-[#dc4949] px-4 py-2 rounded-lg text-lg text-white shadow-sm md:shadow-xl text-nowrap"
          >
            Resume
          </Link>
          <div
            onClick={contact}
            className="bg-[#dc4949] cursor-pointer px-4 py-2 rounded-lg text-lg text-white shadow-sm md:shadow-xl text-nowrap"
          >
            Contact me
          </div>
        </div>
      </div>
      <div className="relative w-full h-full flex-1">
        <Image
          src="/avatar.jpg"
          alt="avatar"
          fill
          className="object-contain mix-blend-darken"
        />
      </div>
    </motion.div>
  );
};

export default Landing;
