
import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import NavigationButton from "./NavigationButton";
import ShortcutModal from "../Shortcuts/ShortcutModal"; 
import MessengerModal from "../MessengerModal/ChatListModal"; 
import styles from "./NavigationMenu.module.css"; 
import { useHistory } from "react-router-dom";

const navigationItemsFirst = [
  {
    activeIcon: "/assets/angle-left-active.svg",
    inactiveIcon: "/assets/angle-left.svg",
    label: "Back",
    hoverText: "Go Back" // New hoverText field
  },
];

const navigationItems = [
  {
    activeIcon: "/assets/homeActive.svg",
    inactiveIcon: "/assets/homeNotactive.svg",
    label: "Home",
    hoverText: "Home" // New hoverText field
  },
  {
    activeIcon: "/assets/categoriesActive.svg",
    inactiveIcon: "/assets/categoriesNotactive.svg",
    label: "Apps",
    hoverText: "Apps" // New hoverText field
  },
  {
    activeIcon: "/assets/ServicesActive.svg",
    inactiveIcon: "/assets/ServicesNotActive.svg",
    label: "Services",
    hoverText: "Services" // New hoverText field
  },
  {
    activeIcon: "/assets/MessengerActive.svg",
    inactiveIcon: "/assets/MessengerNotActive.svg",
    label: "Messenger",
    hoverText: "Messenger" // New hoverText field
  },
  {
    activeIcon: "/assets/plus.svg",
    inactiveIcon: "/assets/plusNotactive.svg",
    label: "Add", // This triggers the modal
    hoverText: "Add Shortcuts" // New hoverText field
  },
];

const navigationItems2 = [
  {
    activeIcon: "/assets/messageActive.svg",
    inactiveIcon: "/assets/messageNotActive.svg",
    label: "TicketList",
    hoverText: "Support Center" // New hoverText field
  },
  {
    activeIcon: "/assets/KnowledgeActive.svg",
    inactiveIcon: "/assets/KnowledgeActive.svg",
    label: "KHub",
    hoverText: "Knowledge Hub" // New hoverText field
  },
];

const SideView = ({ showBackBtn }) => {
  const history = useHistory();
  const [activeLabel, setActiveLabel] = useState("/");
  const [hoveredLabel, setHoveredLabel] = useState(null);
  const [showShortcutModal, setShowShortcutModal] = useState(false); // For Shortcut modal visibility
  const [showMessengerModal, setShowMessengerModal] = useState(false); // For Messenger modal visibility

  // Track active route using window.location.pathname
  useEffect(() => {
    setActiveLabel(window.location.pathname);
  }, [window.location.pathname]);

  // Handle Modal visibility
  const handleShowShortcutModal = () => setShowShortcutModal(true);
  const handleCloseShortcutModal = () => setShowShortcutModal(false);
  
  const handleShowMessengerModal = () => setShowMessengerModal(true);
  const handleCloseMessengerModal = () => setShowMessengerModal(false);

  return (
    <div className="w-[135px] flex flex-col justify-between items-center gap-[200px] sticky absolute z-20 top-0">
     {true && <Nav className="flex flex-col items-center">
          {navigationItemsFirst.map((item, index) => (
            <Nav.Link
              key={index}
              onClick={() => {
                history.goBack()
                  // window.location.href = item.label; // Perform navigation
              }}
              onMouseEnter={() => setHoveredLabel(item.label)}
              onMouseLeave={() => setHoveredLabel(null)}
              className="text-black font-medium cursor-pointer"
            >
              <div className="flex flex-row items-center gap-[12px] font-avenir-medium text-black">
                <NavigationButton
                // btnStyle={'flex items-center justify-center'} 
                  activeIcon={item.activeIcon}
                  inactiveIcon={item.inactiveIcon}
                  isActive={activeLabel === item.label}
                />
                {hoveredLabel === item.label && (
                  <div className={styles.hoverLabel}>{item.label}</div>
                )}
              </div>
            </Nav.Link>
          ))}
        </Nav>}
     

      <div className="h-[336.60px] w-full flex flex-col justify-start items-center">
        <Nav className="flex flex-col items-center">
          {navigationItems.map((item, index) => (
            <Nav.Link
              key={index}
              onClick={() => {
                if (item.label === "Add") {
                  handleShowShortcutModal(); // Show Shortcut modal when "Add" is clicked
                } else if (item.label === "Messenger") {
                  handleShowMessengerModal(); // Show Messenger modal when "Messenger" is clicked
                } else {
                  setActiveLabel(item.label); // Only navigate for other items
                  window.location.href = item.label; // Perform navigation
                }
              }}
              onMouseEnter={() => setHoveredLabel(item.hoverText)} // Use hoverText here
              onMouseLeave={() => setHoveredLabel(null)}
              className="text-black font-medium cursor-pointer"
            >
              <div className="flex flex-row items-center gap-[12px]">
                <NavigationButton
                  activeIcon={item.activeIcon}
                  inactiveIcon={item.inactiveIcon}
                  isActive={activeLabel === item.label}
                />
                {hoveredLabel === item.label && (
                  <div className={styles.hoverLabel}>{item.label}</div>
                )}
              </div>
            </Nav.Link>
          ))}
        </Nav>
      </div>

      <Nav className="flex flex-col items-center">
        {navigationItems2.map((item, index) => (
          <Nav.Link
            key={index}
            onClick={() => {
              setActiveLabel(item.label);
              window.location.href = item.label; // Perform navigation
            }}
            onMouseEnter={() => setHoveredLabel(item.hoverText)} // Use hoverText here
            onMouseLeave={() => setHoveredLabel(null)}
            className="text-black font-medium cursor-pointer"
          >
            <div className="flex flex-row items-center gap-[12px]">
              <NavigationButton
                activeIcon={item.activeIcon}
                inactiveIcon={item.inactiveIcon}
                isActive={activeLabel === item.label}
              />
              {hoveredLabel === item.label && (
                <div className={styles.hoverLabel}>{item.label}</div>
              )}
            </div>
          </Nav.Link>
        ))}
      </Nav>

      {/* Custom Shortcut Modal */}
      <ShortcutModal show={showShortcutModal} onClose={handleCloseShortcutModal}>
        <h2 className="text-[24.06px] font-avenir-heavy">Add Quick Access</h2>
        {/* Modal content goes here */}
      </ShortcutModal>
      {/* Custom Messenger Modal */}
      <MessengerModal show={showMessengerModal} onClose={handleCloseMessengerModal}>
        {/* Modal content goes here */}
      </MessengerModal>
    </div>
  );
};

export default SideView;
