// Inbox.js
import React from "react";
import TaskCard from "./TaskCard"; // Import TaskCard if needed

const Inbox = () => {
  const cardItems = [
    {
      status: "active",
      title: "Infrastructure Maintenance",
      description: "As part of our continuous efforts to improve performance",
      sender: "Service Desk",
      time: "Today, 10:00 AM",
      dotColor: "#27BD50",
      bgColor: "#F6FAF7",
    },
    {
      status: "inactive",
      title: "System Update",
      description: "Scheduled system update for performance enhancement",
      sender: "Tech Team",
      time: "Yesterday, 4:30 PM",
      dotColor: "#D0D4E4",
    },
    {
      status: "active",
      title: "New Security Patch",
      description: "Critical security patch will be applied today",
      sender: "Security Team",
      time: "Today, 11:30 AM",
      dotColor: "#27BD50",
    },
    {
      status: "inactive",
      title: "System Update",
      description: "Scheduled system update for performance enhancement",
      sender: "Tech Team",
      time: "Yesterday, 4:30 PM",
      dotColor: "#D0D4E4",
    },
  ];

  return (
    <div>
      {cardItems.map((item, index) => (
        <div key={index} style={{ backgroundColor: item.bgColor }} className="card">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>{item.sender}</p>
          <p>{item.time}</p>
          <div style={{ backgroundColor: item.dotColor, width: '10px', height: '10px', borderRadius: '50%' }}></div>
        </div>
      ))}
    </div>
  );
};

export default Inbox;
