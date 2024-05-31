// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Events from './components/Events';
import MoreEvents from './components/Playnow';
import Footer from './components/Footer';
import EventDetails from './components/eventdetail';
import Loading from './components/Loading'; // Import the Loading component
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to show the loading spinner
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        {loading ? <Loading /> : (
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
            <Route path="/event/:id" element={<EventDetails />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
