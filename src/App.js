import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavigationMenu from './components/NavigationMenu/NavigationMenu';
import Grid1 from './components/Grid/Grid1';

function App() {
  return (
    <div className='App'>
    {/* Header */}
     {/* <div className="header">
        <div>
          <p>LOGO</p>
        </div>
        <div className="links">
          <p>Home</p>
          <p>About</p>
          <p>Contact Us</p>
        </div>
      </div> */}

      <Header/>
      {/* Header */}
      {/* Sidebar */}
      <div className="main-container">
      
        <div className="sidebar">
          <NavigationMenu />
        </div>
        <div className="content">
          {/* <Grid1 />
          <div>Grid 2</div> */}
        </div>
      </div>
      {/* Sidebar */}
    </div>
  );
}

export default App;
