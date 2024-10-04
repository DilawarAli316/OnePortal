import React from "react";

const UserGuideSection = ({ data, title }) => {
  return (
    <div className="flex flex-col gap-[32px] w-[1509.49px]">
      <h2 className="p-0 !m-0 font-avenir-heavy text-[28.87px] text-black text-left">
        {title}
      </h2>
      {/* Cards Container */}
      <div className="grid grid-cols-4 grid-rows-2 gap-[29px] md:gap-[29px]">
        {/* Individual Card */}
        {data.map((card) => (
          <div
            key={card.id}
            className="flex flex-col p-[28.87px] gap-[14.43px] w-[355.72px] bg-white rounded-[24.05px] transition-all duration-300 ease-in-out hover:shadow-lg"
          >
            <div className="flex flex-col items-start gap-[20px]">
              <div className="flex flex-row justify-start items-center gap-[8px] w-full">
                <img
                  src={card.imgSrc}
                  alt="service icon"
                  className="service image"
                />
                <h3 className="!m-0 p-0 font-avenir-heavy text-[21.65px] text-black">
                  {card.title}
                </h3>
              </div>
              <p className="!m-0 p-0 font-avenir-book text-gray text-[14.43px]">
                {card.description}
              </p>
              <p className="!m-0 p-0 font-avenir-heavy text-[16.84px]">
                {card.additionalInfo}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserGuideSection;
