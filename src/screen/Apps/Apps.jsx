import React, { useState, useEffect } from "react";

const Apps = () => {
  const [animate, setAnimate] = useState(false);
  const [activeTab, setActiveTab] = useState("All Apps"); // State for active tab

  const serviceCardsData = [
    {
      icon: "/assets/Services/tiles/announcements.svg",
      title: "Announcements",
      description: "Send mass publications to your group, department, company",
      category: "All Apps",
    },
    {
      icon: "/assets/Services/tiles/link.svg",
      title: "Links",
      description: "Send mass publications to your group, department, company",
      category: "All Apps",
    },
    {
      icon: "/assets/Services/tiles/coffee.svg",
      title: "Coffee App",
      description: "Send mass publications to your group, department, company.",
      category: "Workspace",
    },
    {
      icon: "/assets/Services/tiles/sign.svg",
      title: "Sign",
      description: "Send mass publications to your group, department, company",
      category: "Workspace",
    },
    {
      icon: "/assets/Services/tiles/message.svg",
      title: "Message",
      description: "Send mass publications to your group, department, company",
      category: "Workspace",
    },
    {
      icon: "/assets/Services/tiles/files.svg",
      title: "Files",
      description: "Send mass publications to your group, department, company",
      category: "Workspace",
    },
    {
      icon: "/assets/Services/tiles/connect.svg",
      title: "Connect",
      description: "Send mass publications to your group, department, company",
      category: "Workspace",
    },

    {
      icon: "/assets/Services/tiles/mail.svg",
      title: "Mail",
      description: "Send mass publications to your group, department, company",
      category: "All Apps",
    },
    {
      icon: "/assets/Services/tiles/learning.svg",
      title: "Learning",
      description: "Send mass publications to your group, department, company",
      category: "All Apps",
    },
  ];

  const microsoftService = [
    {
      icon: "/assets/Services/tiles/ms-mail.svg",
      title: "MS Mail",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      category: "Microsoft",
    },
    {
      icon: "/assets/Services/tiles/ms-excel.svg",
      title: "MS Excel",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      category: "Microsoft",
    },
    {
      icon: "/assets/Services/tiles/ms-word.svg",
      title: "MS Word",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      category: "Microsoft",
    },
    {
      icon: "/assets/Services/tiles/ms-powerpoint.svg",
      title: "MS Powerpoint",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      category: "Microsoft",
    },
    {
      icon: "/assets/Services/tiles/ms-sharepoint.svg",
      title: "MS Sharepoint",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      category: "Microsoft",
    },
    {
      icon: "/assets/Services/tiles/ms-onenote.svg",
      title: "MS OneNote",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      category: "Microsoft",
    },
    {
      icon: "/assets/Services/tiles/ms-calender.svg",
      title: "MS Calendar",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      category: "Microsoft",
    },
    {
      icon: "/assets/Services/tiles/ms-analytics.svg",
      title: "MS Analytics",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      category: "Microsoft",
    },
    {
      icon: "/assets/Services/tiles/ms-onedrive.svg",
      title: "MS OneDrive",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      category: "Microsoft",
    },
  ];

  // Function to filter service cards based on the active tab
  const filteredCards = serviceCardsData.filter(
    (card) =>
      activeTab === "All Apps" ||
      activeTab === "Workspace" ||
      card.category === activeTab
  );

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="flex flex-col pt-[55px] items-center pb-[150px]" style={{zIndex : 3, position : 'relative'}}>
      <div
        className={`w-[1508.57px] h-[849.54px] rounded-[20px] transition-all duration-[3600ms] ease-in-out ${
          animate
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[160px]"
        }`}
      >
        <div className="flex flex-col justify-start items-center gap-[25px]">
          <div className="flex flex-row justify-between items-start w-full">
            {/* left navigation here */}
            <div className="w-[364px]">
              <div className="flex flex-col gap-[46px]">
                <div>
                  <h5 className="font-avenir-black text-[24.06px] text-black">
                    Categories
                  </h5>
                </div>
                <div className="flex flex-col items-start align-left">
                  <h5
                    className={`text-[#777FA1] font-avenir-medium text-[21.65px] cursor-pointer ${
                      activeTab === "All Apps" ? "text-black" : ""
                    }`}
                    onClick={() => setActiveTab("All Apps")}
                  >
                    All Apps
                  </h5>
                  <h5
                    className={`text-[#777FA1] font-avenir-medium text-[21.65px] cursor-pointer ${
                      activeTab === "Workspace" ? "text-black" : ""
                    }`}
                    onClick={() => setActiveTab("Workspace")}
                  >
                    Workspace(20)
                  </h5>
                  <h5
                    className={`text-[#777FA1] font-avenir-medium text-[21.65px] cursor-pointer ${
                      activeTab === "Microsoft" ? "text-black" : ""
                    }`}
                    onClick={() => setActiveTab("Microsoft")}
                  >
                    Microsoft(20)
                  </h5>
                </div>
              </div>
            </div>

            {/* right navigation here */}
            <div>
              <div className="flex flex-row justify-between w-full">
                <div>
                  <h5 className="font-avenir-black text-[24.06px] text-black">
                    Workspace
                  </h5>
                </div>
                <div className="pl-4 flex flex-row justify-between items-center gap-[11px]">
                  <p className="!m-0 font-avenir-roman text-[16.84px] text-black">
                    Filter
                  </p>
                  <div className="flex flex-row gap-[7px] px-[8px] box-border justify-center items-center h-[39px] bg-white border border-[#E7E9EB] rounded-[120.278px]">
                    <div>
                      <h5 className="!m-0 font-avenir-roman text-[16.84px] text-[#888FAD]">
                        All
                      </h5>
                    </div>
                    <img
                      className="object-contain"
                      src="/assets/Services/chevron-down.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-[20px] justify-items-center items-start mt-[30px]">
                {activeTab === "Microsoft"
                  ? microsoftService.map((card, index) => (
                      <ServiceCard
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                      />
                    ))
                  : filteredCards.map((card, index) => (
                      <ServiceCard
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                      />
                    ))}
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between w-full">
            <div className="pl-4 flex flex-row justify-between items-center gap-[11px]">
              <p className="!m-0 font-avenir-roman text-[16.84px] text-[#888FAD] ">
                Results per page
              </p>

              <div className="flex flex-row gap-[7px] px-[8px] box-border justify-center items-center h-[39px] bg-white border border-[#E7E9EB] rounded-[120.278px]">
                <div className="">
                  <h5 className="!m-0 font-avenir-roman text-[16.84px] text-[#888FAD]">
                    12
                  </h5>
                </div>
                <img
                  className="object-contain"
                  src="/assets/Services/chevron-down.svg"
                  alt=""
                />
              </div>
            </div>

            <div className="flex flex-row items-center gap-2 pr-4">
              <div className="box-border flex justify-center items-center w-[40.05px] rounded-3 h-[36.08px] bg-[#F1F2F7] border border-[#E7E9EB]">
                <img
                  className="object-contain"
                  src="/assets/Services/chevron-left.svg"
                  alt=""
                />
              </div>
              <p className="!m-0 box-border flex justify-center items-center w-[40.05px] rounded-3 h-[36.08px] bg-white border border-[#777FA1]">
                1
              </p>
              <p className="!m-0 box-border flex justify-center items-center w-[40.05px] rounded-3 h-[36.08px] bg-white border border-[#E7E9EB]">
                2
              </p>
              <p className="!m-0 box-border flex justify-center items-center w-[40.05px] rounded-3 h-[36.08px] bg-white border border-[#E7E9EB]">
                3
              </p>
              <p className="!m-0 box-border flex justify-center items-center w-[40.05px] rounded-3 h-[36.08px] bg-white border border-[#E7E9EB]">
                4
              </p>

              <div className="box-border flex justify-center items-center w-[40.05px] rounded-3 h-[36.08px] bg-[#F1F2F7] border border-[#E7E9EB]">
                <img
                  className="object-contain"
                  src="/assets/Services/chevron-right.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        style={{
          position: "fixed",
          bottom: "40px",
          right: "40px",
        }}
        src="/assets/Ai-Test.svg"
      />
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col p-[38.4889px] gap-[9.62px] w-[358.43px] h-[242.89px] bg-white rounded-[24px] transition-all duration-300 ease-in-out hover:shadow-lg relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-row justify-between items-center w-full">
        <img src={icon} alt="service icon" className="pb-[19.24px]" />
        {hovered && (
          
          <img src="/assets/Services/tiles/dotss.svg" width={'43px'} height={'28px'} />
          )}
        {/* {hovered && (
          <div className="flex gap-[10px]">
          
            <div className="flex flex-row justify-center items-center p-[9.62222px_19.2444px] gap-[12.03px] w-[101.03px] h-[42.1px] bg-gradient-to-r from-[#65C169] to-[#46A8DC] rounded-[48.1111px]">
              <button className="text-white">Action 1</button>
            </div>
          </div>
        )} */}

      
      </div>
      <div className="gap-[10px]">
        <h3 className="font-avenir-heavy text-[21.65] text-black">{title}</h3>
        {hovered ? <div className="flex gap-[10px]">
            {/* Buttons shown on hover */}
            <div className="flex flex-row justify-center items-center p-[9.62222px_19.2444px] gap-[2.03px] w-[101.03px] h-[42.1px] bg-gradient-to-r from-[#65C169] to-[#46A8DC] rounded-[48.1111px]">
              <button className="text-white">Launch</button>
              <img src="/assets/Services/tiles/right-up.svg" width={16} height={16} />
            </div>
            <div className="flex flex-row justify-center items-center p-[9.62222px_19.2444px] gap-[2.03px]  h-[42.1px]">
              <button className="text-[#777FA1]">Discover now</button>
              <img src="/assets/Services/tiles/rightup-grey.svg" width={16} height={16} />
            </div>
          </div> :  <p className="font-avenir-roman text-[14.43px]">{description}</p>}
      </div>
    </div>
    // <div
    //   className="flex flex-col items-center justify-center h-[241px] w-[189px] rounded-[20px] border border-[#E7E9EB] bg-white cursor-pointer transition-transform duration-300 transform hover:scale-105"
    //   onMouseEnter={() => setHovered(true)}
    //   onMouseLeave={() => setHovered(false)}
    // >
    //   <img src={icon} alt={title} className="mb-3" />
    //   <h5 className="font-avenir-medium text-[20.06px] text-black">{title}</h5>
    //   <p className="font-avenir-roman text-[#777FA1] text-[15.94px] text-center">{description}</p>
    //   {hovered && (
    //     <div className="absolute top-0 left-0 right-0 bottom-0 bg-white opacity-60 rounded-[20px] z-10"></div>
    //   )}
    // </div>
  );
};

export default Apps;
