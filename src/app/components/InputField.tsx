"use client";
import { useState } from "react";

interface InputFieldProps {
  icon?: React.ReactNode;
  placeholder: string;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  icon,
  placeholder,
  type = "text",
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className="relative flex items-center border-b transition-all duration-300 w-full px-2 py-3 mb-1 
      border-gray-200 focus-within:border-black"
    >
      {icon && <div className="text-gray-500">{icon}</div>}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-2 py-1 bg-transparent outline-none placeholder-gray-400"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default InputField;
