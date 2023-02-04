import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Knowledges from './pages/Knowledges';
import NotFound from './pages/NotFound';
import References from './pages/References';
import Networkss from './pages/Networks';

const App = () => {

  useEffect(() => {

    let rTimeout = null;

    let sidebar = document.querySelector('.sidebar');
    let sh;

    const setCss = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
      document.documentElement.style.setProperty('--vw', `${window.innerWidth / 100}px`);

      if (sidebar !== null) {

        sh = parseFloat(window.getComputedStyle(sidebar, null).getPropertyValue('height'));

        document.documentElement.style.setProperty('--sh', `${sh}px`);
      }
    }

    const resize = () => {

      if (rTimeout) { clearTimeout(rTimeout); rTimeout = null; }

      rTimeout = setTimeout(() => {
        setCss();
      }, 100);
    };

    setCss();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    }
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