"use client";

import React, { useState } from "react";

const emailAddress = "surazdas9801@gmail.com";

const contacts = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/suraz.das.127",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M15.1 8.5V6.9c0-.6.4-.9 1-.9H18V3.5h-2.3C13.2 3.5 12 4.8 12 7v1.5H9.8v2.7H12V20.5h3v-9.3h2.5l.4-2.7H15.1z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/surazdas123/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm8 1.8H8A3.2 3.2 0 0 0 4.8 8v8A3.2 3.2 0 0 0 8 19.2h8a3.2 3.2 0 0 0 3.2-3.2V8A3.2 3.2 0 0 0 16 4.8zM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8zM17.35 6.4a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/surazdas",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M12 2.2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.4 9.4 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A10 10 0 0 0 12 2.2z" />
      </svg>
    ),
  },
  {
    label: "9801789356",
    href: "tel:9801789356",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M6.6 3.5h2.2c.4 0 .8.3.9.7l1 3.1c.1.4 0 .8-.3 1.1L8.8 10c1.2 2.4 3.1 4.3 5.5 5.5l1.6-1.6c.3-.3.7-.4 1.1-.3l3.1 1c.4.1.7.5.7.9v2.2c0 .5-.4.9-.9.9C10.8 18.6 5.4 13.2 5.4 4.4c0-.5.4-.9.9-.9z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: `mailto:${emailAddress}`,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.2-8 5.3-8-5.3V6l8 5.3L20 6v2.2z" />
      </svg>
    ),
  },
];

const fieldClass =
  "w-full rounded-xl border border-black/15 bg-amber-50 px-4 py-3 text-sm font-medium text-black outline-none focus:border-black";

const page = () => {
  const [status, setStatus] = useState("idle");

  const sendEmail = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const subject = String(data.get("subject") || "New message");
    const message = String(data.get("message") || "");

    setStatus("sending");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${emailAddress}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
            _subject: subject,
            _replyto: email,
            _template: "table",
            _captcha: "false",
          }),
        },
      );
      const result = await response.json();
      const resultMessage = String(result.message || "");

      if (resultMessage.toLowerCase().includes("activation")) {
        setStatus("confirm");
        return;
      }

      if (!response.ok || result.success !== "true") {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <div className="flex h-40 items-center px-30">
        <h1 className="font-oswald text-[50px] font-bold">GET IN TOUCH</h1>
      </div>

      <p className="max-w-3xl px-30 text-sm font-medium leading-relaxed text-gray-300">
        Have a website idea, a product to build, or a question about my work?
        Send a message and I will reply. You can also reach me directly on
        Facebook, Instagram, GitHub, or email.
      </p>

      <div className="grid grid-cols-2 items-start gap-10 px-30 py-12">
        <div className="flex flex-col gap-4">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={
                contact.href.startsWith("mailto:") ||
                contact.href.startsWith("tel:")
                  ? undefined
                  : "_blank"
              }
              rel={
                contact.href.startsWith("mailto:") ||
                contact.href.startsWith("tel:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="group flex w-fit items-center gap-4 rounded-2xl"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black transition-colors duration-200 group-hover:bg-amber-200">
                {contact.icon}
              </span>
              <span className="font-oswald text-2xl font-bold">
                {contact.label}
              </span>
            </a>
          ))}
        </div>

        <form
          onSubmit={sendEmail}
          className="flex flex-col gap-4 rounded-2xl bg-white p-8 text-black"
        >
          <label className="flex flex-col gap-2 text-sm font-bold">
            Name
            <input name="name" type="text" required className={fieldClass} />
          </label>
          <label className="flex flex-col gap-2 text-sm font-bold">
            Email
            <input name="email" type="email" required className={fieldClass} />
          </label>
          <label className="flex flex-col gap-2 text-sm font-bold">
            Subject
            <input name="subject" type="text" required className={fieldClass} />
          </label>
          <label className="flex flex-col gap-2 text-sm font-bold">
            Message
            <textarea
              name="message"
              required
              rows={5}
              className={fieldClass}
            />
          </label>
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-2 flex items-center justify-center gap-3 rounded-full bg-black px-6 py-3 font-oswald text-lg font-bold text-white transition-colors duration-200 hover:bg-amber-200 hover:text-black disabled:opacity-60"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5 fill-current"
            >
              <path d="M2.2 3.4 21.8 12 2.2 20.6l2.7-7.1L14 12 4.9 10.5 2.2 3.4z" />
            </svg>
            {status === "sending" ? "Sending..." : "Send email"}
          </button>
          {status === "confirm" && (
            <p className="text-sm font-medium text-amber-700">
              Open surazdas9801@gmail.com and click the Activate Form link from
              FormSubmit. After that, this button sends messages straight to
              you.
            </p>
          )}
          {status === "sent" && (
            <p className="text-sm font-medium text-green-700">
              Message sent to surazdas9801@gmail.com.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm font-medium text-red-600">
              The message could not be sent. Try again in a moment.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default page;
