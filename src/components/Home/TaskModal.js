// Modal.js
import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div
      className="absolute z-50 fixed inset-0 flex justify-center items-center bg-gray/40 bg-opacity-50 modal-overlay"
      onClick={handleOverlayClick}
    >
      <div className="flex flex-col w-[890px] gap-[28.49px]  p-12 bg-white rounded-[16px]">
        <div className="flex flex-row justify-between items-start ">
          <div className="flex flex-col gap-[18.04px]">
            <div className=" font-avenir-roman text-[19.24px] text-green">
              Finance
            </div>
            <h2 className=" font-avenir-heavy text-[24px] ">{title}</h2>
            <div className=" font-avenir-roman text-[16.84px] text-gray">
              Last changed yesterday by you
            </div>
          </div>

          <img
            src="/assets/Home/Tasks/close.svg"
            onClick={onClose}
            alt="Spark"
          />
        </div>

        <img src="/assets/Home/Tasks/modal.svg" alt="Spark" />
      </div>
    </div>
  );
};

export default Modal;
