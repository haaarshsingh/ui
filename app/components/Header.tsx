"use client";

import { useTheme } from "next-themes";
import { LuMoon, LuNewspaper, LuRss, LuSun } from "react-icons/lu";

export default () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex items-center justify-between">
      <div className="w-1/2">
        <h1>Harsh&apos;s UI</h1>
        <p>Experimental design laboratory</p>
      </div>
      <div className="flex items-center gap-x-1.5">
        <a
          href="/rss"
          target="_blank"
          rel="noreferrer"
          className="rounded p-1.5 transition-colors hover:bg-neutral-100 active:bg-neutral-200 dark:hover:bg-neutral-700/50 dark:active:bg-neutral-700/70"
          title="RSS Feed"
          aria-label="RSS Feed"
        >
          <LuRss />
        </a>
        <a
          className="rounded p-1.5 transition-colors hover:bg-neutral-100 active:bg-neutral-200 dark:hover:bg-neutral-700/50 dark:active:bg-neutral-700/70"
          href="#newsletter"
          title="Newsletter"
          aria-label="Newsletter"
        >
          <LuNewspaper />
        </a>
        <button
          className="rounded p-1.5 transition-colors hover:bg-neutral-100 active:bg-neutral-200 dark:hover:bg-neutral-700/50 dark:active:bg-neutral-700/70"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          title="Toggle Theme"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? <LuMoon /> : <LuSun />}
        </button>
      </div>
    </header>
  );
};
