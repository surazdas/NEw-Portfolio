import React from "react";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/suraz.das.127",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 fill-current"
      >
        <path d="M15.1 8.5V6.9c0-.6.4-.9 1-.9H18V3.5h-2.3C13.2 3.5 12 4.8 12 7v1.5H9.8v2.7H12V20.5h3v-9.3h2.5l.4-2.7H15.1z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/surazdas123/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 fill-current"
      >
        <path d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm8 1.8H8A3.2 3.2 0 0 0 4.8 8v8A3.2 3.2 0 0 0 8 19.2h8a3.2 3.2 0 0 0 3.2-3.2V8A3.2 3.2 0 0 0 16 4.8zM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8zM17.35 6.4a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/surazdas",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 fill-current"
      >
        <path d="M12 2.2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.4 9.4 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A10 10 0 0 0 12 2.2z" />
      </svg>
    ),
  },
  {
    label: "9801789356",
    href: "tel:9801789356",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 fill-current"
      >
        <path d="M6.6 3.5h2.2c.4 0 .8.3.9.7l1 3.1c.1.4 0 .8-.3 1.1L8.8 10c1.2 2.4 3.1 4.3 5.5 5.5l1.6-1.6c.3-.3.7-.4 1.1-.3l3.1 1c.4.1.7.5.7.9v2.2c0 .5-.4.9-.9.9C10.8 18.6 5.4 13.2 5.4 4.4c0-.5.4-.9.9-.9z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:surazdas9801@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 fill-current"
      >
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.2-8 5.3-8-5.3V6l8 5.3L20 6v2.2z" />
      </svg>
    ),
  },
];

const SocailMedia = () => {
  return (
    <div className="flex min-h-20 w-full items-center justify-end bg-black py-3">
      <div className="flex items-center gap-6">
        {socialLinks.map((link) => {
          const content = (
            <>
              <span className="flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 group-hover:bg-white group-hover:text-black">
                {link.icon}
              </span>
              <span className="text-xs font-medium leading-none whitespace-nowrap">
                {link.label}
              </span>
            </>
          );
          const className =
            "group flex flex-col items-center gap-1.5 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

          if (!link.href) {
            return (
              <span key={link.label} className={className}>
                {content}
              </span>
            );
          }

          return (
            <a
              key={link.label}
              href={link.href}
              target={
                link.href.startsWith("mailto:") || link.href.startsWith("tel:")
                  ? undefined
                  : "_blank"
              }
              rel={
                link.href.startsWith("mailto:") || link.href.startsWith("tel:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className={className}
            >
              {content}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocailMedia;
