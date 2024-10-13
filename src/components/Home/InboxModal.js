import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  // Use an explicit return for better readability
  if (!isOpen) {
    return null; // This is fine, but let's clarify the function's purpose
  }

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
      <div className="flex flex-col w-[890px] gap-[28.49px] p-12 bg-white rounded-[16px]">
        <img
          onClick={onClose}
          src="/assets/Home/Inbox/Inbox-modal.svg"
          alt="Inbox"
        />
        {children} {/* Include children to display content inside the modal */}
      </div>
    </div>
  );
};

export default Modal;
