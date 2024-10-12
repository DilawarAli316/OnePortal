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
      <Button
        variant="dark"
        active
        size="lg"
        style={{
    position: "absolute",
    bottom: "15px",
    left: "50%",
    transform: "translateX(-50%)",  // Centers the button
    zIndex: "11",
    fontSize: "2.5rem",
    padding: "2.6rem",
  }}
        onClick={() =>  window.location.href = "/Home"}
      >
        Explore More
      </Button>

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
