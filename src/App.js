import logo from "./logo.svg";
import "./App.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";

import React, { useState } from "react";
import Header from "./components/Header/Header";
import SideView from "./components/NavigationMenu/NavigationMenu";
import Home from "./screen/Home/Home";
import HomeHeader from "./components/Grid/HomeHeader/HomeHeader";
import Apps from "./screen/Apps/Apps";
import Services from "./screen/Services/Services";
import Messenger from "./screen/Messenger/Messenger";
import Khub from "./screen/Khub/Khub";
import Overview from "./screen/Overview/Overview";
import TopNavTeam from "./screen/TopNavTeam/TopNavTeam";
import Chat from "./screen/TicketList/TicketList";
import ChatList from "./components/ChatList/ChatList";
import ChatRoom from "./components/ChatRoom/ChatRoom";
import Customize from "./screen/Customize/Customize";
import Footer from "./components/Footer/Footer"; // Added Footer.jsx
import HomeWorkspace from "./components/HomeWorkspace/HomeWorkspace";
import InitialHome from "./screen/InitialHome/InitialHome";
import CustomizeHeader from "./components/Grid/CustomizeHeader/CustomizeHeader";
import TicketList from "./screen/TicketList/TicketList";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showBackBtn, setShowBackBtn] = useState(false);
  return (
    <div className="App max-h-screen overflow-auto">
      <div
        className="w-full"
        style={{ aspectRatio: "16/9", maxHeight: "100vh", overflow: "auto" }}
      >
        {/* <Footer className="z-10" /> */}
        {/* <div class="absolute z-20 bottom-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none"><div class="w-[108rem] flex-none flex justify-end"> <img  class="w-[71.75rem] flex-none max-w-none dark:hidden" decoding="async"" src="/assets/Footer-image.png" alt="Footer" /></div></div> */}
        <div className="App h-full z-50">
          <React.Fragment>
            <Router>
              <Header />
              <div className="flex">
                {/* Sidebar */}
                <div className="sidebar" >
                  <SideView showModal={showModal} setShowModal={setShowModal} showBackBtn={showBackBtn} />
                  {/* <Chat show={showModal} onHide={() => setShowModal(false)} /> */}
                  {showModal ? (
                    <div style={{ display: "flex" }}>
                      <ChatList />
                      <ChatRoom />
                    </div>
                  ) : null}
                </div>
                {/* Main content */}
                <div className="flex-grow z-2">
                  <Switch>
                    <Route
                      exact
                      path="/"
                      render={() => (
                        <div className="w-full">
                          <HomeHeader />
                          {/* <Home /> */}
                          <Home />
                          <Footer className="z-10" />
                        </div>
                      )}
                    />
                    <Route
                      exact
                      path="/intro"
                      render={() => (
                        <div className="w-full">
                          {/* <HomeHeader /> */}
                          {/* <Home /> */}

                          <CustomizeHeader bottom={true} />
                          <InitialHome />
                        </div>
                      )}
                    />
                    <Route exact path="/apps" component={Apps} />
                    <Route path="/services" component={Services} />
                    <Route path="/Messenger" component={Messenger} />
                    <Route path="/chats" component={Chat} />
                    <Route path="/khub" render={() => (
                      <Khub setShowBackBtn={setShowBackBtn}  />
                    )} />
                    <Route path="/TicketList" component={TicketList} />
                    <Route
                      path="/overview"
                      render={() => (
                        <div className="w-full">
                          <HomeHeader />
                          <Overview />
                        </div>
                      )}
                    />
                    <Route
                      path="/top-nav-team"
                      render={() => (
                        <div className="w-full ">
                          <HomeHeader />
                          <TopNavTeam />
                        </div>
                      )}
                    />
                    <Route
                      path="/customize"
                      render={() => (
                        <div className="w-full">
                          <CustomizeHeader />
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

          {/* <img
            style={{ position: "fixed", bottom: "40px", right: "40px" }}
            src="/assets/Ai-Test.svg"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
