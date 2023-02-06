import React, {useEffect } from 'react';
//import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Knowledges from './pages/Knowledges';
import NotFound from './pages/NotFound';
import References from './pages/References';
import Networkss from './pages/Networks';

const App = () => {


  const detectSize = () => { 
    document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
  }
  
  useEffect(() => {

    detectSize();

    window.addEventListener('resize', detectSize);

    return () => { window.removeEventListener('resize', detectSize); }
  }, []);

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