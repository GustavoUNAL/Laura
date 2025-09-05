
import React from 'react';
import './App.css';
import './styles/theme.css';
import ContentApp from './containers/HomePage/ContentApp';
import ErrorPage from './components/ErrorPage/ErrorPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './containers/AboutPage/About';
import Community from './containers/CommunityPage/Community';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  
  return (
    <ThemeProvider>
      <Router>
        <Routes>
    
          <Route path="/" exact element={<ContentApp />} />

          <Route path="/about" element={<About />} /> 
          <Route path="/community" element={<Community />} />
          <Route path="*" exact element={<ErrorPage></ErrorPage>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
