/**
 * This code was generated by Builder.io.
 */
import React from "react";

function LoginMethods() {
  const loginOptions = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3e1344ad6172379d8cf7fe2e1889e79dca58bc598986293195f14125427bda3b?placeholderIfAbsent=true&apiKey=041020761c824046b3f5b318a397a746",
      text: "Continue with UAE PASS",
      iconAlt: "UAE PASS icon",
    },
    { icon: "", text: "Microsoft authenticator", iconText: "lock" },
  ];

  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-start self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-2 text-4xl font-extrabold text-black">
          <h1 className="grow my-auto">Welcome to</h1>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e7d899dd15bd44413350e3b9057c73e0ec8e98e106e3d04e8b1701f97c26eb9?placeholderIfAbsent=true&apiKey=041020761c824046b3f5b318a397a746"
            className="object-contain shrink-0 aspect-[1.62] w-[76px]"
            alt="Welcome logo"
          />
        </div>
        <p className="mt-3.5 text-2xl font-[350] text-neutral-300">
          Let's get you back in.
        </p>
        <p className="mt-11 text-base font-[350] text-neutral-800 max-md:mt-10">
          Please select a method to login:
        </p>
        <div className="flex flex-wrap gap-4 self-stretch mt-9 w-full text-white max-md:max-w-full">
          {loginOptions.map((option, index) => (
            <button
              key={index}
              className="flex flex-1 gap-2 justify-center items-center px-6 text-base bg-black min-h-[48px] rounded-[32px] max-md:px-5"
            >
              {option.icon ? (
                <img
                  loading="lazy"
                  src={option.icon}
                  className="object-contain shrink-0 self-stretch my-auto aspect-[1.17] w-[21px]"
                  alt={option.iconAlt}
                />
              ) : (
                <span className="self-stretch my-auto w-3 text-sm font-black whitespace-nowrap rounded-none">
                  {option.iconText}
                </span>
              )}
              <span className="self-stretch my-auto">{option.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LoginMethods;
