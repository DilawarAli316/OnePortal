// import React, { useState, useEffect } from "react";

// const Services = () => {
//   const [animate, setAnimate] = useState(false);

//   // Array for button labels
//   const buttonLabels = [
//     "Digital Infrastructure",
//     "Operations Management",
//     "Government Experience",
//     "Training & Assessment",
//   ];

//   useEffect(() => {
//     // Trigger the animation when the component is mounted
//     setAnimate(true);
//   }, []);

//   return (
//     <div className="flex flex-col pt-[55px] items-center pb-[150px]">
//       <div
//         className={`w-[1508.57px] h-[849.54px] rounded-[20px] transition-all duration-[3600ms] ease-in-out ${
//           animate
//             ? "opacity-100 translate-y-0"
//             : "opacity-0 translate-y-[160px]"
//         }`}
//       >
//         <div className="flex flex-col justify-start items-center gap-[25px]">
//           <div className="flex flex-col justify-start items-center gap-[43px]">
//             <div className="object-contain">
//               <img src="/assets/Services/Banner.svg" alt="Team" />
//             </div>
//             <div className="object-contain">
//               <img src="/assets/Services/dots.svg" alt="Team" />
//             </div>
//           </div>
//           <div className="flex flex-row justify-center items-center gap-[20px] mt-[30px]">
//             <button className="flex justify-center items-center font-avenir-medium text-[16.84px p-[9.62222px_19.2444px] gap-[12.03px]  h-[42.24px] bg-[#202020] rounded-[48.1111px] text-white">
//               All
//             </button>

//             {buttonLabels.map((label, index) => (
//               <button
//                 key={index}
//                 className="flex font-avenir-medium text-[16.84px] justify-center items-center p-[9.62222px_19.2444px] gap-[12.03px] h-[42.24px] bg-[#EDF0F2] rounded-[48.1111px] text-black"
//               >
//                 {label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;


import React, { useState, useEffect } from "react";

const Services = () => {
  const [animate, setAnimate] = useState(false);

  // Array for button labels
  const buttonLabels = [
    "Digital Infrastructure",
    "Operations Management",
    "Government Experience",
    "Training & Assessment",
  ];

  // Service card data
  const serviceCardsData = [
    {
      icon: "/assets/Services/tiles/announcements.svg",
      title: "Announcements",
      description: "Send mass publications to your group, department, company",
    },
    {
      icon: "/assets/Services/tiles/link.svg",
      title: "Links",
      description: "Send mass publications to your group, department, company",
    },
    {
      icon: "/assets/Services/tiles/coffee.svg",
      title: "Coffee App",
      description: "Send mass publications to your group, department, company.",
    },
    {
      icon: "/assets/Services/tiles/sign.svg",
      title: "Sign",
      description: "Send mass publications to your group, department, company",
    },
    {
      icon: "/assets/Services/tiles/connect.svg",
      title: "Connect",
      description: "Send mass publications to your group, department, company",
    },
    {
      icon: "/assets/Services/tiles/files.svg",
      title: "Files",
      description: "Send mass publications to your group, department, company",
    },
    {
      icon: "/assets/Services/tiles/mail.svg",
      title: "Mail",
      description: "Send mass publications to your group, department, company",
    },
    {
      icon: "/assets/Services/tiles/learning.svg",
      title: "Learning",
      description: "Send mass publications to your group, department, company",
    },
  ];

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="flex flex-col pt-[55px] items-center pb-[150px]">
 
      <div
        className={`w-[1508.57px] h-[849.54px] rounded-[20px] transition-all duration-[3600ms] ease-in-out ${
          animate
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[160px]"
        }`}
      >
        <div className="flex flex-col justify-start items-center gap-[25px]">
          <div className="flex flex-col justify-start items-center gap-[43px]">
            <div className="object-contain">
              <img src="/assets/Services/Banner.svg" alt="Team" />
            </div>
            <div className="object-contain">
              <img src="/assets/Services/dots.svg" alt="Team" />
            </div>
          </div>

          {/* Button Row */}
          <div className="flex flex-row justify-center items-center gap-[20px] mt-[30px]">
            <button className="flex justify-center items-center font-avenir-medium text-[16.84px] p-[9.62222px_19.2444px] gap-[12.03px]  h-[42.24px] bg-[#202020] rounded-[48.1111px] text-white">
              All
            </button>

            {buttonLabels.map((label, index) => (
              <button
                key={index}
                className="flex font-avenir-medium text-[16.84px] justify-center items-center p-[9.62222px_19.2444px] gap-[12.03px] h-[42.24px] bg-[#EDF0F2] rounded-[48.1111px] text-black"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Service Cards Section */}
          <div className="flex flex-wrap gap-[20px] justify-center items-start mt-[30px]">
            {serviceCardsData.map((card, index) => (
              <ServiceCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>

          <div className="flex flex-row items-center justify-between w-full">
            <div className="pl-4 flex flex-row justify-between items-center gap-[11px]">
              <p className="!m-0 font-avenir-roman text-[16.84px] text-[#888FAD] ">
                Results per page
              </p>

              <div className="flex flex-row  gap-[7px] px-[8px] box-border justify-center items-center  h-[39px] bg-white border border-[#E7E9EB] rounded-[120.278px]">
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
        <img src={icon} alt="service icon" className="" />
        {hovered && (
          <div className="flex gap-[10px]">
            {/* Buttons shown on hover */}
            <div className="flex flex-row justify-center items-center p-[9.62222px_19.2444px] gap-[12.03px] w-[101.03px] h-[42.1px] bg-gradient-to-r from-[#65C169] to-[#46A8DC] rounded-[48.1111px]">
              <button className="text-white">Action 1</button>
            </div>
     
          </div>
        )}
      </div>
      <h3 className="font-avenir-heavy text-[21.65] text-black">{title}</h3>
      <p className="font-avenir-roman text-[14.43px]">{description}</p>
    </div>
  );
};

export default Services;
