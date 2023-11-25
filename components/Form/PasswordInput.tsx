import React, { useState } from 'react';
import {AiOutlineEyeInvisible,AiOutlineEye} from 'react-icons/ai'

interface PasswordInputProps {
  topLabel?: boolean;
  label: string;
  containerClassWithIcon: string;
  children: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  type: string;
  placeholder: string;
  inputStyle: string;
  isRequired?: boolean;
  error?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  topLabel,
  label,
  containerClassWithIcon,
  children,
  value,
  onChange,
  onBlur,
  type,
  placeholder,
  inputStyle,
  isRequired,
  error,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <>
     
      <div className={`outline ${containerClassWithIcon} outline-secondary6 bg-white w-full h-[2.5rem] md:h-[3rem] rounded-lg flex items-center mt-2 outline-[0.8px]`}>
        <div className="ml-5 mr-0">
          <label htmlFor={label}>
            {children}
          </label>
        </div>
        <div className="flex-1 mr-5">
          <input
            autoComplete="off"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            id={label}
            type={isPasswordVisible ? 'text' : type} // Toggle visibility based on state
            name={label}
            aria-label={label}
            placeholder={placeholder}
            className={`${inputStyle} py-1.5 px-3 font-satoshiRegular text-sm text-black/75 bg-white outline-none w-full`}
          />
        </div>
        {type === 'password' && (
          <div className="mr-3">
            <button
              type="button"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
            >
              {isPasswordVisible ? (
                <AiOutlineEye size={24} color="#A580C0" />
              ) : (
               <AiOutlineEyeInvisible size={24} color="#A580C0" />
              )}
            </button>
          </div>
        )}
      </div>
      {isRequired && label && (
        <span className="pt-2 block text-xs text-red-400">{error}</span>
      )}
    </>
  );
};

export default PasswordInput;
