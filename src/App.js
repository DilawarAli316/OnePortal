import logo from "./logo.svg";
import "./App.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";

import React from "react";
import Header from "./components/Header/Header";
import SideView from "./components/NavigationMenu/NavigationMenu";
import Home from "./screen/Home/Home";
import HomeHeader from "./components/Grid/HomeHeader/HomeHeader";
import Categories from "./screen/Categories/Categories";
import Services from "./screen/Services/Services";
import Teams from "./screen/Team/Teams";
import Support from "./screen/Support/Support";
import Khub from "./screen/Khub/Khub";
import Add from "./screen/Add/Add";
import Overview from "./screen/Overview/Overview";
import TopNavTeam from "./screen/TopNavTeam/TopNavTeam";
import Customize from "./screen/Customize/Customize";
import Footer from "./components/Footer/Footer"; // Added Footer.jsx

function App() {
  return (
    <div className="App max-h-screen overflow-auto">
    <div
      className="w-full"
      style={{ aspectRatio: "16/9", maxHeight: "100vh", overflow: "auto" }}
    >
       <Footer className="z-10" /> 
       {/* <div class="absolute z-20 bottom-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none"><div class="w-[108rem] flex-none flex justify-end"> <img  class="w-[71.75rem] flex-none max-w-none dark:hidden" decoding="async"" src="/assets/Footer-image.png" alt="Footer" /></div></div> */}
      <div className="App h-full z-50">
        <React.Fragment>
          <Router>
            <Header />
            <div className="flex">
              {/* Sidebar */}
              <div className="sidebar">
                <SideView />
              </div>
              {/* Main content */}
              <div className="flex-grow">
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => (
                      <div className="w-full">
                        <HomeHeader />
                        <Home />
                      </div>
                    )}
                  />
                  <Route exact path="/categories" component={Categories} />
                  <Route path="/services" component={Services} />
                  <Route path="/teams" component={Teams} />
                  <Route path="/support" component={Support} />
                  <Route path="/khub" component={Khub} />
                  <Route path="/add" component={Add} />
                  <Route
                    path="/overview"
                    render={() => (
                      <div className="w-full ]">
                        <HomeHeader />
                        <Overview />
                      </div>
                    )}
                  />
                  <Route
                    path="/top-nav-team"
                    render={() => (
                      <div className="w-full ]">
                        <HomeHeader />
                        <TopNavTeam />
                      </div>
                    )}
                  />
                  <Route
                    path="/customize"
                    render={() => (
                      <div className="w-full ]">
                        <HomeHeader />
                        <Customize />
                      </div>
                    )}
                  />
                  {/* <Route path="/organization" component={Organization} />
              <Route component={Settings} /> */}
                </Switch>
              </div>
            </div>
          </Router>
        </React.Fragment>
       
        <img
          style={{ position: "fixed", bottom: "40px", right: "40px" }}
          src="/assets/Ai-Test.svg"
        />
      </div>
     
    </div>
    
  </div>
  );
}

export default App;
