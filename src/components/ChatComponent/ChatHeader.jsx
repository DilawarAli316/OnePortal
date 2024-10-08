/**
 * This code was generated by Builder.io.
 */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBarsFilter,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

function ChatHeader() {
  return (
    <header className="flex gap-10 justify-between items-center pb-5 w-full text-base text-black whitespace-nowrap border-b border-slate-300">
      <div className="flex gap-1 items-start self-stretch my-auto">
        <h1 className="font-extrabold">Chat</h1>
        <FontAwesomeIcon
          icon={faAngleDown}
          className="font-black"
          aria-hidden="true"
        />
      </div>
      <nav className="flex gap-5 items-center self-stretch my-auto font-light">
        <button className="self-stretch my-auto" aria-label="Filter">
          <FontAwesomeIcon icon={faBarsFilter} />
        </button>
        <button className="self-stretch my-auto" aria-label="New message">
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
      </nav>
    </header>
  );
}

export default ChatHeader;
