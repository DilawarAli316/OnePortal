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
          className={`absolute z-50 mt-2 w-[505.17px] items-center max-w-[505.17px] bg-white shadow-[0px_4px_4px_rgba(208,212,228,0.6)] rounded-[12px] p-6 
          transition-opacity duration-300 ${
            lgShow ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col gap-[24px]">

          <div className="flex flex-col gap-[19.24px]">
              <div className=" flex flex-row justify-start items-center gap-[4px]">
                <p className="!m-0 p-0 font-avenir text-[16.84px] text-gray ">
                  Service
                </p>
                <img
                  className="object-contain"
                  src="/assets/Services/chevron-down.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-row justify-start items-center gap-[22px]">
                <img
                  className="object-contain w-[64.95px]"
                  src="/assets/Services/tiles/sign.svg"
                  alt=""
                />
                <div className="gap-[10px] flex flex-col justify-between">
                  <div>
                    <h3 className="!m-0 font-avenir-heavy text-[16.84px] text-black">
                      Sign
                    </h3>
                    <p className="!m-0 p-0 font-avenir-roman text-[12.03px]">
                      Send mass publications to your group, department, company
                    </p>
                  </div>

                  <div className="flex flex-row">
                    <p className="!m-0  p-0 pr-[12px] text-gray font-avenir-roman text-[12.03px] ">
                      Discover More
                    </p>
                    <img src="/assets/Header/arrow-up-right.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>


            <div className="flex flex-col gap-[19.24px]">
              <div className=" flex flex-row justify-start items-center gap-[4px]">
                <p className="!m-0 p-0 font-avenir text-[16.84px] text-gray ">
                Entities Directory
                </p>
                <img
                  className="object-contain"
                  src="/assets/Services/chevron-down.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-row justify-start items-center gap-[22px]">
                <img
                  className="object-contain w-[64.95px]"
                  src="/assets/SearchModal/ministry.svg"
                  alt=""
                />
                <div className="gap-[10px] flex flex-col justify-between">
                  <div>
                    <h3 className="!m-0 font-avenir-heavy text-[14.43px] text-black">
                    Sharjah Social Services Department
                    </h3>
                    <p className="!m-0 p-0 font-avenir-roman text-[12.03px]">
                    info@sssd.shj.ae
                    </p>
                  </div>

              
                </div>
              </div>
            </div>

          <div className="flex flex-col gap-[19.24px]">
              <div className=" flex flex-row justify-start items-center gap-[4px]">
                <p className="!m-0 p-0 font-avenir text-[16.84px] text-gray ">
                Contacts
                </p>
                <img
                  className="object-contain"
                  src="/assets/Services/chevron-down.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-row justify-start items-center gap-[22px]">
                <img
                  className="object-contain w-[64.95px]"
                  src="/assets/SearchModal/Avatar.svg"
                  alt=""
                />
                <div className="gap-[10px] flex flex-col justify-between">
                  <div>
                    <h3 className="!m-0 font-avenir-heavy text-[16.84px] text-black">
                    Shabeeb Mohamed Melekalam
                    </h3>
                    <p className="!m-0 p-0 font-avenir-roman text-[12.03px]">
                    shabeeb.mohmed@sdd.shj.ae
                    </p>
                  </div>

                  <div className="flex flex-row gap-[4px] items-center justify-start">
                  <img src="/assets/SearchModal/Building.svg" alt="" />
                    <p className="!m-0 p-0 text-gray font-avenir-roman text-[12.03px] ">
                      Discover More
                    </p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchModal;
