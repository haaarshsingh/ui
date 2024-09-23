"use client";

import { RiCheckFill, RiLinksFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { FC, useEffect, useState } from "react";

export const Copy: FC<{ slug: string }> = ({ slug }) => {
  const [copy, setCopy] = useState(false);
  const [hover, setHover] = useState(false);

  const onClick = () => {
    navigator.clipboard.writeText(`https://ui.harshsingh.xyz/${slug}`);
    setCopy(true);
  };

  useEffect(() => {
    if (copy)
      setTimeout(() => {
        setCopy(false);
      }, 1000);
  }, [copy]);

  return (
    <div className="relative flex justify-center">
      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            className="absolute top-0 -mt-8 whitespace-nowrap rounded border border-neutral-200 bg-neutral-100 px-2 py-1 text-xs dark:border-neutral-800 dark:bg-neutral-900"
          >
            {copy ? "Copied" : "Copy URL"}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className="animate-intro flex h-[34px] w-[34px] cursor-copy items-center justify-center rounded-full bg-neutral-800 text-sm text-neutral-400 transition-colors [animation-delay:100ms] hover:bg-neutral-300/75 hover:bg-neutral-700 active:bg-neutral-300 active:bg-neutral-700/50"
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
        onClick={onClick}
      >
        <AnimatePresence>
          {copy ? (
            <motion.div
              key="check"
              initial={{ opacity: 0, scale: 0, position: "absolute" }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <RiCheckFill />
            </motion.div>
          ) : (
            <motion.div
              key="link"
              initial={{ opacity: 0, scale: 0, position: "absolute" }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <RiLinksFill />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};
