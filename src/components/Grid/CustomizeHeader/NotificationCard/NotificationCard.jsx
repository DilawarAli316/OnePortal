
import React from "react";
import ActionPanel from "../ActionPanel/ActionPanel";
// import '../CustomizeHeader.css';

const NotificationCard = () => {
  return (
    <section className="flex flex-col items-start p-[14.43px] gap-[19.24px] w-[298.11px] h-[100.73px] bg-white bg-opacity-10 shadow-[inset_1.20278px_1.20278px_0px_rgba(255,255,255,0.5)] backdrop-blur-[60.1389px] rounded-[14.43px]">
      <div className="flex flex-col">
        <h2 className="text-sm font-Avenir-Medium text-gradient" >
          Let me know once you are done.
        </h2>
        <ActionPanel />
      </div>
    </section>
  );
};

export default NotificationCard;
