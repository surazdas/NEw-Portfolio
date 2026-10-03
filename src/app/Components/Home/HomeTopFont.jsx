import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const HomeTopFont = () => {
  return (
    <div className="flex">
      <div className="flex h-100 w-full flex-col bg-black px-30 max-lg:h-auto max-lg:px-4 max-lg:pt-6 max-lg:pb-8">
        <span className="font-oswald text-[166px] font-extrabold max-lg:text-[clamp(2.5rem,11vw,4.25rem)] max-lg:leading-[0.88]">
          FRONT-END DEVELOPER
        </span>
        <div className="flex h-60 w-full items-center gap-100 max-lg:h-auto max-lg:flex-col max-lg:items-start max-lg:gap-6 max-lg:pt-6">
          <div className="h-full w-100 max-lg:h-auto max-lg:w-full">
            <span className="font-bold max-lg:text-sm max-lg:leading-relaxed">
              I'm a passionate Frontend Developer with a strong interest in
              creating modern, responsive, and user-friendly web applications. I
              enjoy turning ideas and designs into interactive digital
              experiences that are both visually appealing and easy to use.
            </span>
          </div>
          <div className="h-full w-100 max-lg:h-auto max-lg:w-full">
            <span className="font-bold max-lg:text-sm max-lg:leading-relaxed">
              I’m a Frontend Developer with 1 year of experience, specializing
              in React.js to build modern, responsive, and user-friendly
              websites. I also leverage AI tools to enhance my workflow and turn
              creative ideas into functional, engaging web experiences.
            </span>
          </div>
          <Link
            href="/contact"
            className="flex h-20 w-40 font-oswald text-sm font-bold text-white underline underline-offset-8 transition-colors duration-200 hover:text-amber-200 max-lg:h-auto max-lg:w-auto max-lg:items-center max-lg:gap-2"
          >
            GET IN TOUCH
            <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeTopFont;
