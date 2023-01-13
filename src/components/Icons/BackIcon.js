import React from "react";

const BackIcon = () => {
  return (
    <svg
      className="h-6 w-6 text-primary hover:text-iconBg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {" "}
      <path stroke="none" d="M0 0h24v24H0z" />
      <polyline points="15 6 9 12 15 18" />
    </svg>
  );
};

export default BackIcon;
