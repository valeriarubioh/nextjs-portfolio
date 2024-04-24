import React from "react";

export default function Footer() {
  return (
    <footer className="my-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-sm">
        🌸 Made with 🧡 by{" "}
        <a
          href="https://github.com/valeriarubioh"
          rel="my-github noreferrer"
          target={"_blank"}
        >
          Valeria Rubio
        </a>{" "}
        🌸
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
