import React from 'react';

interface InputFieldProps {
  label: string;
  type?: 'text' | 'email' | 'textarea';
  placeholder: string;
  rows?: number;
}

const InputField: React.FC<InputFieldProps> = ({ label, type = 'text', placeholder, rows }) => {
  return (
    <div>
      <label className="block text-sm font-primary-500 text-gray-700">{label}</label>
      {type === 'textarea' ? (
        <textarea
          placeholder={placeholder}
          rows={rows}
          className="mt-1 p-3 font-primary-500 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="mt-1 p-3 font-primary-500 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
        />
      )}
    </div>
  );
};

export default InputField;
