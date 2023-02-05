import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Knowledges from './pages/Knowledges';
import NotFound from './pages/NotFound';
import References from './pages/References';
import Networkss from './pages/Networks';

const App = () => {

  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight
    })
  }
  
  useEffect(() => {

    let sidebar = document.querySelector('.sidebar');
    let sh;

    const setCss = () => {
      document.documentElement.style.setProperty('--vh', `${windowDimension.winHeight / 100}px`);
      document.documentElement.style.setProperty('--vw', `${windowDimension.winWidth / 100}px`);

      if (sidebar !== null) {

        sh = parseFloat(window.getComputedStyle(sidebar, null).getPropertyValue('height'));

        document.documentElement.style.setProperty('--sh', `${sh}px`);
      }
    }

    setCss();

    window.addEventListener('resize', detectSize);

    return () => { window.removeEventListener('resize', detectSize); }
  }, [windowDimension]);

  return (
    <Router >
      <Routes>
        <Route exact path="/" element={< Home />} />
        <Route exact path="/competences" element={<Knowledges />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/references" element={<References />} />
        <Route exact path="/networks" element={<Networkss />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;