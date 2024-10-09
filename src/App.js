import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory,
  useLocation,
  Navigate,
} from "react-router-dom";
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
import OnBoard from "./screen/OnBoard/OnBoard";
import OnBoardHeader from "./components/OnBoardHeader/Header";
import VideoBackground from "./components/VideoBackground/VideoBackground";
import ScreenSaver from "./screen/ScreenSaver/ScreenSaver";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showBackBtn, setShowBackBtn] = useState(false);
  const history = useHistory(); // Hook to programmatically navigate
  let inactivityTimer;

  // Handle detecting inactivity
  const resetInactivityTimer = () => {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
      if (window.location.pathname !== "/") {
        window.location.href = "/"; // Redirect to ScreenSaver on inactivity
      }
    }, 20000); // 20 seconds
  };

  useEffect(() => {
    // Add event listeners for user interactions to reset the inactivity timer
    window.addEventListener("mousemove", resetInactivityTimer);
    window.addEventListener("keydown", resetInactivityTimer);

    // Set the inactivity timer when the app loads
    resetInactivityTimer();

    return () => {
      // Cleanup event listeners when component unmounts
      window.removeEventListener("mousemove", resetInactivityTimer);
      window.removeEventListener("keydown", resetInactivityTimer);
      clearTimeout(inactivityTimer);
    };
  }, []);

  return (
    <div className="App max-h-screen overflow-auto">
      <div
        className="w-full"
        style={{ aspectRatio: "16/9", maxHeight: "100vh", overflow: "auto" }}
      >
        <div className="App h-full z-50">
          <React.Fragment>
            <Router>
              <RouteWithVideoBackground />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => (
                    <div className="w-full h-full">
                      <ScreenSaver />
                    </div>
                  )}
                />

                <>
                  <Header />
                  <div className="flex">
                    {/* Sidebar */}
                    <div className="sidebar">
                      <SideView
                        showModal={showModal}
                        setShowModal={setShowModal}
                        showBackBtn={showBackBtn}
                      />
                      {/* <Chat show={showModal} onHide={() => setShowModal(false)} /> */}
                      {showModal ? (
                        <div style={{ display: "flex" }}>
                          <ChatList />
                          <ChatRoom />
                        </div>
                      ) : null}
                    </div>

                    <div className="flex-grow z-2"></div>
                    <Route
                      exact
                      path="/home"
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
                        <div className="w-full z-10">
                          {/* <HomeHeader /> */}
                          {/* <Home /> */}

                          <CustomizeHeader bottom={true} />
                          <InitialHome />
                        </div>
                      )}
                    />

                    <Route exact path="/apps" component={Apps} />
                    <Route exact path="/services" component={Services} />
                    <Route exact path="/Messenger" component={Messenger} />
                    <Route exact path="/chats" component={Chat} />
                    <Route
                      exact
                      path="/khub"
                      render={() => <Khub setShowBackBtn={setShowBackBtn} />}
                    />
                    <Route exact path="/TicketList" component={TicketList} />
                    <Route
                      exact
                      path="/overview"
                      render={() => (
                        <div className="w-full">
                          <HomeHeader />
                          <Overview />
                        </div>
                      )}
                    />
                    <Route
                      exact
                      path="/top-nav-team"
                      render={() => (
                        <div className="w-full ">
                          <HomeHeader />
                          <TopNavTeam />
                        </div>
                      )}
                    />
                    <Route
                      exact
                      path="/customize"
                      render={() => (
                        <div className="w-full">
                          <CustomizeHeader />
                          <Customize />
                        </div>
                      )}
                    />

                    <Route
                      exact
                      path="/login"
                      render={() => (
                        <div className="w-full bg-[#fff]">
                          <OnBoardHeader />
                          <OnBoard />
                        </div>
                      )}
                    />

                    {/* <Route path="*">
                      <Redirect to="/intro" />
                    </Route> */}
                  </div>
                </>
              </Switch>
            </Router>
          </React.Fragment>
        </div>
      </div>
    </div>
  );
}

function RouteWithVideoBackground() {
  const location = useLocation();
  return location.pathname === "/intro" ? <VideoBackground /> : null;
}

export default App;
