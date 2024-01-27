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
