import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import CoreScreen from './components/CoreScreen';
import MidScreen from './components/MidScreen';
import ProScreen from './components/ProScreen';
import DeployScreen from './components/DeployScreen';
import HomeScreen from './components/HomeScreen';
import Glossary from './components/Glossary';
import AchievementBox from './components/AchievementBox';
import Header from './components/elements/Header';
import Sidebar from './components/elements/SideBar';
import Footer from './components/elements/Footer';
import CLN from './components/CLN'; 
import Eclair from './components/Eclair';
import LND from './components/LND';
import helper from './assets/glossary.svg'
import ChannelSimulator from './components/elements/ChannelSimulator';

import './App.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  
  
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    if (showSplash) {
      setTimeout(() => {
        setShowSplash(false);
      }, 4000);
    }
  }, [showSplash]);

  const handleBubbleClick = () => {
    setShowBubble(!showBubble);
  };

  return (
    <div className="app">
           {showSplash ? (
        <SplashScreen />
      ) : (
        <Router>
        <Header/>
        
        <Sidebar/>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/core" element={<CoreScreen />} />
            <Route path="/mid" element={<MidScreen />} />
            <Route path="/pro" element={<ProScreen />} />
            <Route path="/deploy/*" element={<DeployScreen />} />
            <Route path="/deploy/cln" element={<CLN />} />
            <Route path="/deploy/eclair" element={<Eclair/>} />
            <Route path="/deploy/lnd" element={<LND/>} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/achievementbox" element={<AchievementBox/>} />
          </Routes>
          
          <div className="svg-container">
            <button onClick={handleBubbleClick} className="bubble-button">
              <img src={helper} className="book-svg" alt="Rocket" />
            </button>
            {showBubble && (
              <div className="bubble">
                <p>Wondering about a term?</p>
                <Link to="/glossary" className="bubble-link">Go to glossary</Link>
              </div>
            )}
          </div>
          <Footer />
        </Router>
              
      )}  
    </div>
  );
}

export default App;
