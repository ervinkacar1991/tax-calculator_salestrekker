import React from "react";

const CustomInput = ({ value, onChange, placeholder, type, id }) => {
  return (
    <div className="w-full ">
      <input
        type={type}
        className="form-control w-full px-4 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 hover:border hover:border-solid hover:border-gray-500 rounded-full transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;
