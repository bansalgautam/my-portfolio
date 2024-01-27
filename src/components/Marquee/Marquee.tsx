"use client";

import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <motion.div
      className="marquee w-full bg-[#dc4949] flex overflow-hidden gap-4 h-[50px] items-center text-md absolute bottom-[50px] md:bottom-0"
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute w-[50px] md:w-[100px] h-full bg-gradient-to-r from-[rgb(232,232,232)] to-[#dc494900] left-0 z-10" />
      <div className="absolute w-[50px] md:w-[100px] h-full bg-gradient-to-l from-[rgb(232,232,232)] to-[#dc494900] right-0 z-10" />
      {[0, 1].map((item) => (
        <motion.ul
          className="scroll min-w-[100%] flex-none flex font-[600] justify-around text-white gap-4"
          key={item}
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <li>React.js</li>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>C / C++</li>
          <li>Express.js</li>
          <li>Solidity</li>
          <li>Framer-Motion</li>
          <li>Web3.js</li>
          <li>Tailwind CSS</li>
          <li>Redux</li>
        </motion.ul>
      ))}
    </motion.div>
  );
};

export default Marquee;
