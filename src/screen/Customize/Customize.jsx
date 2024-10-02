import React, { useState, useEffect } from "react";

const Customize = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger the animation when the component is mounted
    setAnimate(true);
  }, []);

  return (
    <div className="flex flex-col pt-[55px] items-center pb-[150px]">
      <div
        className={`w-[1508.57px] h-[849.54px] rounded-[20px] transition-all duration-[3600ms] ease-in-out ${
          animate
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[160px]"
        }`}
      >
        <div className="flex flex-row gap-[43px]">
          <div>
            <img src="/assets/Customisation/row1.svg" alt="Custom row" />
          </div>
          <div className="flex flex-col items-center gap-[28.87px]">
            <div className="flex justify-center items-center p-[14.4333px] gap-[9.62px] w-[648.3px] h-[372.86px] bg-[rgba(255,255,255,0.5)] border-[3.60833px] border-dashed border-white rounded-[24.0556px] box-border">
              <img
                src="/assets/Customisation/square-dashed-circle-plus.svg"
                alt="Custom row"
                className="object-contain"
              />
            </div>
          
            <div className="flex justify-center items-center p-[14.4333px] gap-[9.62px] w-[648.3px] h-[316.33px] bg-[rgba(80,176,184,0.1)] border-[3.60833px] border-dashed border-[#50B0B8] rounded-[24.0556px] box-border">
              <img
                className="object-contain"
                src="/assets/Customisation/plus-circle.svg"
                alt="Custom row"
              />
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Customize;
