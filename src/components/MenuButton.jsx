"use client";
import { useState } from "react";

export default function MenuButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setOpen(!open)}
      >
        Open Menu
      </button>
      {open && (
        <div className="absolute right-4 w-[400px] h-[500px] bg-green-400"></div>
      )}
    </div>
  );
}
