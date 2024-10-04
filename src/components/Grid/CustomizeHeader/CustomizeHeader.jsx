import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Nav } from "react-bootstrap";
import styles from "./CustomizeHeader.css";
import NotificationCard from "./NotificationCard/NotificationCard";

const CustomizeHeader = ({bottom}) => {
  const location = useLocation();
  const history = useHistory();

  const isActive = (path) => {
    return location.pathname === path
      ? "!font-extrabold !text-[#000] "
      : "!text-[#777FA1]";
  };

  return (
    <div className=" ">
      <div className="flex flex-row justify-between mx-[48px]">
        <div className="flex flex-row ... gap-[24px]"  >
        <div className="flex flex-row ... gap-[24px]" style={bottom ? { position: "fixed", bottom: "40px", right: "40px" } : null}>

           <img src="/assets/Ai-Test.svg" alt="weather"   />
           <NotificationCard/>
        </div>
        {/* <img src="/assets/Home/weather.svg" alt="weather" />
         <div className="flex flex-col ... font-AvenirRegular justify-center ">
            <div>
              <p className="font-AvenirRegular text-[26px] m-0">
                Good Morning <b>Kasim!</b>{" "}
              </p>
            </div>

            <div className="flex leading-0 flex-row items-center justify-center text-[#777FA1] text-[17.75px]">
              <div className="pr-2">
                <img src="/assets/Home/bell-sm.svg" alt="Notification Bell" />
              </div>
              <p className="p-0 m-0">You have</p>
              <p className=" p-0 m-0 text-[#0764E6]">3 Notifications</p>
              <p className="p-0 m-0">waiting for your action today</p>
            </div>
          </div> */}
        </div>

        <div className="flex flex-row gap-2">
          <Nav.Link
            href={"/"}
            className={`m-0 !text-[16px] !p-[5px] ${isActive("/")}`}
          >
            Workspace
          </Nav.Link>
          <Nav.Link
            href={"/top-nav-team"}
            className={`m-0 !p-[5px] ${isActive("/top-nav-team")}`}
          >
            Team
          </Nav.Link>
          <Nav.Link
            href={"/overview"}
            className={`m-0 !p-[5px] ${isActive("/overview")}`}
          >
            Overview
          </Nav.Link>

          <Nav.Link
            href={"/customize"}
            className={`m-0 ${isActive(
              "/customize"
            )} btn flex flex-row items-center`}
          >
            <img src="/assets/Home/plus.svg" alt="customize" className="" />
            <p className="m-0 text-[#777FA1]">Customize</p>
          </Nav.Link>
        </div>
      </div>
    </div>
  );
};

export default CustomizeHeader;
