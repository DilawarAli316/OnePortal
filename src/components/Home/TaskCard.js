// TaskCard.js
import React, { useState } from "react";
import Modal from "./TaskModal";

const TaskCard = () => {
  const [filter, setFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const tasks = [
    {
      status: "All",
      title: "Finance Audit",
      priority: "High",
      priorityColor: "#fa8989",
      avatar: "/assets/Home/Tasks/avatar.png",
    },
    {
      status: "In-Progress",
      title: "Forms as service project status",
      priority: "Medium",
      priorityColor: "#42a4ee",
      avatar: "/assets/Home/Tasks/avatar.png",
    },
    {
      status: "New",
      title: "Tech hub enhancements",
      priority: "Medium",
      priorityColor: "#42a4ee",
      avatar: "/assets/Home/Tasks/avatar.png",
    },
    {
      status: "New",
      title: "Rooms Version 2",
      priority: "New",
      priorityColor: "#5114ff",
      avatar: "/assets/Home/Tasks/avatar.png",
      isSpark: true,
    },
  ];

  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((task) => task.status === filter);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  return (
    <div>
      <div className="w-[387.29px] h-[304.3px] flex flex-col rounded-[24.06px] bg-white transition-transform hover:scale-103 card-01">
        <div className="flex flex-row justify-between pb-[12px] items-center">
          <div className="flex flex-row justify-between">
            <h3 className="text-[16.84px] font-Avenir-Heavy mb-2">Tasks</h3>
            <div className="dotM"></div>
          </div>

          <div className="flex flex-row items-center gap-[14px]">
            <p
              className={`m-0 py-0 font-Avenir-Medium text-[14px] cursor-pointer ${
                filter === "All" ? "text-[#CE3838]" : "text-gray"
              }`}
              onClick={() => setFilter("All")}
            >
              All
            </p>
            <p
              className={`m-0 py-0 font-Avenir-Medium text-[14px] cursor-pointer ${
                filter === "In-Progress" ? "text-[#CE3838]" : "text-gray"
              }`}
              onClick={() => setFilter("In-Progress")}
            >
              In-Progress
            </p>
            <p
              className={`m-0 py-0 font-Avenir-Medium text-[14px] cursor-pointer ${
                filter === "New" ? "text-[#CE38338]" : "text-gray"
              }`}
              onClick={() => setFilter("New")}
            >
              New
            </p>
            <img src="/assets/Home/Tasks/tasks.svg" alt="Tasks" />
          </div>
        </div>

        <div className="flex flex-col justify-end">
          {filteredTasks.map((task, index) => (
            <div
              key={index}
              className="flex flex-row justify-between items-center py-[4.81px] border-b border-[#d0d4e4]/50 h-[50.52px] hover:border-b-red-500 cursor-pointer"
              onClick={() => handleTaskClick(task)}
            >
              <div className="flex flex-row gap-[9.62px] items-center">
                {task.status === "All" ? (
                  <img
                    className="w-[26.46px] h-[26.46px] relative rounded-[36.08px]"
                    src={task.avatar}
                    alt="Avatar"
                  />
                ) : (
                  <div
                    className={`pl-[4.81px] pr-[5.65px] pt-[7.22px] pb-[7.24px] ${
                      task.status === "New"
                        ? "bg-[#5114ff]"
                        : task.status === "In-Progress"
                        ? "bg-[#ffcb14]"
                        : "bg-[#14b8ff]"
                    } rounded-[13.23px] justify-center items-center flex`}
                  >
                    <div className="text-center text-white text-xs font-medium font-avenir leading-3">
                      {task.status === "New"
                        ? "RT"
                        : task.status === "In-Progress"
                        ? "AE"
                        : "TH"}
                    </div>
                  </div>
                )}

                <div className="text-black text-sm font-['Avenir']">
                  {task.title}
                </div>
              </div>

              <div className="h-[13.23px] justify-end items-center gap-[4.81px] flex">
                {task.isSpark ? (
                  <>
                    <img src="/assets/Home/Tasks/spark.svg" alt="Spark" />
                    <div className="text-[#202020] text-xs font-avenir">
                      NEW
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className="text-base font-black"
                      style={{ color: task.priorityColor }}
                    >
                      !
                    </div>
                    <div className="text-[#202020] text-xs font-avenir">
                      {task.priority}
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Task Details"
      >
        <p>
          <strong>Title:</strong> {selectedTask?.title}
        </p>
        <p>
          <strong>Status:</strong> {selectedTask?.status}
        </p>
        <p>
          <strong>Priority:</strong> {selectedTask?.priority}
        </p>
      </Modal>
    </div>
  );
};

export default TaskCard;
