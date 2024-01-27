"use client";

import Marquee from "@/components/Marquee/Marquee";
import Navbar from "@/components/Navbar/Navbar";
import Contact from "@/sections/Contact";
import Landing from "@/sections/Landing";
import { RefObject, useRef } from "react";

export default function Home() {
  const landingRef: RefObject<HTMLDivElement> = useRef(null);
  const worksRef: RefObject<HTMLDivElement> = useRef(null);
  const contactRef: RefObject<HTMLDivElement> = useRef(null);

  const scrollToLanding = () => {
    landingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWorks = () => {
    worksRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        landing={scrollToLanding}
        work={scrollToWorks}
        contact={scrollToContact}
      />
      <div className="h-[50px] flex items-center justify-center fixed top-0 w-full md:hidden z-[10]">
        <div
          onClick={scrollToLanding}
          className="cursor-pointer bg-[rgba(255,255,255,0.5)] backdrop-blur-md rounded-full w-[40px] h-[40px] flex items-center justify-center shadow-lg z-10 mx-auto"
        >
          GB
        </div>
      </div>
      <div className="h-[50px] flex items-center justify-center fixed bottom-0 md:top-0 w-full md:hidden md:w-max z-10">
        <div className="bg-[rgba(255,255,255,0.5)] text-black py-2 px-8 flex gap-6 rounded-2xl backdrop-blur-md shadow-2xl">
          <div className="cursor-pointer">About</div>
          <div onClick={scrollToWorks} className="cursor-pointer">
            Works
          </div>
          <div onClick={scrollToContact} className="cursor-pointer">
            Contact
          </div>
        </div>
      </div>
      <section
        className="h-[100vh] w-full snap-center py-[50px] md:pb-0 md:pt-[70px] relative"
        ref={landingRef}
      >
        <div className="max-w-[1366px] h-full mx-auto px-4">
          <Landing contact={scrollToContact} />
        </div>
        <Marquee />
      </section>
      <section
        className="h-[100vh] w-full snap-center py-[50px] md:pb-0 md:pt-[70px] bg-black text-white"
        ref={worksRef}
      >
        <div className="max-w-[1366px] h-full mx-auto px-4 flex items-center justify-center text-center">
          Work in Progress...
        </div>
      </section>
      <section
        className="h-[100vh] w-full snap-center py-[50px] md:pb-0 md:pt-[70px]"
        ref={contactRef}
      >
        <div className="max-w-[1366px] h-full mx-auto px-4">
          <Contact onClick={scrollToLanding} />
        </div>
      </section>
    </>
  );
}
