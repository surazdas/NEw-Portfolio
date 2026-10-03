"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useRef } from "react";

const Stairs = ({ children }) => {
  const pathname = usePathname();
  const stairParentsRef = useRef(null);
  const pageRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.set(stairParentsRef.current, { display: "block" });
      tl.from(".stair", {
        height: 0,
        stagger: {
          amount: -0.25,
        },
      });
      tl.to(".stair", {
        y: "100%",
        stagger: {
          amount: -0.25,
        },
      });
      tl.set(stairParentsRef.current, { display: "none" });
      tl.set(".stair", { y: "0%" });
      gsap.from(pageRef.current, {
        opacity: 0,
        duration: 0.4,
      });
    },
    { dependencies: [pathname], scope: stairParentsRef },
  );

  return (
    <div>
      <div
        ref={stairParentsRef}
        className="fixed top-0 z-50 hidden h-screen w-full overflow-hidden"
      >
        <div className="flex h-full w-full">
          <div className="stair h-full w-1/5 bg-white"></div>
          <div className="stair h-full w-1/5 bg-white"></div>
          <div className="stair h-full w-1/5 bg-white"></div>
          <div className="stair h-full w-1/5 bg-white"></div>
          <div className="stair h-full w-1/5 bg-white"></div>
        </div>
      </div>
      <div ref={pageRef}>{children}</div>
    </div>
  );
};

export default Stairs;
