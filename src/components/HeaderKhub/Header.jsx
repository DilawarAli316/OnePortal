import React from 'react';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const history = useHistory();

  return (
    <div className="absolute top-0 w-full h-[212.89px] bg-gradient-to-b from-[#E2E6EA] to-transparent">
      <button
        onClick={() => history.goBack()}
        className="absolute flex flex-col justify-center items-center 
          w-[48.11px] h-[48.11px] left-[28.87px] top-[137.12px] 
          bg-white bg-opacity-50 border border-white rounded-full 
          p-[14.4333px] hover:bg-opacity-60" // Tailwind classes for styling
      >
        <img src="/assets/Khub/angle-left.svg" alt="Back" className="h-[19px] w-[12px]" />
      </button>
    </div>
  );
};

export default Header;
