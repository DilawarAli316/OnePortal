import React from "react";

const ShortcutModal = ({ show, onClose, children }) => {
  if (!show) {
    return null; // Don't render the modal if 'show' is false
  }

  return (
    <div className="fixed inset-0 bg-gray bg-opacity-50 flex items-center justify-center z-50 ">
      <div className="relative  p-[45px] bg-white shadow-[0px_2.40556px_7.21667px_#C2C5D4] rounded-[19.2444px] inset-[0%] p-6">
        <button
          className="absolute top-2 right-2 w-[54.33px] h-[54.33px] border bg-white-500 rounded-full text-gray text-[20px] font-light text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        {children} {/* Modal content passed from parent */}
        <img src="/assets/shortcuts/list.svg" alt="" />

      </div>
    </div>
  );
};

export default ShortcutModal;
