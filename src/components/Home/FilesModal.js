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
      <div className="flex flex-col w-[1059.65px] gap-[28.49px]  p-12 bg-white rounded-[16px]">
        <img
          onClick={onClose}
          src="/assets/Home/Files/filesdoc.svg"
          alt="Doc"
        />
      </div>
    </div>
  );
};

export default Modal;
