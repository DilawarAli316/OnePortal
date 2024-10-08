import React from "react";
import "../../App.css";
import HomeWorkspace from "../../components/HomeWorkspace/HomeWorkspace";

const OnBoard = () => {
  return (
    <div className="content">
      <div className="mx-[48px] flex flex-col pt-[55px] items-center">
        <div className="flex flex-row gap-[29px]">
          <div className="flex flex-col gap-[24px]">
            {/* <div className="card-01 overflow-hidden w-[668px] h-[184px] bg-white rounded-[20px] p-4 transition-transform hover:scale-103">
              <div className="flex flex-row justify-between pb-[12px] items-center">
                <div className="flex flex-row justify-between">
                  <h3 className="text-[14px] font-Avenir-Heavy mb-2">Inbox</h3>
                  <div className="dotM"></div>
                </div>
                <img src="/assets/Home/@.svg" alt="Email" />
              </div>
              <div className="flex flex-col gap-[4px] overflow-y-scroll h-[120px]"></div>
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
                <img src="/assets/Home/News Card-1.svg" alt="News Card-1" />
              </div>
            </div> */}
          </div>

          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-row gap-[24px]">
              <div className="w-[301px] h-[228.64px] rounded-[20px] shadow-md transition-transform hover:scale-103">
                <img src={"/assets/Home/"} alt="Slider Image" />
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
    </div>
  );
};

export default OnBoard;
