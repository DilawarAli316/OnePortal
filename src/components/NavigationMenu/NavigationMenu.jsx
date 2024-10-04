// import React, { useState, useEffect } from "react";
// import Nav from "react-bootstrap/Nav";
// import NavigationButton from "./NavigationButton";
// import styles from "./NavigationMenu.module.css"; 

// const navigationItems = [
//   {
//     activeIcon: "/assets/homeActive.svg",
//     inactiveIcon: "/assets/homeNotactive.svg",
//     label: "/",
//   },
//   {
//     activeIcon: "/assets/categoriesActive.svg",
//     inactiveIcon: "/assets/categoriesNotactive.svg",
//     label: "Apps",
//   },
//   {
//     activeIcon: "/assets/ServicesActive.svg",
//     inactiveIcon: "/assets/ServicesNotActive.svg",
//     label: "Services",
//   },
//   {
//     activeIcon: "/assets/MessengerActive.svg",
//     inactiveIcon: "/assets/MessengerNotActive.svg",
//     label: "Teams",
//   },
//   {
//     activeIcon: "/assets/plus.svg",
//     inactiveIcon: "/assets/plusNotactive.svg",
//     label: "Add"
//   },
// ];

// const navigationItems2 = [
//   {
//     activeIcon: "/assets/messageActive.svg",
//     inactiveIcon: "/assets/messageNotActive.svg",
//     label: "Support",
//   },
//   {
//     activeIcon: "/assets/KnowledgeActive.svg",
//     inactiveIcon: "/assets/KnowledgeActive.svg",
//     label: "KHub",
//   },
// ];

// const SideView = () => {
//   const [activeLabel, setActiveLabel] = useState("/");
//   const [hoveredLabel, setHoveredLabel] = useState(null);

//   // Track active route using window.location.pathname
//   useEffect(() => {
//     setActiveLabel(window.location.pathname);
//   }, [window.location.pathname]);

//   return (
//     <div className={styles.navigationMenu}>
//       <div className="w-[135px] h-full flex-col justify-between items-center gap-[294px]  inline-flex">
//         <div className="h-[336.60px] w-full flex-col justify-start items-center flex">
//           <Nav className="flex flex-col items-center">
//             {navigationItems.map((item, index) => (
//               <Nav.Link
//                 href={item.label}
//                 key={index}
//                 onClick={() => setActiveLabel(item.label)}
//                 onMouseEnter={() => setHoveredLabel(item.label)}
//                 onMouseLeave={() => setHoveredLabel(null)}
//                 className={styles.navLink} // Use external CSS class
//               >
//                 <div className="flex flex-row items-center gap-[12px] font-avenir-medium text-black">
//                   <NavigationButton
//                     activeIcon={item.activeIcon}
//                     inactiveIcon={item.inactiveIcon}
//                     isActive={activeLabel === item.label} 
//                   />
//                   {hoveredLabel === item.label && (
//                     <div className={styles.hoverLabel}>
//                       {item.label} {/* Displaying the label for hover */}
//                     </div>
//                   )}
//                 </div>
//               </Nav.Link>
//             ))}
//           </Nav>
//         </div>
//         <Nav className="flex flex-col items-center">
//           {navigationItems2.map((item, index) => (
//             <Nav.Link
//               href={item.label}
//               key={index}
//               onClick={() => setActiveLabel(item.label)}
//               onMouseEnter={() => setHoveredLabel(item.label)}
//               onMouseLeave={() => setHoveredLabel(null)}
//               className={styles.navLink} // Use external CSS class
//             >
//               <div className="flex flex-row items-center gap-[12px] font-avenir-medium text-black">
//                 <NavigationButton
//                   activeIcon={item.activeIcon}
//                   inactiveIcon={item.inactiveIcon}
//                   isActive={activeLabel === item.label}
//                 />
//                 {hoveredLabel === item.label && (
//                   <div className={styles.hoverLabel}>
//                     {item.label} {/* Displaying the label for hover */}
//                   </div>
//                 )} 
//               </div>
//             </Nav.Link>
//           ))}
//         </Nav>
//       </div>
//     </div>
//   );
// };

// export default SideView;



// import React, { useState, useEffect } from "react";
// import Nav from "react-bootstrap/Nav";
// import NavigationButton from "./NavigationButton";
// import ShortcutModal from "../Shortcuts/ShortcutModal"; 

// const navigationItems = [
//   {
//     activeIcon: "/assets/homeActive.svg",
//     inactiveIcon: "/assets/homeNotactive.svg",
//     label: "/",
//   },
//   {
//     activeIcon: "/assets/categoriesActive.svg",
//     inactiveIcon: "/assets/categoriesNotactive.svg",
//     label: "Apps",
//   },
//   {
//     activeIcon: "/assets/ServicesActive.svg",
//     inactiveIcon: "/assets/ServicesNotActive.svg",
//     label: "Services",
//   },
//   {
//     activeIcon: "/assets/MessengerActive.svg",
//     inactiveIcon: "/assets/MessengerNotActive.svg",
//     label: "Teams",
//   },
//   {
//     activeIcon: "/assets/plus.svg",
//     inactiveIcon: "/assets/plusNotactive.svg",
//     label: "Add", // This triggers the modal
//   },
// ];

// const navigationItems2 = [
//   {
//     activeIcon: "/assets/messageActive.svg",
//     inactiveIcon: "/assets/messageNotActive.svg",
//     label: "Support",
//   },
//   {
//     activeIcon: "/assets/KnowledgeActive.svg",
//     inactiveIcon: "/assets/KnowledgeActive.svg",
//     label: "KHub",
//   },
// ];

