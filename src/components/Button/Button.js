import React from "react";
import CheckIcon from "../Icons/CheckIcon";

export default function Button({ text, active, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className={`w-full ${
          active
            ? "bg-primary hover:bg-secondary hover:transition"
            : "bg-neutral-300 border-slate-400 text-neutral-500 hover:bg-neutral-200 hover:transition"
        }   text-white font-semibold py-2.5 rounded-full flex items-center justify-center`}
      >
        {active && <CheckIcon />}
        <span className="font-regular text-l text-center">{text}</span>
      </button>
    </>
  );
}
