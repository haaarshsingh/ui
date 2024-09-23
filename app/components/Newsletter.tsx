"use client";

import { FormEvent, useRef, useState } from "react";
import { Spinner } from "./Modal";
import clsx from "clsx";
import { toast } from "sonner";

export default () => {
  const [loading, setLoading] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: ref.current?.value }),
      });

      if (!response.ok) toast.error("Failed to subscribe");
    } catch (error) {
      console.error(error);
      toast.error("Failed to subscribe");
    } finally {
      setLoading(false);
      if (ref.current) ref.current.value = "";
      toast.success("Subscribed");
    }
  };

  return (
    <section
      className="mb-12 flex flex-col justify-between gap-x-4 rounded-xl border border-neutral-200 bg-neutral-100/25 p-4 xs:flex-row xs:items-center dark:border-neutral-800 dark:bg-neutral-800/25"
      id="newsletter"
    >
      <div>
        <h2 className="font-medium">Newsletter</h2>
        <p className="mt-0.5">Be notified of new components.</p>
      </div>
      <form onSubmit={onSubmit} className="mt-4 flex items-center xs:mt-0">
        <input
          placeholder="Email address"
          type="email"
          className="h-10 rounded-md border border-neutral-200 bg-neutral-100 px-2 text-sm outline-none transition-colors focus:border-neutral-300 focus:bg-neutral-200/50 dark:border-neutral-700/50 dark:bg-neutral-800 dark:focus:border-neutral-700/75 dark:focus:bg-neutral-800/25"
          required
          ref={ref}
        />
        <button
          className={clsx(
            "ml-2 flex h-10 w-24 items-center justify-center rounded-lg border border-neutral-300 bg-neutral-200 text-sm font-medium transition-colors hover:bg-neutral-300/50 active:bg-neutral-300/75 dark:border-neutral-800 dark:bg-neutral-800/50",
            loading
              ? "cursor-not-allowed"
              : "hover:bg-neutral-800 active:bg-neutral-700/50",
          )}
          disabled={loading}
        >
          {loading ? <Spinner /> : "Subscribe"}
        </button>
      </form>
    </section>
  );
};
