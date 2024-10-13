
import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

const EntitiesDirectory = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger the animation when the component is mounted
    setAnimate(true);
  }, []);

  return (
    <div className="flex flex-col pt-[55px] items-center pb-[150px]">
      <div
        className={`w-[1508.57px] h-[849.54px] rounded-[20px] transition-all duration-[3600ms] ease-in-out ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[160px]"
        }`}
      >
        <img src="/assets/Directories/Entities.svg" alt="Entities" />
      </div>
    </div>
  );
};

export default EntitiesDirectory;
