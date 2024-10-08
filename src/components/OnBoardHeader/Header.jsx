import React, { useState } from "react";
import SearchBar from "./SearchBar";
import UserActions from "./UserActions";
import SearchModal from "./SearchModal";

const OnBoardHeader = () => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <header className="w-full flex pb-10 items-center sticky absolute z-10 hover:z-50 top-0  bg-[linear-gradient(180deg,#E2E6EA_55.22%,rgba(226,230,234,0)_91.42%)]">
      <div className="w-full flex justify-between items-center  p-4">
       
        <img
          src="/assets/arabia.svg"
          alt="Arabia Logo"
          className="h-4"
        />
         <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f1ae652711b09c81cc50d2c0d7e87686d1476aaef17975546543a0b953da384?placeholderIfAbsent=true&apiKey=041020761c824046b3f5b318a397a746"
          alt="Company Logo"
          className="h-10"
        />

        {/* <div className="relative">
          <SearchBar setLgShow={setLgShow} />
          <SearchModal lgShow={lgShow} setLgShow={setLgShow} />
        </div> */}

        {/* <UserActions /> */}
      </div>
  
    </header>
  );
};

export default OnBoardHeader;
