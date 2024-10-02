import React, { useState, useEffect } from "react";


const Overview = () => {
  const images = [
    "/assets/Home/News Card.svg",
    "/assets/Home/News Card-1.svg",
    "/assets/Home/News Card-2.svg",
    "/assets/Home/News Card-3.svg",
  ];

  const cardItems = [
    {
      status: "active",
      title: "Infrastructure Maintenance",
      description: "As part of our continuous efforts to improve performance",
      sender: "Service Desk",
      time: "Today, 10:00 AM",
      dotColor: "#27BD50",
      bgColor: "#F6FAF7",

    },
    {
      status: "inactive",
      title: "System Update",
      description: "Scheduled system update for performance enhancement",
      sender: "Tech Team",
      time: "Yesterday, 4:30 PM",
      dotColor: "#D0D4E4",
    },
    {
      status: "active",
      title: "New Security Patch",
      description: "Critical security patch will be applied today",
      sender: "Security Team",
      time: "Today, 11:30 AM",
      dotColor: "#27BD50",
      bgColor: "#F6FAF7",
    },
    {
      status: "inactive",
      title: "System Update",
      description: "Scheduled system update for performance enhancement",
      sender: "Tech Team",
      time: "Yesterday, 4:30 PM",
      dotColor: "#D0D4E4",
    },
    {
      status: "inactive",
      title: "System Update",
      description: "Scheduled system update for performance enhancement",
      sender: "Tech Team",
      time: "Yesterday, 4:30 PM",
      dotColor: "#D0D4E4",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 2 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="mx-[48px] flex flex-col pt-[55px] items-center">
      <div className="flex flex-row gap-[29px]">
        <div className="flex flex-col gap-[24px]">
          <div className="card-01 overflow-hidden w-[668px] h-[184px] bg-white rounded-[20px] p-4 transition-transform hover:scale-103">
            <div className="flex flex-row justify-between pb-[12px] items-center">
              <div className="flex flex-row justify-between">
                <h3 className="text-[14px] font-Avenir-Heavy mb-2">Inbox</h3>
                <div className="dotM"></div>
              </div>
              <img src="/assets/Home/@.svg" alt="Email" />
            </div>
            <div className="flex flex-col gap-[4px] overflow-y-scroll h-[120px]">
              {cardItems.map((item, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: item.bgColor }}
                  className="flex flex-row items-center justify-between rounded-[8px] py-[12px] px-[8px]"
                >
                  <div className="flex items-baseline flex-row">
                    <div
                      className="dotL"
                      style={{ backgroundColor: item.dotColor }}
                    ></div>
                    <div className="flex flex-col">
                      <p className="m-0 py-0 font-Avenir-Medium text-[14px]">
                        {item.title}
                      </p>
                      <p className="m-0 py-0 font-Avenir text-[10px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col text-right">
                      <p className="m-0 py-0 font-Avenir-Medium text-[14px]">
                        {item.sender}
                      </p>
                      <p className="m-0 py-0 text-brand font-Avenir text-[10px]">
                        {item.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-row gap-[24px]">
            <div className="w-[322px] h-[253px] hidden md:block rounded-[20px] transition-transform hover:scale-103">
              <img src="/assets/Home/TasksWidget.svg" alt="TasksWidget" />
            </div>
            <div className="w-[322px] h-[253px] hidden md:block rounded-[20px] transition-transform hover:scale-103">
              <img src="/assets/Home/ToDoWidget.svg" alt="To Do Widget" />
            </div>
          </div>

          <div className="flex flex-row gap-[24px]">
            <div className="w-[322px] h-[159px] hidden md:block rounded-[20px] transition-transform hover:scale-103">
              <img src="/assets/Home/Sign Widget.svg" alt="Sign Widget" />
            </div>
            <div className="w-[322px] h-[159px] hidden md:block rounded-[20px] transition-transform hover:scale-103">
              <img src="/assets/Home/Files Widget.svg" alt="Files Widget" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-row gap-[24px]">
            <div className="w-[301px] h-[228.64px] rounded-[20px] shadow-md transition-transform hover:scale-103">
              <img src={images[currentImageIndex]} alt="Slider Image" />
            </div>

            <div className="w-[232px] h-[227px] rounded-[20px] transition-transform hover:scale-103">
              <img src="/assets/Home/weathercard.svg" alt="weathercard" />
            </div>
          </div>

          <div className="flex flex-row gap-[20px]">
            <div className="w-[170.331px] h-[132.09px] rounded-[20px] shadow-md transition-transform hover:scale-103">
              <img src="/assets/Home/Attandance01.svg" alt="Attendance01" />
            </div>
            <div className="w-[170.331px] h-[132.09px] rounded-[20px] shadow-md transition-transform hover:scale-103">
              <img src="/assets/Home/Attandance02.svg" alt="Attendance02" />
            </div>
            <div className="w-[170.331px] h-[132.09px] rounded-[20px] shadow-md transition-transform hover:scale-103">
              <img src="/assets/Home/Attandance03.svg" alt="Attendance03" />
            </div>
          </div>

          <div className="w-[557px] h-[236px] rounded-[20px] shadow-md transition-transform hover:scale-103">
            <img src="/assets/Home/cal.svg" alt="Calendar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview