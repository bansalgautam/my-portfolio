"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Contact = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="w-full h-full flex flex-col justify-evenly relative">
      <div className="flex flex-col leading-tight text-[45px] md:text-[80px] text-center md:text-start">
        <h1>Available for work,</h1>
        <h1>Let&#39;s connect.</h1>
        <Link
          href="https://calendly.com/bansalgautam"
          className="text-2xl font-bold bg-[#dc4949] w-max px-4 py-2 rounded-lg mx-auto md:mx-0 text-white mt-4"
          target="_blank"
        >
          Book a call
        </Link>
      </div>
      <div>
        <h2 className="text-xl text-center md:text-start">
          Find me elsewhere on the web,
        </h2>
        <div className="flex gap-4 text-2xl underline flex-wrap justify-center md:justify-start">
          <Link href="https://github.com/bansalgautam" target="_blank">
            Github
          </Link>
          <Link href="https://leetcode.com/bansalgautam18" target="_blank">
            Leetcode
          </Link>
          <Link
            href="https://www.linkedin.com/in/gautam-bansal-2811a2247/"
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link href="https://twitter.com/gautam_18_" target="_blank">
            Twitter
          </Link>
          <Link
            href="https://www.instagram.com/gautam.bansal18/"
            target="_blank"
          >
            Instagram
          </Link>
        </div>
      </div>
      <div className="text-lg text-center md:text-start">
        &copy; gautambansal.me
      </div>
      <motion.div
        className="w-[60px] h-[60px] bg-[rgba(255,255,255,0.5)] rounded-full flex items-center justify-center text-4xl absolute bottom-4 right-0 cursor-pointer shadow-lg z-10"
        initial={{ y: -30 }}
        animate={{ y: -10 }}
        transition={{
          type: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        onClick={onClick}
        title="Scroll to top"
      >
        ↑
      </motion.div>
    </div>
  );
};

export default Contact;
