import React, { useState } from 'react';
import FilesModal from './FilesModal.js'; // Import the TaskModal component

const FilesCard = () => {
  // State to manage the modal visibility and selected item
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Sample items
  const items = [
    {
      id: 1,
      name: "Admin Guide",
     
      date: "Today",
      imgSrc: "/assets/Home/Files/Files.svg",
    },
    {
      id: 2,
      name: "SDD Logo Guidelines...",
   
      date: "10 Days ago",
      imgSrc: "/assets/Home/Files/Files.svg",
    },
  ];

  // Function to open the modal and set the selected item
  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div>
      <div className="w-[387.29px]  hidden flex flex-col md:block rounded-[24.06px] bg-white transition-transform hover:scale-103 card-01">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row justify-between">
            <h3 className="text-[16.84px] font-Avenir-Heavy mb-2">Files</h3>
          </div>
          <img src="/assets/Home/Files/File.svg" alt="File" />
        </div>
        <div className="flex flex-col">
          {items.map((item) => (
            <div
              key={item.id}
              className="self-stretch p-[9.62px] bg-[#F6F6FA] justify-between items-center inline-flex rounded-[9.62px] cursor-pointer transition-colors hover:bg-[#E0F7FA]"
              onClick={() => openModal(item)} // Open modal on click
            >
              <div className="flex flex-row gap-[9.62px] items-center gap-[4.81]">
                <img src={item.imgSrc} alt="Files" />
                <div className="text-black text-sm font-avenir">
                  {item.name}
                </div>
              </div>
     
              <div className="font-avenir-light text-[#D0D4E4] text-[12px]">
                {item.date}
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <FilesModal isOpen={isModalOpen} onClose={closeModal} item={selectedItem} />
    </div>
  );
};

export default FilesCard;
