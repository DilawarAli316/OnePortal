import React from "react";

const GlossarySection = ({ data, title }) => {
  return (
    <div className="flex items-center flex-col gap-[32px] w-[1509.49px]">
      <h2 className="p-0 !m-0 font-avenir-heavy text-[28.87px] text-black text-left">
        {title}
      </h2>
      {/* search and such */}
      <div className="flex flex-col justify-start items-center gap-[24.06px]">
      <div className="flex flex-row justify-between items-center px-[29px] w-[601.39px] h-[60.14px] bg-white rounded-[96.22px]">
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
        
        <input
          type="text"
          placeholder="Search"
          className="w-[601.39px] pl-[14.43px] h-full rounded-full text-[#AFAFAF] font-[Avenir] font-light text-[16.84px] items-center leading-[23px]
          "
        />
      
      </div>

        <p className="!m-0 p-0 font-avenir-book text-gray text-[14.43px]"># HyperCLOVA X    # Neurocloud     # Data Query    # B2B PRISM Live Studio    # Classic Path</p>

      </div>
      <div className="flex flex-col gap-[29px] w-[909.3px] h-auto">
        {data.map((card) => (
          <div
            key={card.id}
            className="flex flex-row items-center gap-[24.06px] bg-white p-[28.87px] rounded-[24.05px] w-[909.3px] h-[169.9px]"
          >
            <div className="flex flex-col">
              <h3 className="!m-0 p-0 font-avenir-heavy text-[16.84px] text-black">
                {card.title}
              </h3>
              <p className="!m-0 p-0 font-avenir-book text-gray text-[14.43px]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpattetuer adipiscing elit, sed diam nonummy
                nibh euismod tincidunt ut laoreet dolore .
              </p>
              <p className="!m-0 p-0 underline underline-offset-2 font-avenir-book text-skyblue text-[14.43px]">
                Read More
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlossarySection;
