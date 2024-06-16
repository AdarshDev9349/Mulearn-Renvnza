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
import ScrollToTop  from './components/scroll';
import FAQ from './components/faq';
import ScrollToBottom from './components/arrow';
import About from './components/about';
import Sponsor from './sponsorus';
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
      <ScrollToTop />
      <div className="App">
        {loading ? <Loading /> : (
          <Routes>
            <Route path="/" element={
              <>
                <Navbar/>
                <Header/>
                <About/>
                <Events />
                <MoreEvents />
                <FAQ/>
                <Footer />
                <ScrollToBottom/>
              </>
            } />
            <Route path="/event/:id" element={<EventDetails />} />
            <Route path='/sponsor-us' element={<Sponsor/>}/>
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
