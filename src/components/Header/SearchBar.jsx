
import React from "react";

const SearchBar = ({ setLgShow }) => {
  return (
    <div className="relative flex items-center gap-2 w-[420px] h-[50px] mx-auto">
      <form className="w-full flex items-center">
        <label htmlFor="searchInput" className="sr-only">
          Search
        </label>
        
       
        <div className="absolute left-3">
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
          type="search"
          id="searchInput"
          placeholder="Search"
          className="w-full pl-10 h-[50px] pr-4 py-2 border border-gray-300 opacity-50 rounded-full shadow-sm focus:outline-none focus:border-blue-500"
          onClick={() => setLgShow(true)} 
        />
      </form>
    </div>
  );
};

export default SearchBar;

