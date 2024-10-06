import React, { useEffect } from "react";
import Header from "../../components/HeaderKhub/Header.jsx"; // Uncomment if needed
import UserGuideSection from "../../components/Khub/UserGuideSection";
import FAQsSection from "../../components/Khub/FAQsSection";
import GlossarySection from "../../components/Khub/GlossarySection";


const cardData = [
  {
    id: 1,
    imgSrc: "/assets/Khub/1.svg",
    title: "One portal",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod. ",
    additionalInfo: "53 Articles",
  },
  {
    id: 2,
    imgSrc: "/assets/Khub/2.svg",
    title: "Leave Process",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod. ",
    additionalInfo: "3 Articles",
  },
  {
    id: 3,
    imgSrc: "/assets/Khub/3.svg",
    title: "Tasks Guide",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod. ",
    additionalInfo: "53 Articles",
  },
  {
    id: 4,
    imgSrc: "/assets/Khub/4.svg",
    title: "Email",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod. ",
    additionalInfo: "4 Articles",
  },
  {
    id: 5,
    imgSrc: "/assets/Khub/5.svg",
    title: "Forms Guide",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod. ",
    additionalInfo: "12 Articles",
  },
  {
    id: 6,
    imgSrc: "/assets/Khub/6.svg",
    title: "Sign Guide",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod. ",
    additionalInfo: "10 Articles",
  },
  {
    id: 7,
    imgSrc: "/assets/Khub/7.svg",
    title: "Files Guide",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod. ",
    additionalInfo: "6 Articles",
  },
  {
    id: 8,
    imgSrc: "/assets/Khub/8.svg",
    title: "Entity Directory",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod. ",
    additionalInfo: "2 Articles",
  },
];

const Khub = ({setShowBackBtn}) => {
  useEffect(() => {
    setShowBackBtn(true)
  },[])
  return (
    <div className="flex flex-col justify-start gap-[72.17px] items-center">
      {/* <Header /> */}
      <div className="flex flex-col justify-start items-center w-full gap-[8px]">
        <div className="flex flex-row items-center">
          <h1 className="!m-0 font-avenir-book text-[33.68px] text-black">
            Explore our resources{" "}
          </h1>
          <h5 className="!m-0 pl-3 font-avenir-heavy text-[33.68px] text-black">
            library
          </h5>
        </div>
        <p className="p-0 !m-0 font-avenir-book text-[14.43px] text-gray">
          Acquire reliable information and gain the necessary insights to
          implement change and propel advancement
        </p>
      </div>

      {/* searchbar */}
      <div className="flex flex-row justify-between items-center px-7 w-[761.36px] h-[60.14px] bg-white rounded-[96.22px]">
        <input
          type="text"
          placeholder="Search"
          className="w-[90.21px] h-[14.43px] text-[#AFAFAF] font-[Avenir] font-light text-[16.84px] leading-[23px] flex"
        />
        <div className="left-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-[#BBBFD0]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.61 0 7.5 7.5 0 0010.61 0z"
            />
          </svg>
        </div>
      </div>

   
      <UserGuideSection data={cardData} title="User Guide" />
      <FAQsSection data={cardData} title="FAQs" />
      <GlossarySection data={cardData} title="Glossary" />

      
    </div>
  );
};

export default Khub;
