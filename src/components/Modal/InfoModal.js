import React, { useState } from "react";
import InfoIcon from "../Icons/InfoIcon";

const InfoModal = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        data-modal-target="defaultModal"
        data-modal-toggle="defaultModal"
        type="button"
        onClick={() => setShow(!show)}
      >
        <svg
          className="h-7 w-7 text-calcPrimary"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <line x1="12" y1="8" x2="12.01" y2="8" />{" "}
          <rect x="4" y="4" width="16" height="16" rx="2" />{" "}
          <polyline points="11 12 12 12 12 16 13 16" />
        </svg>
      </button>

      {show && (
        <div
          id="defaultModal"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full flex justify-center items-center"
          style={{ background: "rgba(194, 194, 194,0.4)" }}
          onClick={() => setShow(!show)}
        >
          <div className="relative w-full h-full max-w-2xl md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Income Tax Calculator
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="defaultModal"
                >
                  <InfoIcon />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <div className="p-6 space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  An income tax is a tax imposed on individuals or entities
                  (taxpayers) in respect of the income or profits earned by them
                  (commonly called taxable income). Income tax generally is
                  computed as the product of a tax rate times the taxable
                  income. Taxation rates may vary by type or characteristics of
                  the taxpayer and the type of income.
                </p>
              </div>

              <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  data-modal-hide="defaultModal"
                  type="button"
                  className="text-white bg-calcPrimary hover:bg-calcSecondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Got it!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InfoModal;
