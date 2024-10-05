import React, { useEffect, useRef } from "react";
import ChatList from "../../components/ChatList/ChatList"; // Import ChatList component

const ChatModal = ({ show, onClose, children }) => {
  const modalRef = useRef(null);

  // Close modal if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose(); // Close modal when clicking outside
      }
    };

    // Add event listener for mousedown (or click) events
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener on component unmount or modal close
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show, onClose]);

  if (!show) {
    return null; // Don't render the modal if 'show' is false
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray bg-opacity-20 flex items-center justify-start z-50">
      <div
        ref={modalRef}
        className="relative left-[110px] bg-white shadow-[0px_2.40556px_7.21667px_#C2C5D4] rounded-[24px]"
      >

        {/* Render the ChatList component inside the modal */}
        <ChatList />

        {children} {/* Modal content passed from parent */}
      </div>
    </div>
  );
};

export default ChatModal;

