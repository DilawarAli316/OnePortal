import React from "react";
import "../../App.css";
// import Grid1 from "../components/Grid/Grid1";
// import Grid2 from "../components/Grid/Grid2";
import GridHomeWorksapce from "../../components/Grid/GridHomeWorksapce/GridHomeWorksapce";

const Home = () => {
  return (
    
      <div className="content">
          {/* <Grid1 /> */}
          {/* <Grid2 /> */}
          <GridHomeWorksapce />
          <img
                            style={{
                              position: "fixed",
                              bottom: "40px",
                              right: "40px",
                            }}
                            src="/assets/Ai-Test.svg"
                          />
        </div>

     
    
  );
};

export default Home;