// const SideView = () => {
//   const [activeLabel, setActiveLabel] = useState("/");
//   const [hoveredLabel, setHoveredLabel] = useState(null);
//   const [showModal, setShowModal] = useState(false); // For custom modal visibility

//   // Track active route using window.location.pathname
//   useEffect(() => {
//     setActiveLabel(window.location.pathname);
//   }, [window.location.pathname]);

//   // Handle Custom Modal
//   const handleShow = () => setShowModal(true);
//   const handleClose = () => setShowModal(false);

//   return (
//     <div className="w-[135px] h-full flex flex-col justify-between items-center gap-[294px]">
//       <div className="h-[336.60px] w-full flex flex-col justify-start items-center">
//         <Nav className="flex flex-col items-center">
//           {navigationItems.map((item, index) => (
//             <Nav.Link
//               href={item.label}
//               key={index}
//               onClick={() => {
//                 setActiveLabel(item.label);
//                 if (item.label === "Add") handleShow(); // Show modal when "Add" is clicked
//               }}
//               onMouseEnter={() => setHoveredLabel(item.label)}
//               onMouseLeave={() => setHoveredLabel(null)}
//               className="text-black font-medium"
//             >
//               <div className="flex flex-row items-center gap-[12px]">
//                 <NavigationButton
//                   activeIcon={item.activeIcon}
//                   inactiveIcon={item.inactiveIcon}
//                   isActive={activeLabel === item.label}
//                 />
//                 {hoveredLabel === item.label && (
//                   <div className="text-sm">{item.label}</div> 
//                 )}
//               </div>
//             </Nav.Link>
//           ))}
//         </Nav>
//       </div>

//       <Nav className="flex flex-col items-center">
//         {navigationItems2.map((item, index) => (
//           <Nav.Link
//             href={item.label}
//             key={index}
//             onClick={() => setActiveLabel(item.label)}
//             onMouseEnter={() => setHoveredLabel(item.label)}
//             onMouseLeave={() => setHoveredLabel(null)}
//             className="text-black font-medium"
//           >
//             <div className="flex flex-row items-center gap-[12px]">
//               <NavigationButton
//                 activeIcon={item.activeIcon}
//                 inactiveIcon={item.inactiveIcon}
//                 isActive={activeLabel === item.label}
//               />
//               {hoveredLabel === item.label && (
//                 <div className="text-sm">{item.label}</div>
//               )}
//             </div>
//           </Nav.Link>
//         ))}
//       </Nav>

//       {/* Custom Modal */}
//       <ShortcutModal show={showModal} onClose={handleClose}>
//         <h2 className="text-xl font-bold mb-4">Add New Item</h2>
//         {/* Modal content goes here */}
//       </ShortcutModal>
//     </div>
//   );
// };

// export default SideView;



import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import NavigationButton from "./NavigationButton";
import ShortcutModal from "../Shortcuts/ShortcutModal"; 

const navigationItems = [
  {
    activeIcon: "/assets/homeActive.svg",
    inactiveIcon: "/assets/homeNotactive.svg",
    label: "/",
  },
  {
    activeIcon: "/assets/categoriesActive.svg",
    inactiveIcon: "/assets/categoriesNotactive.svg",
    label: "Apps",
  },
  {
    activeIcon: "/assets/ServicesActive.svg",
    inactiveIcon: "/assets/ServicesNotActive.svg",
    label: "Services",
  },
  {
    activeIcon: "/assets/MessengerActive.svg",
    inactiveIcon: "/assets/MessengerNotActive.svg",
    label: "Teams",
  },
  {
    activeIcon: "/assets/plus.svg",
    inactiveIcon: "/assets/plusNotactive.svg",
    label: "Add", // This triggers the modal
  },
];

const navigationItems2 = [
  {
    activeIcon: "/assets/messageActive.svg",
    inactiveIcon: "/assets/messageNotActive.svg",
    label: "Support",
  },
  {
    activeIcon: "/assets/KnowledgeActive.svg",
    inactiveIcon: "/assets/KnowledgeActive.svg",
    label: "KHub",
  },
];

const SideView = () => {
  const [activeLabel, setActiveLabel] = useState("/");
  const [hoveredLabel, setHoveredLabel] = useState(null);
  const [showModal, setShowModal] = useState(false); // For custom modal visibility

  // Track active route using window.location.pathname
  useEffect(() => {
    setActiveLabel(window.location.pathname);
  }, [window.location.pathname]);

  // Handle Custom Modal
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="w-[135px] h-full flex flex-col justify-between items-center gap-[294px]">
      <div className="h-[336.60px] w-full flex flex-col justify-start items-center">
        <Nav className="flex flex-col items-center">
          {navigationItems.map((item, index) => (
            <Nav.Link
              key={index}
              onClick={() => {
                if (item.label === "Add") {
                  handleShow(); // Show modal when "Add" is clicked
                } else {
                  setActiveLabel(item.label); // Only navigate for other items
                  window.location.href = item.label; // Perform navigation
                }
              }}
              onMouseEnter={() => setHoveredLabel(item.label)}
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
                  <div className="text-sm">{item.label}</div>
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
            onMouseEnter={() => setHoveredLabel(item.label)}
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
                <div className="text-sm">{item.label}</div>
              )}
            </div>
          </Nav.Link>
        ))}
      </Nav>

      {/* Custom Modal */}
      <ShortcutModal show={showModal} onClose={handleClose}>
        <h2 className="text-[24.06px] font-avenir-heavy">Add Quick Access</h2>
        {/* Modal content goes here */}
      </ShortcutModal>
    </div>
  );
};

export default SideView;
