
import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Button = ({ children, variant = "primary", onClick }) => {
  const baseClasses =
    "flex gap-1 justify-center items-center px-2.5 py-2 text-xs rounded-[100px] border border-solid border-white border-opacity-30 font-['Inter'] ";
  const variantClasses = {
    primary: "text-teal-800 bg-teal-50",
    secondary: "text-slate-500 bg-transparent",
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
