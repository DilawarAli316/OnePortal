import React, { useState, useEffect } from "react";

const TicketList = () => {
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
        <img src="/assets/ticket-list.svg" alt="ticket-list" />
      </div>
    </div>
  );
};

export default TicketList;
