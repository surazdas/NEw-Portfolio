import React from "react";
import SocailMedia from "../SocailMedia";

const Myself = () => {
  return (
    <div className="">
      <div className="h-screen w-full bg-black flex justify-center">
        <div className="relative h-200 w-200 bg-black flex justify-center items-center">
          <div className=" w-100 h-150 bg-white rotate-12 scale-120"></div>
          <div className="absolute w-100 h-150 bg-black ">
            <img
              src="Pic/Main.jpeg"
              alt=""
              className="w-full h-full flex items-center object-center scale-120"
            />
          </div>
        </div>
        <div className="h-200 w-200 bg-black flex items-center justify-center">
          <div className="w-full h-100 bg-black-50 flex flex-col items-center">
            <h1 className="text-[100px] text-white font-oswald font-bold ">
              I`M SURAJ DAS
            </h1>
            <div className="w-full flex items-center justify-center px-5">
              <span className="font-bold text-sm ">
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
