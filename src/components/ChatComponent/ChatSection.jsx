/**
 * This code was generated by Builder.io.
 */
import React from "react";
import ChatItem from "./ChatItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function ChatSection({ title, chats }) {
  return (
    <section className="flex flex-col mt-3 w-full">
      <h2 className="flex gap-1 items-start self-start text-xs whitespace-nowrap text-slate-500">
        <FontAwesomeIcon
          icon={faAngleDown}
          className="font-black"
          aria-hidden="true"
        />
        <span className="font-extrabold">{title}</span>
      </h2>
      <ul className="flex flex-col mt-4 w-full">
        {chats.map((chat) => (
          <li key={chat.id}>
            <ChatItem {...chat} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ChatSection;
