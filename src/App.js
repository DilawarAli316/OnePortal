import logo from "./logo.svg";
import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Header from "./components/Header/Header";
import SideView from "./components/NavigationMenu/NavigationMenu";
import Home from "./screen/Home";
import HomeHeader from "./components/Grid/HomeHeader/HomeHeader";
import Categories from "./screen/Categories";

function App() {
  return (
    <div className="App">
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
                <Route exact path="/" render={() => (
                  <div className="w-full ]">
                    <HomeHeader />
                    <Home />
                  </div>
                )} />
                <Route exact path="/categories" component={Categories} />
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
  );
}

export default App;
