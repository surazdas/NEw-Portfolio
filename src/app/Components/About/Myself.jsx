import React from "react";
import SocailMedia from "../SocailMedia";

const Myself = () => {
  return (
    <div className="">
      <div className="flex h-screen w-full justify-center bg-black max-lg:h-auto max-lg:flex-col max-lg:items-center">
        <div className="relative flex h-200 w-200 items-center justify-center bg-black max-lg:h-[420px] max-lg:w-full">
          <div className="h-150 w-100 rotate-12 scale-120 bg-white max-lg:h-72 max-lg:w-52 max-lg:rotate-6 max-lg:scale-100"></div>
          <div className="absolute h-150 w-100 bg-black max-lg:h-72 max-lg:w-52">
            <img
              src="Pic/Main.jpeg"
              alt=""
              className="flex h-full w-full scale-120 items-center object-center max-lg:scale-100 max-lg:object-cover"
            />
          </div>
        </div>
        <div className="flex h-200 w-200 items-center justify-center bg-black max-lg:h-auto max-lg:w-full max-lg:px-4 max-lg:pb-10">
          <div className="flex h-100 w-full flex-col items-center bg-black-50 max-lg:h-auto">
            <h1 className="font-oswald text-[100px] font-bold text-white max-lg:text-center max-lg:text-[clamp(2.25rem,10vw,3.5rem)] max-lg:leading-[0.9]">
              I`M SURAJ DAS
            </h1>
            <div className="flex w-full items-center justify-center px-5 max-lg:px-0 max-lg:pt-4">
              <span className="text-sm font-bold">
                A passionate Front-End Developer from Nepal with around 1 year
                of hands-on experience in building modern, responsive, and
                user-friendly web applications. I completed my +2 in Management
                with Computer Science and have developed a variety of projects,
                including F-Track, Tic-Tac-Toe Game, Desi Topup Center, and
                more. I enjoy turning creative ideas into clean, interactive
                digital experiences and continuously exploring new technologies
                to improve my skills. My goal is to build meaningful,
                high-quality web experiences while growing into a skilled and
                innovative developer.
              </span>
            </div>
            <SocailMedia />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myself;
