import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const HomeTopFont = () => {
  return (
    <div className="flex ">
      <div className="w-full h-100 bg-black flex flex-col px-30">
        <span className="font-oswald font-extrabold text-[166px]">
          FRONT-END DEVELOPER
        </span>
        <div className="w-full h-60 flex items-center gap-100">
          <div className="w-100 h-full ">
            <span className=" font-bold ">
              I'm a passionate Frontend Developer with a strong interest in
              creating modern, responsive, and user-friendly web applications. I
              enjoy turning ideas and designs into interactive digital
              experiences that are both visually appealing and easy to use.
            </span>
          </div>
          <div className="w-100 h-full ">
            <span className="font-bold">
              I’m a Frontend Developer with 1 year of experience, specializing
              in React.js to build modern, responsive, and user-friendly
              websites. I also leverage AI tools to enhance my workflow and turn
              creative ideas into functional, engaging web experiences.
            </span>
          </div>
          <Link
            href="/contact"
            className="flex w-40 h-20 font-oswald text-sm font-bold text-white underline underline-offset-8 transition-colors duration-200 hover:text-amber-200"
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
