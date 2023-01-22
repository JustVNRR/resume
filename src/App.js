import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Knowledges from './pages/Knowledges';
import NotFound from './pages/NotFound';
import References from './pages/References';
import Networkss from './pages/Networks';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/resume" element={< Home />} />
        <Route exact path="/resume/competences" element={<Knowledges />} />
        <Route exact path="/resume/portfolio" element={<Portfolio />} />
        <Route exact path="/resume/references" element={<References />} />
        <Route exact path="/resume/networks" element={<Networkss />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;