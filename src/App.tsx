import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainPage from './pages/main-page.tsx';
import About from './pages/about.tsx';
import Work from './pages/work.tsx';
import Contact from './pages/contact.tsx';
import Portfolio from './pages/portfolio.tsx';

const App = () => {
  return (
    <Router>
    <nav className="flex justify-between items-center p-8 bg-gray-800 text-white">
      <ul className="flex justify-between items-center space-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/work">Work</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  </Router>
  );
}

export default App;
