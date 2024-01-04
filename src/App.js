
import React from 'react';
import './App.css';
import ContentApp from './components/ContentApp';
import ErrorPage from './components/ErrorPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<ContentApp />} />
          <Route path="*" exact element={<ErrorPage></ErrorPage>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
