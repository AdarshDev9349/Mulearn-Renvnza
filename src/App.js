// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Events from './components/Events';
import MoreEvents from './components/Playnow';
import Footer from './components/Footer';
import EventDetails from './components/eventdetail';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        
        
        <Routes>
          <Route path="/" element={
            <>
            <Navbar/>
            <Header/>
            <Events />
            <MoreEvents />
            <Footer />
            </>
          } />
          <Route path="/event/:id" element={
          
          <EventDetails />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
