// src/components/VideoBackground/VideoBackground.js
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const ScreenSaver = () => {
  const history = useHistory();

  //   Handle user activity to navigate to the login page
  //   const handleActivity = () => {
  //       window.location.href = "/intro";
  //     if (localStorage.getItem("accessToken")) {
  //     } else {
  //       window.location.href = "/login";
  //     }
  //   };

  //   useEffect(() => {
  //     // Add event listeners for detecting movement
  //     window.addEventListener("mousemove", handleActivity);
  //     window.addEventListener("keydown", handleActivity);

  //     return () => {
  //       // Cleanup event listeners when the component unmounts
  //       window.removeEventListener("mousemove", handleActivity);
  //       window.removeEventListener("keydown", handleActivity);
  //     };
  //   }, []);
  return (
    <>
      <div
        className="flex flex-row w-[85px]!bg-brand !font-avenir-medium rounded-full"
        style={{
          background: "#045257",
          position: "absolute",
          bottom: "15px",
          left: "50%",
          transform: "translateX(-50%)", // Centers the button
          zIndex: "11",
          fontSize: "2.5rem",
          padding: "2.6rem",
        }}
        onClick={() => (window.location.href = "/Home")}
      >
        <div className="text-white font-avenir-medium pr-2"> Explore More </div>
        <img src="/assets/swipe-indicator.svg" alt="" />
      </div>

      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-10"
      >
        <source src="/assets/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default ScreenSaver;
