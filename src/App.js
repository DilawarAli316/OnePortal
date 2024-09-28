import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
     <div className="header">
        <div>
          <p>LOGO</p>
        </div>
        <div className="links">
          <p>Home</p>
          <p>About</p>
          <p>Contact Us</p>
        </div>
      </div>
      {/* Header */}
      {/* Sidebar */}
      <div className="main-container">
        <div className="sidebar">sidebar</div>
        <div className="content">content</div>
      </div>
      {/* Sidebar */}
    </div>
  );
}

export default App;
