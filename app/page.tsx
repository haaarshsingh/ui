import Main from "./components/Main";
import { LuNewspaper, LuRss, LuSun } from "react-icons/lu";
import Newsletter from "./components/Newsletter";

export default () => (
  <div className="mt-16">
    <header className="flex items-center justify-between">
      <div className="w-1/2">
        <h1>Harsh&apos;s UI</h1>
        <p>Experimental details and interaction design</p>
      </div>
      <div className="flex items-center gap-x-1.5">
        <a
          href="/rss"
          target="_blank"
          rel="noreferrer"
          className="rounded p-1.5 transition-colors hover:bg-neutral-700/50 active:bg-neutral-700/70"
        >
          <LuRss />
        </a>
        <a
          className="rounded p-1.5 transition-colors hover:bg-neutral-700/50 active:bg-neutral-700/70"
          href="#newsletter"
        >
          <LuNewspaper />
        </a>
        <button className="rounded p-1.5 transition-colors hover:bg-neutral-700/50 active:bg-neutral-700/70">
          <LuSun />
        </button>
      </div>
    </header>
    <Main />
    <Newsletter />
  </div>
);
