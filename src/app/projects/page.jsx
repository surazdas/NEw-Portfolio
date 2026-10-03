import React from "react";

const logoClass = "h-10 w-10";

const logos = {
  "F-Track": (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={logoClass}>
      <path
        d="M10 8h22M10 8v32M10 23h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M28 34l6-8 5 3 7-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "Tic-Tac-Toe Game": (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={logoClass}>
      <path
        d="M18 6v36M30 6v36M6 18h36M6 30h36"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M8 8l8 8M16 8l-8 8M34 34l8 8M42 34l-8 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle
        cx="24"
        cy="24"
        r="4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
    </svg>
  ),
  "Desi Topup Center": (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={logoClass}>
      <rect
        x="14"
        y="4"
        width="20"
        height="40"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M20 9h8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle
        cx="24"
        cy="26"
        r="7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M24 22.5v7M20.5 26h7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  "Village Hub": (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={logoClass}>
      <path d="M4 24 L16 12 L28 24 V42 H4 Z" fill="currentColor" />
      <path d="M22 20 L34 10 L46 20 V42 H22 Z" fill="currentColor" />
      <path d="M12 42 V32 H20 V42" fill="#fde68a" />
    </svg>
  ),
};

const stack = ["React.js", "Tailwind", "CSS", "Nest.js", "Next.js"];

const projects = [
  {
    title: "F-Track",
    features: [
      "Add and maintain daily income and expense records.",
      "See where money goes so your finances stay organized.",
    ],
    href: "https://admin.desitopup.store/login?next=%2F",
  },
  {
    title: "Tic-Tac-Toe Game",
    features: [
      "Two players take turns placing X and O on the board.",
      "Each move is checked until someone gets three in a row.",
    ],
  },
  {
    title: "Desi Topup Center",
    features: [
      "Pick a mobile number and complete a recharge in a few steps.",
      "Keep top-up orders together so repeat recharges stay quick.",
    ],
    href: "https://desitopup.store/",
  },
  {
    title: "Village Hub",
    features: [
      "Share village news and updates with the local community.",
      "Find local connections and announcements in one place.",
    ],
  },
];

const page = () => {
  return (
    <div>
      <div className="min-h-200 w-full bg-amber-50">
        <div className="flex h-40 w-full items-center bg-black px-30 max-lg:h-auto max-lg:px-4 max-lg:py-8">
          <span className="font-oswald text-[50px] font-bold max-lg:text-4xl">PROJECTS</span>
        </div>
        <div className="grid w-full grid-cols-2 justify-items-center gap-6 bg-black px-30 py-10 max-lg:grid-cols-1 max-lg:gap-8 max-lg:overflow-x-hidden max-lg:px-4 max-lg:py-6">
          {projects.map((project) => {
            const className =
              "relative z-10 flex h-80 w-120 flex-col justify-between rounded-2xl bg-black p-6 text-white max-lg:h-auto max-lg:min-h-64 max-lg:w-full";
            const content = (
              <>
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white text-black">
                    {logos[project.title]}
                  </div>
                  <h2 className="font-oswald text-3xl font-bold leading-none max-lg:text-2xl">
                    {project.title}
                  </h2>
                </div>
                <div className="pt-6 text-sm font-medium leading-relaxed">
                  {project.features.map((feature) => (
                    <p key={feature}>{feature}</p>
                  ))}
                </div>
                <p className="pt-4 text-xs font-bold text-white group-hover:text-amber-700">
                  {stack.join(", ")}
                </p>
              </>
            );

            const card = project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${className} group transition-colors duration-200 hover:bg-white hover:text-black`}
              >
                {content}
              </a>
            ) : (
              <article className={className}>{content}</article>
            );

            return (
              <div key={project.title} className="relative w-120 max-lg:w-full">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 w-120 rotate-12 rounded-2xl bg-white max-lg:w-full max-lg:rotate-3"
                />
                {card}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
