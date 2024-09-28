import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import SideView from "./components/NavigationMenu/NavigationMenu";
import Grid1 from "./components/Grid/Grid1";
import Grid2 from "./components/Grid/Grid2";

function App() {
  return (
    <div className="App">
      
        {/* Header */}
        <Header />
        {/* Header */}

        <div
          style={{
            backgroundColor: "grey",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          Greetings message
        </div>

        
      

      {/* Main Container */}
      <div className="main-container">
      
        {/* Sidebar */}
        <div className="sidebar">
          <SideView />
        </div>
        {/* Sidebar */}
        <div className="content">
          <Grid1 />
          <Grid2 />
        </div>
      </div>
      {/* Main Container */}

      <img style={{position : 'fixed', bottom : '40px', right : '40px'}} src="/assets/Ai-Test.svg" />
    </div>
  );
}

export default App;
