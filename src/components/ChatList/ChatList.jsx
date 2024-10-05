// import React from "react";

// const ChatList = () => {
//   const pinnedChats = [
//     {
//       avatar: "/assets/Messenger/Avatar/Avatar1.png",
//       userName: "Ahmed Alghaabi",
//       timestamp: "01:47 PM",
//       lastMessage: "I have reviewed with Ibrahim el mansoor is a asdas",
//     },
//     {
//       avatar: "/assets/Messenger/Avatar/Avatar2.png",
//       userName: "Mahmoud Alaam",
//       timestamp: "01:43 PM",
//       lastMessage: "Thanks, that would be great.",
//     },
//     {
//       avatar: "/assets/Messenger/Avatar/Avatar3.png",
//       userName: "Fatima Al Oraby",
//       timestamp: "Yesterday",
//       lastMessage: "I haven't checked available time...",
//     },
//     {
//       avatar: "/assets/Messenger/Avatar/Avatar4.png",
//       userName: "Malek Al Battah",
//       timestamp: "12:00 PM",
//       lastMessage: "Yes, please proceed.",
//     },
//   ];

//   const recentChats = [
//     {
//       avatar: "/assets/Messenger/Avatar/Avatar5.png",
//       userName: "Emiliano Ceballos",
//       timestamp: "01:47 PM",
//       lastMessage: "I reviewed with Ibrahim el mansoor...",
//     },
//     {
//       avatar: "/assets/Messenger/Avatar/Avatar6.png",
//       userName: "Marie Beaudouin",
//       timestamp: "01:43 PM",
//       lastMessage: "Sounds good?",
//     },
//     {
//       avatar: "/assets/Messenger/Avatar/Avatar7.png",
//       userName: "Alice Wonder",
//       timestamp: "Yesterday",
//       lastMessage: "I haven't checked available time...",
//     },
//     {
//       avatar: "/assets/Messenger/Avatar/Avatar8.png",
//       userName: "Oscar Krogh",
//       timestamp: "12:00 PM",
//       lastMessage: "Yes, please proceed.",
//     },
//     {
//       avatar: "/assets/Messenger/Avatar/Avatar8.png",
//       userName: "Oscar Krogh",
//       timestamp: "12:00 PM",
//       lastMessage: "Yes, please proceed.",
//     },
//     {
//       avatar: "/assets/Messenger/Avatar/Avatar8.png",
//       userName: "Oscar Krogh",
//       timestamp: "12:00 PM",
//       lastMessage: "Yes, please proceed.",
//     },
//   ];

//   return (
//     <section className="bg-white rounded-[14px] max-w-md flex flex-col justify-start mx-auto p-[24px]">
//       {/* Sticky Header */}
//       <header className="border-b border-border flex flex-row w-full items-center justify-between text-black pb-[24px] sticky top-0 bg-white z-10">
//         <div className="flex flex-row justify-between items-center gap-[5px]">
//           <h2 className="!m-0 text-[24.06px] font-avenir-heavy">Chat</h2>
//           <img src="/assets/Messenger/Cheveron-down.svg" alt="Cheveron" />
//         </div>

//         <div className="flex flex-row justify-between items-center gap-[16px]">
//           <img src="/assets/Messenger/Filter.svg" alt="Filter" />
//           <img src="/assets/Messenger/New-chat.svg" alt="New" />
//         </div>
//       </header>

//       {/* Pinned Chats with Scroll */}
//       <div className="flex flex-col justify-start gap-[14px] pt-[24px]">
//         <div className="flex flex-row justify-start items-center gap-[4px]">
//           <img
//             className="object-contain w-[14px]"
//             src="/assets/Services/chevron-down.svg"
//             alt="Chevron"
//           />
//           <p className="!m-0 p-0 font-avenir-heavy text-[14.43px] text-gray ">
//             Pinned
//           </p>
//         </div>

