"use client";

import { useRef, useEffect, FormEvent } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { FiX } from "react-icons/fi";

export default (({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/ideas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ html: `<p>${inputRef.current?.value}</p>` }),
      });

      if (!response.ok) throw new Error("Failed to send email");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node))
        setOpen(false);
    };

    if (open) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, setOpen]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-black/75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="rounded-lg border border-neutral-800 bg-neutral-900"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            ref={modalRef}
          >
            <div className="flex items-center justify-between border-b border-b-neutral-700 px-4 py-3">
              <h2 className="text-sm font-medium">Submit Idea</h2>
              <button
                className="rounded-md p-1.5 text-neutral-500 transition-colors hover:bg-neutral-50/5 active:bg-neutral-50/10"
                onClick={() => setOpen(false)}
              >
                <FiX />
              </button>
            </div>
            <form className="flex flex-col px-4 py-3" onSubmit={onSubmit}>
              <textarea
                placeholder="Share your ideas..."
                className="h-32 w-[85vw] rounded-lg border border-neutral-800 bg-neutral-800/25 px-3 py-2 text-sm outline-none transition-colors focus:border-neutral-700 xs:w-96"
                required
                autoFocus
                ref={inputRef}
              />
              <button
                className={clsx(
                  "mt-3 flex h-10 w-full items-center justify-center rounded-lg border border-neutral-800 bg-neutral-800/25 text-sm font-medium transition-colors",
                  loading
                    ? "cursor-not-allowed"
                    : "hover:bg-neutral-800 active:bg-neutral-700/50",
                )}
              >
                {loading ? <Spinner /> : "Submit"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}) as FC<{ open: boolean; setOpen: Dispatch<SetStateAction<boolean>> }>;

export const Spinner = () => (
  <svg
    className="h-4 w-4 animate-spin text-neutral-50"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="3"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);
