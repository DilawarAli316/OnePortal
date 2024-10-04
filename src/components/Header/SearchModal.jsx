import React, { useRef, useEffect, useState } from "react";

const SearchModal = ({ lgShow, setLgShow }) => {
  const modalRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  // Close the modal if the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setLgShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setLgShow]);

  // Handle fade-in animation on modal open
  useEffect(() => {
    if (lgShow) {
      setIsVisible(true);
    } else {
      // Set a delay before removing the modal from the DOM for fade-out effect
      const timer = setTimeout(() => setIsVisible(false), 300); // 300ms matches transition duration
      return () => clearTimeout(timer);
    }
  }, [lgShow]);

  return (
    <>
      {isVisible && (
        <div
          ref={modalRef}
          className={`absolute z-50 mt-2 w-full max-w-[420px] bg-white shadow-[0px_4px_4px_rgba(208,212,228,0.6)] rounded-[12px] p-6 
          transition-opacity duration-300 ${
            lgShow ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col gap-[16px]">
            <div className=" flex flex-row justify-start items-center gap-[4px]">
              <p className="!m-0 font-avenir text-[16.84px] text-gray ">
                Service
              </p>
              <img
                className="object-contain"
                src="/assets/Services/chevron-down.svg"
                alt=""
              />
            </div>
            <div className=" flex flex-row justify-start items-center gap-[4px]">
              <img
                className="object-contain w-[54px]"
                src="/assets/Services/tiles/sign.svg"
                alt=""
              />
              <div className="gap-[10px]">
                <h3 className="!m-0 font-avenir-heavy text-[14px] text-black">
                  Sign
                </h3>
                <p className="!m-0 p-0 gifont-avenir-roman text-[10px]">
                  Send mass publications to your group, department, company
                </p>
                <div className="flex flex-row">
                  <img src="" alt="" />
                  <p className="!m-0 ">Discover More</p>

                </div>
              </div>
            </div>

            {/* <h5 className="text-lg font-bold">Search Results</h5>
            
            <p className="text-gray-700">No results found.</p> */}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchModal;