//         {/* Scrollable Pinned Chats */}
//         <div className="max-h-[347.64px] overflow-y-auto">
//           {pinnedChats.map((chat, index) => (
//             <div
//               key={index}
//               className="flex flex-row justify-start p-[14.43px] hover:bg-[#ECEEF4] rounded-[9.62px] items-center gap-[22px]"
//             >
//               <img
//                 className="object-contain w-[64.95px]"
//                 src={chat.avatar}
//                 alt={chat.userName}
//               />
//               <div className="gap-[10px] flex flex-col justify-between">
//                 <div className="flex flex-col justify-between gap-[14px]">
//                   <div className="flex flex-row justify-between">
//                     <h3 className="!m-0 font-avenir-heavy text-[19.24px] text-black">
//                       {chat.userName}
//                     </h3>
//                     <h3 className="!m-0 font-avenir-heavy text-[16.84px] text-black">
//                       {chat.timestamp}
//                     </h3>
//                   </div>
//                 </div>
//                 <p className="!m-0 truncate p-0 text-black font-avenir-heavy w-[286px] text-[14.43px]">
//                   {chat.lastMessage}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Recent Chats with Scroll */}
//       <div className="flex flex-col justify-start gap-[14px] pt-[24px]">
//         <div className="flex flex-row justify-start items-center gap-[4px]">
//           <img
//             className="object-contain w-[14px]"
//             src="/assets/Services/chevron-down.svg"
//             alt="Chevron"
//           />
//           <p className="!m-0 p-0 font-avenir-heavy text-[14.43px] text-gray ">
//             Recent
//           </p>
//         </div>

//         {/* Scrollable Recent Chats */}
//         <div className="max-h-[300px] overflow-y-auto">
//           {recentChats.map((chat, index) => (
//             <div
//               key={index}
//               className="flex flex-row justify-start p-[14.43px] hover:bg-[#ECEEF4] rounded-[9.62px] items-center gap-[22px]"
//             >
//               <img
//                 className="object-contain w-[64.95px]"
//                 src={chat.avatar}
//                 alt={chat.userName}
//               />
//               <div className="gap-[10px] flex flex-col justify-between">
//                 <div className="flex flex-col justify-between gap-[14px]">
//                   <div className="flex flex-row justify-between">
//                     <h3 className="!m-0 font-avenir-heavy text-[19.24px] text-black">
//                       {chat.userName}
//                     </h3>
//                     <h3 className="!m-0 font-avenir-heavy text-[16.84px] text-black">
//                       {chat.timestamp}
//                     </h3>
//                   </div>
//                 </div>
//                 <p className="!m-0 truncate p-0 text-black font-avenir-heavy w-[286px] text-[14.43px]">
//                   {chat.lastMessage}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ChatList;

import React, { useState } from "react";

