"use client";

import { useState } from "react";
import Wrapper from "../components/Wrapper";
import { BsPlayFill, BsStopFill } from "react-icons/bs";
import clsx from "clsx";

export default () => {
  const [pause, setPause] = useState(false);

  return (
    <Wrapper title="Shimmer" tags={["tailwindcss"]} className="overflow-hidden">
      <div className="flex w-64 items-center justify-between rounded-full border border-neutral-300 px-4 py-2 dark:border-neutral-800">
        <p className={clsx(!pause && "shimmer")}>Analyzing query...</p>
        <button
          onClick={() => setPause((pause) => !pause)}
          className={clsx(
            "flex items-center rounded-full p-1.5 transition-colors",
            pause
              ? "bg-neutral-950/10 hover:bg-neutral-950/15 dark:bg-neutral-50/25 dark:hover:bg-neutral-50/30"
              : "bg-red-500/25 text-red-600 hover:bg-red-500/30",
          )}
        >
          {pause ? <BsPlayFill /> : <BsStopFill />}
        </button>
      </div>
    </Wrapper>
  );
};
