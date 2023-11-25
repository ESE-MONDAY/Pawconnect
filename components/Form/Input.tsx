import React from 'react';

interface InputProps {
  labelClassWithoutIcon?: string;
  containerClassWithoutIcon?: string;
  containerClassWithIcon?: string;
  withICon?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  name?: string;
  value?: string;
  label?: string;
  inputStyle?: string;
  type?: string;
  placeholder?: string;
  isRequired?: boolean;
  error?: string;
  topLabel?: boolean;
  children?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  labelClassWithoutIcon,
  containerClassWithoutIcon,
  containerClassWithIcon,
  children,
  withICon = false,
  onChange,
  onBlur,
  name,
  value,
  label,
  inputStyle,
  type = "text",
  placeholder = "Type here",
  isRequired = false,
  error,
  topLabel = false
}) => {
  return (
    <>
      {withICon &&
        <div>
        {topLabel &&<label htmlFor={label} className={`-mb-2 block text-[1.125rem]`}>
          {label}
        </label>}
        <div className={`outline ${containerClassWithIcon}  outline-secondary6 bg-white w-full h-[3rem] rounded-lg flex  items-center mt-2 outline-[0.8px] `}>
          <div className="ml-5 mr-0">
            <label htmlFor={label}>
             {children}
            </label>
          </div>
          <div className="flex-1 mr-5">
            <input
              autoComplete="on"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              id={label}
              type={type}
              name={label}
              aria-label={label}
              placeholder={placeholder}
              className={`${inputStyle}text-text3 font-satoshiRegular py-1.5 px-3 text-black/75 bg-white outline-none w-full  `}
            />
          </div>
        </div>
        {isRequired &&  label && <span className='pt-2 block text-xs text-red-400 '>{error} </span>}
        </div>
      }
      {!withICon && <>
      <div className={`outline   outline-secondary6 bg-white w-full h-[3rem] rounded-lg flex  items-center mt-2 outline-[0.8px] ${containerClassWithoutIcon}`}>
          {/* {topLabel &&<label htmlFor={label} className={`block text-[1.125rem]  ${labelClassWithoutIcon}`}>
            {label}
          </label>} */}
          <input
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            type={type} placeholder={placeholder}
            className={`${inputStyle} text-text3 font-satoshiRegular  py-1.5 px-3 text-black/75 bg-white outline-none w-full `} />
            {/* {isRequired && <span className='focus:ring-secondary6  focus:border-secondary6  block pt-2 text-xs text-red-400'>{label} is required</span>} */}
      </div>
        </>}
      
    </>
  )
}
