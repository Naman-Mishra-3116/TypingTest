import React from "react";

const Input = ({ type, title, id, name }) => {
  return (
    <div className="flex flex-col gap-2 w-[350px] mt-4">
      <label htmlFor={id} className="text-left ml-2">
        {title}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        required
        className="bg-secondary-back p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1585e0] ring-2 ring-slate-700 mb-2"
      />
    </div>
  );
};

export default Input;
