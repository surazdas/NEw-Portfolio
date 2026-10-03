import { Minus, MonitorStop } from "lucide-react";
import React from "react";

const horizontalLineCount = 6;
const verticalLineCount = 20;

const HomeButtonDesign = () => {
  return (
    <div className="flex h-120 w-full overflow-hidden bg-black">
      <div className="relative flex h-full min-w-0 flex-1 overflow-hidden rounded-r-full bg-orange-50">
        <div className="absolute inset-0 flex flex-col justify-between py-12">
          {Array.from({ length: horizontalLineCount }).map((_, index) => (
            <div key={`h-${index}`} className="h-0.5 w-full bg-gray-300"></div>
          ))}
        </div>
        <div className="absolute inset-0 flex justify-between px-20">
          {Array.from({ length: verticalLineCount }).map((_, index) => (
            <div key={`v-${index}`} className="w-0.5 h-full bg-gray-300"></div>
          ))}
        </div>

        <div className="absolute w-100 h-50 flex items-start justify-end">
          {/* <img
            src="Pic/images.jpeg"
            alt=""
            className="w-50 h-full rounded-full"
          /> */}
          <div className="w-45 h-45 rounded-full bg-[#70CDC6] flex flex-col items-center pt-5 rotate-6">
            <div className="w-12 h-10 flex -space-x-2">
              <div className="w-7 h-7 rounded-full bg-black "></div>
              <div className="w-7 h-7 rounded-full bg-black "></div>
            </div>
            <h1 className="font-oswald text-[30px] text-black text-center font-bold px-2 leading-[0.98] tracking-tight">
              WEB <br /> DEVELOPER
            </h1>
            <p className="text-center font-sm text-[15px] leading-tight pt-2">
              YOUR → BUSINESS
              <br />& USER NEEDS
            </p>
          </div>
        </div>
        <div className=" w-100 h-full flex flex-col justify-center items-center pt-30 rotate-12">
          <div className="relative w-60 h-10 bg-yellow-300 flex items-center justify-around rounded-r-sm rounded-t-sm">
            <span className="font-bold text-[30px] font-oswald text-black flex items-center justify-center">
              E<div className="w-5 h-1.5 bg-black mx-1"></div>
              COMM.
            </span>
            <div className="w-20 h-5 bg-black rounded-4xl flex items-center px-2">
              <span className="text-yellow-300 font-oswald text-sm font-bold ">
                WWW.
              </span>
            </div>
          </div>
          <div className="relative w-45 h-8 bg-yellow-300 rounded-b-sm mr-15 flex items-center justify-center">
            <span className="font-oswald text-[26px] font-bold text-black">
              EXPERIENCES
            </span>
          </div>
        </div>

        <div className="group relative z-10 ml-auto flex h-full items-center pr-24">
          <div className="relative h-80 w-96">
            <div className="absolute inset-0 rotate-12 rounded-2xl bg-amber-200 transition-transform duration-300 group-hover:rotate-6"></div>
            <div className="relative flex h-full w-full flex-col justify-between rounded-2xl bg-black p-7 text-white">
              <div className="flex items-center justify-between">
                <span className="font-oswald text-sm font-bold tracking-[0.28em] text-[#70CDC6]">
                  AVAILABLE
                </span>
                <span className="font-oswald text-sm font-bold text-amber-200">
                  01
                </span>
              </div>
              <h2 className="font-oswald text-5xl font-bold leading-[0.9]">
                I SHAPE
                <br />
                INTERFACES
              </h2>
              <p className="max-w-xs text-sm font-medium leading-relaxed text-gray-300">
                Clean layouts, sharp type, and sites that feel as considered as
                they look.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React.js", "Next.js", "Tailwind"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-amber-200 px-3 py-1 text-xs font-bold text-black"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <aside className="relative flex w-64 shrink-0 flex-col justify-between overflow-hidden bg-black px-8 py-10 text-white">
        <p className="pointer-events-none absolute -left-2 top-6 font-oswald text-[120px] font-bold leading-none text-white/10">
          SD
        </p>
        <p className="relative font-oswald text-xs font-bold tracking-[0.35em] text-[#70CDC6]">
          PORTFOLIO
        </p>
        <div className="relative">
          <p className="font-oswald text-6xl font-bold leading-none">26</p>
          <div className="mt-3 h-0.5 w-10 bg-amber-200"></div>
          <p className="mt-3 font-oswald text-sm font-bold tracking-[0.2em] text-amber-200">
            NEPAL
          </p>
        </div>
        <div className="relative flex flex-col gap-2 font-oswald text-xs font-bold tracking-[0.28em] text-gray-400">
          <span>DESIGN</span>
          <span>BUILD</span>
          <span>SHIP</span>
        </div>
      </aside>
    </div>
  );
};

export default HomeButtonDesign;
