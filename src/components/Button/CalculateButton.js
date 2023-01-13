import React from "react";

const CalculateButton = ({ text, onClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`w-full group relative h-12  overflow-hidden rounded-xl bg-white text-lg shadow ${
        disabled ? "bg-white" : "bg-calcPrimary "
      }  text-white font-semibold py-2.5  flex items-center justify-center`}
    >
      <div class="absolute inset-0 w-3 bg-primary transition-all duration-[1000ms] ease-out group-hover:w-full"></div>

      <span className="relative text-primary group-hover:text-white">
        {text}
      </span>
      <svg
        className="h-6 w-6 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
};

export default CalculateButton;
