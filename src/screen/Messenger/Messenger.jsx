import React from 'react'
import ChatList from "../../components/ChatList/ChatList";
import ChatRoom from "../../components/ChatRoom/ChatRoom";




const Teams = () => {
  return (
    <div>Teams
      <h1>hi there </h1>
      <ChatList />
      <ChatRoom />


      <img
                            style={{
                              position: "fixed",
                              bottom: "40px",
                              right: "40px",
                            }}
                            src="/assets/Ai-Test.svg"
                          />
    </div>
  )
}

export default Teams