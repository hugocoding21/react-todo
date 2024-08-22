import React from "react";

const InputText = ({ label = "Task name:", value, onChange }) => {
  return (
    <div className='flex flex-col w-4/12'>
      <label className='block mb-2 text-sm font-medium text-gray-900'>{label}</label>
      <input
        type='text'
        value={value}
        onChange={onChange}
        className='block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500'
      />
    </div>
  );
};

export default InputText;
