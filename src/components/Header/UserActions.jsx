
import React, { useState } from "react";

const UserActions = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleNotificationModal = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const toggleMenuModal = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="flex items-center gap-6 font-sans text-[#777fa1]">
        {/* Notifications Button */}
        <button
  onClick={toggleNotificationModal}
  className="relative flex items-center justify-center w-11 h-11 bg-none cursor-pointer"
  aria-label="Notifications"
>
  {/* Button with hover, pressed, and default styles */}
  <span
    className="transition-all duration-300 ease-in-out border-[1.2px] rounded-full flex items-center justify-center w-full h-full
      bg-idle border-white hover:bg-white active:bg-white focus:ring focus:ring-violet-300"
  
  >
    <img
      src="/assets/Header/BellNotActive.svg"
      alt="Notification Icon"
      className="w-6 h-6"
    />
  </span>
</button>

        {/* Security Button with Expandable Animation */}
        <button
          onClick={handleButtonClick}
          className={`relative flex items-center justify-between ${
            isExpanded ? "w-40 px-6" : "w-11"
          } h-11 bg-none border-none cursor-pointer transition-all duration-[800ms]`}
          aria-label="Security"
        >
          <span className="transition-all duration-300 ease-in-out border-[1.2px] rounded-full flex items-center justify-center w-full h-full
      bg-idle border-white hover:bg-white active:bg-white focus:ring focus:ring-violet-300">
            <img
              src={
                isExpanded
                  ? "/assets/Header/ShieldActive.svg"
                  : "/assets/Header/ShieldNotActive.svg"
              }
              alt="Security Icon"
              className="w-6 h-6"
            />
            {isExpanded && (
              <span className="pl-[10px] text-[14px] font-light transition-opacity duration-[6000ms] ease-in-out opacity-100">
                All Set
              </span>
            )}
          </span>
        </button>

        {/* User Avatar TODO add route to /profile/profile */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a53f5fedd738f309cd216f8961ace52c2720d238f341a1a78183fc17d008927e?placeholderIfAbsent=true&apiKey=041020761c824046b3f5b318a397a746"
          alt="User Avatar"
          className="w-12 h-12 rounded-full object-contain"
        />

        {/* Menu Button */}
        <button
          onClick={toggleMenuModal}
          className="rounded-full bg-none border-none cursor-pointer "
        >
          <img
            src="/assets/Header/Hamburger.svg"
            alt="Menu Icon"
            className="w-6 h-6"
          />
        </button>
      </nav>

      {/* Notification Modal */}
      {isNotificationOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div
            className="absolute inset-0 bg-gray opacity-50"
            onClick={toggleNotificationModal}
          />
          <div className="relative bg-white bottom-[100px] left-[380px] p-8 rounded-[24px] w-[549.67px] h-[594.33px] shadow-lg ">
          <img src="/assets/Header/Notification-modal.svg" alt="" />
          </div>
        </div>
      )}

      {/* Menu Modal */}
      {isMenuOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div
            className="absolute inset-0 bg-gray opacity-50"
            onClick={toggleMenuModal}
          />
          <div className="relative bg-white bottom-[140px] rounded-[12px] w-[1683.89px] h-[518.4px]">
            {/* <h2 className="text-xl font-semibold mb-4">Menu</h2> */}
            {/* Add menu content here */}
            {/* <div className="flex flex-col gap-4">
              <p>Menu Item 1</p>
              <p>Menu Item 2</p>
            </div> */}
            <img src="/assets/Header/Humburger-modal.svg" alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default UserActions;
