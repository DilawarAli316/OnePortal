
import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Button = ({ children, variant = "primary", onClick }) => {
  const baseClasses =
    "flex gap-1 justify-center items-center px-2.5 py-2 text-xs rounded-[100px] border border-solid border-white border-opacity-30 font-['Inter'] ";
  const variantClasses = {
    primary: "text-green box-border flex flex-row justify-center items-center p-[9.62px] gap-[12.03px] w-[140.91px] h-[39.24px] bg-[linear-gradient(111.68deg,rgba(221,221,221,0.15)_7.59%,rgba(152,221,184,0.3)_102.04%)] border border-[rgba(255,255,255,0.28)] backdrop-blur-[6.01px] rounded-full",
    secondary: "text-slate-500 box-border flex flex-row justify-center items-center p-[9.62px] gap-[12.03px] w-[73.87px] h-[39.24px] bg-[linear-gradient(111.68deg,rgba(208,212,228,0.0275)_7.59%,rgba(208,212,228,0.25)_102.04%)] border border-[rgba(255,255,255,0.28)] backdrop-blur-[6.01px] rounded-full",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {children}
      
        
      {variant === "primary" && (
        <img src="/assets/arrow-right.svg"  />
      )}
    </button>
  );
};

export default Button;
