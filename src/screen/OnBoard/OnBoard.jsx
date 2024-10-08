import React, { useEffect, useState } from "react";
import "../../App.css";
import HomeWorkspace from "../../components/HomeWorkspace/HomeWorkspace";
import LoginPage from "../../components/LoginPage/LoginPage";
import AppRecommendation from "../../components/AppRecommendation/AppRecommendation";
import Footer from "../../components/Footer/Footer";

const OnBoard = () => {
  const [update, setUpdate] = useState(false);
  
  useEffect(() => {
    setInterval(() => {
      setUpdate(true)
      
    },3000)
  },[])
  return (
    <div className="content">
     {update ?
     <>

      <AppRecommendation  /> 
      <Footer className="z-10" />
     </>
       : <LoginPage />} 
    </div>
  );
};

export default OnBoard;