const ChatList = () => {
  // State to track selected chat
  const [selectedChat, setSelectedChat] = useState(null);

  const pinnedChats = [
    {
      avatar: "/assets/Messenger/Avatar/Avatar1.png",
      userName: "Ahmed Alghaabi",
      timestamp: "01:47 PM",
      lastMessage:
        "I have reviewed with Ibrahim el mansoor brought good impact over the logistics",
    },
    {
      avatar: "/assets/Messenger/Avatar/Avatar2.png",
      userName: "Mahmoud Alaam",
      timestamp: "01:43 PM",
      lastMessage: "Thanks, that would be great.",
    },
    {
      avatar: "/assets/Messenger/Avatar/Avatar3.png",
      userName: "Fatima Al Oraby",
      timestamp: "Yesterday",
      lastMessage: "I haven't checked available time...",
    },
    {
      avatar: "/assets/Messenger/Avatar/Avatar4.png",
      userName: "Malek Al Battah",
      timestamp: "12:00 PM",
      lastMessage: "Yes, please proceed.",
    },
  ];

  const recentChats = [
    {
      avatar: "/assets/Messenger/Avatar/Avatar5.png",
      userName: "Emiliano Ceballos",
      timestamp: "01:47 PM",
      lastMessage: "I reviewed with Ibrahim el mansoor...",
    },
    {
      avatar: "/assets/Messenger/Avatar/Avatar6.png",
      userName: "Marie Beaudouin",
      timestamp: "01:43 PM",
      lastMessage: "Sounds good?",
    },
    {
      avatar: "/assets/Messenger/Avatar/Avatar7.png",
      userName: "Alice Wonder",
      timestamp: "Yesterday",
      lastMessage: "I haven't checked available time...",
    },
    {
      avatar: "/assets/Messenger/Avatar/Avatar8.png",
      userName: "Oscar Krogh",
      timestamp: "12:00 PM",
      lastMessage: "Yes, please proceed.",
    },
  ];

  // Handle chat selection
  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <div className="flex flex-row">
      {/* Chat List Section */}
      <section className="bg-white rounded-[14px] max-w-md flex flex-col justify-start mx-auto p-[24px]">
        <header className="border-b border-border flex flex-row w-full items-center justify-between text-black pb-[24px] sticky top-0 bg-white z-10">
          <div className="flex flex-row justify-between items-center gap-[5px]">
            <h2 className="!m-0 text-[24.06px] font-avenir-heavy">Chat</h2>
            <img src="/assets/Messenger/Cheveron-down.svg" alt="Cheveron" />
          </div>
          <div className="flex flex-row justify-between items-center gap-[16px]">
            <img src="/assets/Messenger/Filter.svg" alt="Filter" />
            <img src="/assets/Messenger/New-chat.svg" alt="New" />
          </div>
        </header>

        {/* Pinned Chats with Scroll */}
        <div className="flex flex-col justify-start gap-[14px] pt-[24px]">
          <div className="flex flex-row justify-start items-center gap-[4px]">
            <img
              className="object-contain w-[14px]"
              src="/assets/Services/chevron-down.svg"
              alt="Chevron"
            />
            <p className="!m-0 p-0 font-avenir-heavy text-[14.43px] text-gray ">
              Pinned
            </p>
          </div>
          <div className="max-h-[347.64px] overflow-y-auto">
            {pinnedChats.map((chat, index) => (
              <div
                key={index}
                className="flex flex-row justify-start p-[14.43px] hover:bg-[#ECEEF4] rounded-[9.62px] items-center gap-[22px] cursor-pointer"
                onClick={() => handleChatSelect(chat)} // Handle chat click
              >
                <img
                  className="object-contain w-[64.95px]"
                  src={chat.avatar}
                  alt={chat.userName}
                />
                <div className="gap-[10px] flex flex-col justify-between">
                  <div className="flex flex-col justify-between gap-[14px]">
                    <div className="flex flex-row justify-between">
                      <h3 className="!m-0 font-avenir-heavy text-[19.24px] text-black">
                        {chat.userName}
                      </h3>
                      <h3 className="!m-0 font-avenir-heavy text-[16.84px] text-black">
                        {chat.timestamp}
                      </h3>
                    </div>
                  </div>
                  <p className="!m-0 truncate p-0 text-black font-avenir-heavy w-[286px] text-[14.43px]">
                    {chat.lastMessage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Chats with Scroll */}
        <div className="flex flex-col justify-start gap-[14px] pt-[24px]">
          <div className="flex flex-row justify-start items-center gap-[4px]">
            <img
              className="object-contain w-[14px]"
              src="/assets/Services/chevron-down.svg"
              alt="Chevron"
            />
            <p className="!m-0 p-0 font-avenir-heavy text-[14.43px] text-gray ">
              Recent
            </p>
          </div>
          <div className="max-h-[300px] overflow-y-auto">
            {recentChats.map((chat, index) => (
              <div
                key={index}
                className="flex flex-row justify-start p-[14.43px] hover:bg-[#ECEEF4] rounded-[9.62px] items-center gap-[22px] cursor-pointer"
                onClick={() => handleChatSelect(chat)} // Handle chat click
              >
                <img
                  className="object-contain w-[64.95px]"
                  src={chat.avatar}
                  alt={chat.userName}
                />
                <div className="gap-[10px] flex flex-col justify-between">
                  <div className="flex flex-col justify-between gap-[14px]">
                    <div className="flex flex-row justify-between">
                      <h3 className="!m-0 font-avenir-heavy text-[19.24px] text-black">
                        {chat.userName}
                      </h3>
                      <h3 className="!m-0 font-avenir-heavy text-[16.84px] text-black">
                        {chat.timestamp}
                      </h3>
                    </div>
                  </div>
                  <p className="!m-0 truncate p-0 text-black font-avenir-heavy w-[286px] text-[14.43px]">
                    {chat.lastMessage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedChat && (
        <section
          className="bg-white rounded-[14px] p-[24px] ml-[20px] w-[942.98px] absolute  shadow-[0px_2.40556px_7.21667px_#C2C5D4] "
          style={{ left: "calc(95% + 20px)" }}
        >
          <div className="border-b border-border flex flex-row w-full items-center justify-between text-black pb-[24px]">
            <div className="absolute right-[860px] top-[80px]">
              {/* Verified Badge */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-0 right-0 transform translate-x-1 translate-y-1 z-10" // Set z-10 to ensure it's on top
              >
                <g clipPath="url(#clip0_5230_11625)">
                  <rect
                    x="2.02734"
                    y="1.99316"
                    width="12.0278"
                    height="12.0278"
                    rx="6.01389"
                    fill="white"
                  />
                  <path
                    d="M8.04123 2.3709C8.59329 2.3709 9.12381 2.44334 9.6328 2.5882C10.1418 2.73307 10.6195 2.93666 11.0658 3.19899C11.5121 3.46131 11.9174 3.77649 12.2815 4.14453C12.6495 4.50865 12.9647 4.91389 13.227 5.36023C13.4894 5.80657 13.693 6.28424 13.8378 6.79323C13.9827 7.30221 14.0551 7.83274 14.0551 8.38479C14.0551 8.93293 13.9827 9.46346 13.8378 9.97636C13.693 10.4853 13.4894 10.963 13.227 11.4094C12.9647 11.8557 12.6495 12.2629 12.2815 12.6309C11.9174 12.995 11.5121 13.3083 11.0658 13.5706C10.6195 13.8329 10.1398 14.0365 9.62693 14.1814C9.11794 14.3262 8.58937 14.3987 8.04123 14.3987C7.49309 14.3987 6.96257 14.3262 6.44967 14.1814C5.94068 14.0365 5.46301 13.8329 5.01667 13.5706C4.57033 13.3083 4.16314 12.995 3.7951 12.6309C3.43098 12.2629 3.11775 11.8557 2.85543 11.4094C2.5931 10.963 2.38951 10.4853 2.24464 9.97636C2.09978 9.46346 2.02734 8.93293 2.02734 8.38479C2.02734 7.83665 2.09978 7.30809 2.24464 6.7991C2.38951 6.2862 2.5931 5.80657 2.85543 5.36023C3.11775 4.91389 3.43098 4.50865 3.7951 4.14453C4.16314 3.77649 4.57033 3.46131 5.01667 3.19899C5.46301 2.93666 5.94068 2.73307 6.44967 2.5882C6.96257 2.44334 7.49309 2.3709 8.04123 2.3709ZM10.0204 6.6464C9.8638 6.6464 9.73068 6.70122 9.62105 6.81085L7.49505 8.94859L6.73744 8.19686C6.62781 8.08723 6.49665 8.03242 6.34395 8.03242C6.26956 8.03242 6.19909 8.04808 6.13253 8.0794C6.06597 8.11072 6.00528 8.15379 5.95047 8.2086C5.89957 8.2595 5.85846 8.31823 5.82713 8.38479C5.79581 8.45135 5.78015 8.52183 5.78015 8.59622C5.78015 8.75283 5.83497 8.88595 5.94459 8.99558L7.09569 10.1467C7.20532 10.2563 7.33844 10.3111 7.49505 10.3111C7.65166 10.3111 7.78478 10.2563 7.89441 10.1467L10.4198 7.60956C10.5294 7.49994 10.5842 7.36682 10.5842 7.21021C10.5842 7.13581 10.5686 7.06534 10.5372 6.99878C10.5059 6.93222 10.4628 6.87349 10.408 6.82259C10.3571 6.76778 10.2984 6.72471 10.2318 6.69339C10.1653 6.66206 10.0948 6.6464 10.0204 6.6464Z"
                    fill="#6BB700"
                  />
                </g>
                <rect
                  x="1.42595"
                  y="1.39178"
                  width="13.2306"
                  height="13.2306"
                  rx="6.61528"
                  stroke="white"
                  strokeWidth="1.20278"
                />
                <defs>
                  <clipPath id="clip0_5230_11625">
                    <rect
                      x="2.02734"
                      y="1.99316"
                      width="12.0278"
                      height="12.0278"
                      rx="6.01389"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="relative w-[64.95px] h-[64.95px] overflow-hidden rounded-full">
              {/* Avatar with SVG mask */}
              <svg
                viewBox="0 0 100 100"
                className="absolute top-0 left-0 w-full h-full"
              >
                <defs>
                  <pattern
                    id="img"
                    patternUnits="userSpaceOnUse"
                    width="100"
                    height="100"
                  >
                    <image
                      xlinkHref={selectedChat.avatar}
                      x="-25"
                      width="150"
                      height="100"
                    />
                  </pattern>
                </defs>
                <polygon
                  points="50 1 95 25 95 75 50 99 5 75 5 25"
                  fill="url(#img)"
                />
              </svg>
            </div>
            <h2 className="!m-0 text-[24.06px] font-avenir-heavy">
              {selectedChat.userName}
            </h2>
            <img src="/assets/Messenger/utility.svg" alt="utility" />
          </div>
          <div className="flex flex-col justify-start gap-[14px] pt-[24px]">
            <p className="font-avenir-heavy text-[16px]">
              {selectedChat.lastMessage}
            </p>
            <div className="flex flex-row justify-end">
              <div className="pt-[490px]">
                <button className="rounded-[8px] h-[37px] w-[90.21px] bg-[#E5E5F1]">
                  Sign out
                </button>
              </div>
            </div>
          </div>
          <footer className="h-[115.47px]">
            <img src="/assets/Messenger/footer.svg" alt="" />
          </footer>
        </section>
      )}
    </div>
  );
};

export default ChatList;
