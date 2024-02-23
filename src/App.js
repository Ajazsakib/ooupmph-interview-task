import React, { useState } from 'react';
import './App.css';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import { GiHamburgerMenu } from "react-icons/gi";
function App()
{
  const [showSideBar, setShowSidebar] = useState(false)

  const handleSideBar = () =>
  {

    setShowSidebar(true)
  }

  const handleCloseSidebar = () =>
  {
    setShowSidebar(false)
  }
  return (
    <div className="App">
      <div className={`sidebar-container ${showSideBar ? "pos" : ""}`}>
        <div className='hamburger-button'>
          {!showSideBar && <GiHamburgerMenu onClick={handleSideBar} />}
        </div>
        <Sidebar showSideBar={showSideBar} handleSideBar={handleSideBar} handleCloseSidebar={handleCloseSidebar} />
      </div>
      <div className='main-container'>
        <MainContent />
      </div>
    </div>
  );
}

export default App;
