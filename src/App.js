import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import React from "react";
import Header from "./components/Header/Header";
import SideView from "./components/NavigationMenu/NavigationMenu";
import Home from "./screen/Home/Home";
import Categories from "./screen/Categories/Categories";
import Services from "./screen/Services/Services";
import HomeHeader from "./components/Grid/HomeHeader/HomeHeader";
import Teams from "./screen/Team/Teams";
import Support from "./screen/Support/Support";
import { Khub } from "./screen/Khub/Khub";
import Add from "./screen/Add/Add";
import SubHeader from "./components/SubHeader/SubHeader";
import Overview from "./screen/Overview/Overview";
import TopNavTeam from "./screen/TopNavTeam/TopNavTeam";

const MainLayout = () => {
  const location = useLocation(); // Now this is inside the Router context

  // Only show SubHeader on the root path ("/")
  const isSubHeaderVisible = location.pathname === "/" || location.pathname === "/top-nav-team" || location.pathname === "/overview";

  return (
    <div>
      <Header />
      {isSubHeaderVisible && <SubHeader />}
      <div className="main-container" style={{ display: "flex" }}>
        <div className="sidebar">
          <SideView />
        </div>
        <div className="content">
          <Routes>
          <Route exact path="/" render={() => (
                <>

                  <HomeHeader />
                  <Home />
                </>
              )} />
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/categories" element={<Categories />} />
            <Route path="/services" element={<Services />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/support" element={<Support />} />
            <Route path="/khub" element={<Khub />} />
            <Route path="/add" element={<Add />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/top-nav-team" element={<TopNavTeam />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <MainLayout />
      </Router>
      <img
        style={{ position: "fixed", bottom: "40px", right: "40px" }}
        src="/assets/Ai-Test.svg"
        alt="AI Test"
      />
    </div>
  );
}

export default App;
