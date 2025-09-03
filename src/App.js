
import React from 'react';
import './App.css';
import ContentApp from './containers/HomePage/ContentApp';
import ErrorPage from './components/ErrorPage/ErrorPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './containers/AboutPage/About';
import Projects from './containers/ProjectsPage/Projects';
import Community from './containers/CommunityPage/Community';

function App() {
  
  return (
    <>
      <Router>
        <Routes>
    
          <Route path="/" exact element={<ContentApp />} />

          <Route path="/about" element={<About />} /> 
          <Route path="/projects" element={<Projects />} />
          <Route path="/community" element={<Community />} />
          <Route path="*" exact element={<ErrorPage></ErrorPage>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
