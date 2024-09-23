"use client";

import { useState } from "react";
import Modal from "./Modal";

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <footer className="flex justify-center border-t border-t-neutral-800 py-4">
      <div className="flex w-content justify-between">
        <span className="text-sm">
          Made by <a href="https://harshsingh.xyz">Harsh</a>
        </span>
        <button className="flex-nowrap text-sm" onClick={() => setOpen(true)}>
          Submit Idea
        </button>
      </div>
      <Modal open={open} setOpen={setOpen} />
    </footer>
  );
};
