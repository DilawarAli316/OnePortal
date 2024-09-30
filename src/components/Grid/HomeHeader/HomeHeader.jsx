import React from "react";
import styles from "./HomeHeader.css";



const HomeHeader = () => {
 const history = useHistory()
  return (
    <div className=" ">
      <div className="flex flex-row justify-between mx-[48px]">
        <div className="flex flex-row ... gap-[24px]">
          <img src="/assets/Home/weather.svg" alt="weather" />
          <div class="flex flex-col ... font-AvenirRegular justify-center ">
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
          </div>
        </div>


</div>
    

        
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
