import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainNavigation from './components/mainNavigation/MainNavigation';
import AllQuote from './components/pages/AllQuote';
import NewQuote from './components/pages/NewQuote';
import ShowQuotes from './components/pages/ShowQuotes';
import './App.css'; 

function App() {
  return (
    <React.Fragment>
      <MainNavigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<AllQuote />} />
          <Route path="/allquotes" element={<AllQuote />} />
          <Route path="/newquote" element={<NewQuote />} />
          <Route path="/quotes/:id" element={<ShowQuotes />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
