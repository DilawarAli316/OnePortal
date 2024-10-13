// GridHomeWorksapce.js
import React, { useState, useEffect } from "react";
// import styles from "./GridHomeWorksapce.css";
import TaskCard from "../../components/Home/TaskCard";
import Modal from "../../components/Home/InboxModal";
import TodoCard from "../../components/Home/TodoCard";
import SignCard from "../../components/Home/SignCard";
import FilesCard from "../../components/Home/FilesCard";


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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // State for the selected item

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 2 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true); // Open modal when an item is clicked
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close modal
    setSelectedItem(null); // Reset selected item
  };

  return (
    <div className="mx-[48px] flex flex-col pt-[55px] items-center">
      <div className="flex flex-row gap-[29px]">
        <div className="flex flex-col gap-[29px] justify-between">
          <div className="w-[803.46px] h-[124.66px] rounded-[20px] transition-transform hover:scale-103">
            <img src="/assets/Home/Overview/card.svg" alt="Card" />
          </div>

          <div className="card-01 overflow-hidden w-[803px] h-[250px] bg-white rounded-[20px] p-4 transition-transform hover:scale-103">
            <div className="flex flex-row justify-between pb-[12px] items-center">
              <div className="flex flex-row justify-between">
                <h3 className="text-[16.84px] font-Avenir-Heavy mb-2">Inbox</h3>
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
                  onClick={() => handleItemClick(item)} // Handle item click
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
                      <p className="m-0 py-0 font-Avenir text-[12.03px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col text-right">
                      <p className="m-0 py-0 font-Avenir-Medium text-[14px]">
                        {item.sender}
                      </p>
                      <p className="m-0 py-0 text-brand font-Avenir text-[10.82px]">
                        {item.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-row gap-[24px]">
            <TaskCard />
            <TodoCard />
          </div>

          <div className="flex flex-row gap-[24px]">
            <SignCard />
            <FilesCard />
          </div>
          <div className="flex flex-row gap-[24px]">
            <div className="w-[387.29px] h-[208.08px] hidden flex flex-col md:block rounded-[24.06px] bg-white transition-transform hover:scale-103 card-01">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row justify-between">
                  <h3 className="text-[16.84px] font-Avenir-Heavy mb-2">
                    Forms
                  </h3>
                </div>
                <img src="/assets/Home/Overview/Forms.svg" alt="Forms" />
              </div>

              <div className="flex flex-col justify-end h-full">
                <div className="flex-col py-[9.62px] bg-white justify-center  gap-[9.62px] items-center flex">
                  <div className="flex flex-row gap-[9.62px] justify-between items-center pt-[20px]">
                    <img src="/assets/Home/Overview/checklist.svg" alt="List" />
                    <div className="font-avenir-light text-gray text-[12px]">
                      No Available Forms
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-auto">
                  <div className="h-[31.27px] w-[31.27px] p-[9.62px] bg-[#d0d4e4]/20 rounded-[120.28px] justify-center items-center gap-3 inline-flex">
                    <div className="text-center text-[#777fa1] text-sm font-black font-avenir">
                      <img src="/assets/Home/Todo/plus.svg" alt="Add" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[387.29px] h-[208.08px] hidden flex flex-col md:block rounded-[24.06px] bg-white transition-transform hover:scale-103 card-01">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row justify-between">
                  <h3 className="text-[16.84px] font-Avenir-Heavy mb-2">
                    Rooms
                  </h3>
                </div>
                <img src="/assets/Home/Overview/rooms.svg" alt="Rooms" />
              </div>

              <div className="flex flex-col justify-end h-full">
                <div className="flex-col py-[9.62px] bg-[#F6F6FA] justify-start  items-start flex  border-blue-100 p-[12.03px]">
                  <div className="flex flex-row gap-[9.62px] justify-start items-start ">
                    <img
                      className="pt-[5px]"
                      src="/assets/Home/Overview/loader.svg"
                      alt="List"
                    />
                    <div className="font-avenir-light flex flex-col justify-start items-start">
                      <div className="!p-0 text-[14.43px] font-avenir-light text-black">
                        Inspiration Room
                      </div>
                      <div className="!p-0  text-gray text-[12px]">
                        09:30 ~ 10:30
                      </div>
                      <div className="!p-0  text-[8px] font-avenir-light text-green">
                        Staring soon
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-auto">
                  <div className="h-[31.27px] w-[31.27px] p-[9.62px] bg-[#d0d4e4]/20 rounded-[120.28px] justify-center items-center gap-3 inline-flex">
                    <div className="text-center text-[#777fa1] text-sm font-black font-avenir">
                      <img src="/assets/Home/Todo/plus.svg" alt="Add" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[803px] card-01 bg-white p-4 rounded-[20px] transition-transform hover:scale-103">
            <div className="flex flex-row justify-between items-center ">
              <div className="flex flex-row    justify-between items-center">
                <h3 className="text-[16.84px] font-Avenir-Heavy mb-2">Rooms</h3>
              </div>
              <img src="/assets/Home/Overview/knowledge.svg" alt="knowledge" />
            </div>
            <div className="flex flex-row justify-between items-start pt-[14.46px]">
              {" "}
              <img
                src="/assets/Home/Overview/overview-tiles-02.svg"
                alt="Knowledgehub"
              />
              <img
                src="/assets/Home/Overview/overview-tiles-02.svg"
                alt="Knowledgehub"
              />
            </div>
          </div>

          <div className=" overflow-hidden w-[803px] h-[250px] bg-white rounded-[20px] transition-transform hover:scale-103">
            <img
              src="/assets/Home/Overview/overview-tiles-03.svg"
              alt="Tech Hub"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[29px]">
          <div className="w-[670px] h-[123px] rounded-[20px]  transition-transform hover:scale-103">
            <img
              src="/assets/Home/Overview/overview-tiles-05.svg"
              alt="Calendar"
            />
          </div>
          <div className="flex flex-row gap-[24px]">
            <div className="w-[362.04px] h-[275.01px] rounded-[20px] shadow-md transition-transform hover:scale-103">
              <img src={images[currentImageIndex]} alt="Slider Image" />
            </div>

            <div className="w-[279.04pz] h-[273.03px] rounded-[24.06px] transition-transform hover:scale-103">
              <img src="/assets/Home/Overview/coffeeee.svg" alt="coffe overview" />
            </div>
          </div>

          <div className="flex flex-row gap-[20px] justify-between">
            <div className="w-[204.87px] h-[157.56px] rounded-[24.06px] shadow-md transition-transform hover:scale-103">
              <img src="/assets/Home/Attandance01.svg" alt="Attendance01" />
            </div>
            <div className="w-[204.87px] h-[157.56px] rounded-[24.06px] shadow-md transition-transform hover:scale-103">
              <img src="/assets/Home/Attandance02.svg" alt="Attendance02" />
            </div>
            <div className="w-[204.87px] h-[157.56px] rounded-[24.06px] shadow-md transition-transform hover:scale-103">
              <img src="/assets/Home/Attandance03.svg" alt="Attendance03" />
            </div>
          </div>

          {/* <div className="w-[669.95px] h-[283.86px] rounded-[20px] shadow-md transition-transform hover:scale-103">
            <img src="/assets/Home/Overview/cal-expanded.svg" alt="Calendar" />
          </div> */}

          <div className="w-[669.95px] card-01 bg-white p-4 rounded-[20px] transition-transform hover:scale-103">
            <div className="flex flex-row justify-between items-center ">
              <div className="flex flex-row    justify-between items-center">
                <h3 className="text-[16.84px] font-Avenir-Heavy mb-2">
                  Calendar
                </h3>
              </div>
              <div className="flex flex-row justify-start  gap-[25.33px]">
                <div class="flex flex-row h-[37.99px] px-[15.20px] py-[12.66px] bg-[#2d2a26] rounded-[50.66px] justify-center items-center">
                  <div className="flex flex-row justify-between gap-[4px]">
                    <img src="/assets/Home/Overview/pen.svg" alt="pen" />
                    <span className="text-white text-[15.20px] font-medium font-avenir">
                      Add Event
                    </span>
                  </div>
                </div>
                <img
                  src="/assets/Home/Overview/cal-rounded.svg"
                  alt="knowledge"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between items-start pt-[14.46px]">
              {" "}
              <img
                src="/assets/Home/Overview/cal-expanded.svg"
                alt="Knowledgehub"
              />
            </div>
          </div>


          <div className="w-[669.95px]  rounded-[20px] shadow-md transition-transform hover:scale-103">
            <img src="/assets/Home/Overview/overview-tiles-04.svg" alt="Calendar" />
          </div>
        </div>
      </div>
      {isModalOpen && selectedItem && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          title={selectedItem.title}
        >
          {/* You can pass additional content here if needed */}
          <div>{selectedItem.description}</div>
        </Modal>
      )}
    </div>
  );
};

export default Overview;
