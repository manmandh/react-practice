import React from 'react';

interface SelectFieldProps {
  label: string;
  options: string[];
}

const SelectField: React.FC<SelectFieldProps> = ({ label, options }) => {
  return (
    <div>
      <label className="block text-sm font-primary-500 text-gray-700">{label}</label>
      <select className="mt-1 font-primary-500 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black">
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
