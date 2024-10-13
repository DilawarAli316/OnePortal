import React, { useState } from 'react';

const TodoCard = () => {
  // State to manage completed todos
  const [completedItems, setCompletedItems] = useState(Array(3).fill(false));
  // State to manage hover over the ToDo image
  const [isHovered, setIsHovered] = useState(false);

  const todoItems = [
    { text: "Check Product Plan", date: "Today" },
    { text: "Check Product Plan", date: "16 August" },
    { text: "Check Product Plan", date: "16 August" },
  ];

  // Function to toggle the completion status of a todo item
  const toggleItem = (index) => {
    const updatedItems = [...completedItems];
    updatedItems[index] = !updatedItems[index];
    setCompletedItems(updatedItems);
  };

  return (
    <div className="w-[387.29px] h-[304.3px] hidden flex flex-col md:block rounded-[24.06px] bg-white transition-transform hover:scale-103 card-01">
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-[16.84px] font-Avenir-Heavy mb-2">To do</h3>
        <div
          onMouseEnter={() => setIsHovered(true)} // Set hover state to true
          onMouseLeave={() => setIsHovered(false)} // Set hover state to false
        >
          {isHovered ? (
            <img src="/assets/Home/Todo/setting.svg" alt="setting" />
          ) : (
            <img src="/assets/Home/Todo/todo.svg" alt="ToDo" />
          )}
        </div>
      </div>

      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col ">
          {todoItems.map((item, index) => (
            <div
              key={index}
              className="self-stretch py-[9.62px] bg-white justify-between items-center inline-flex"
              onClick={() => toggleItem(index)} // Call toggleItem on click
            >
              <div className="flex flex-row gap-[9.62px] items-center">
                {completedItems[index] ? (
                  <img src="/assets/Home/Todo/tick.svg" alt="Tick" className="w-[16.84px] h-[16.84px]" />
                ) : (
                  <div className="border border-[#d0d4e4] w-[16.84px] h-[16.84px] rounded-full"></div>
                )}
                <div className={`text-black text-sm font-avenir ${completedItems[index] ? 'line-through text-gray' : ''}`}>
                  {item.text}
                </div>
              </div>
              <div className="font-avenir-light text-gray text-[12px]">{item.date}</div>
            </div>
          ))}
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
  );
};

export default TodoCard;
