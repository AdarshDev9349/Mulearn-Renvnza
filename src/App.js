
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Events from './components/Events';
import MoreEvents from './components/Playnow';
import Footer from './components/Footer';
import EventDetails from './components/eventdetail';
import Loading from './components/Loading';
import './index.css';
import ScrollToTop  from './components/scroll';
import FAQ from './components/faq';
import ScrollToBottom from './components/arrow';
import About from './components/about';
import Sponsor from './sponsorus';
import Devexpo from './components/devexpo';
import titlab from './components/img/TILTLABS_LOGO-06.png'
import uxshot from './components/img/uxshotsnew.png'
import tiltedu from './components/img/TILTEDU_LOGO-06.png'
import foss from './components/img/foss.png'
function App() {
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

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
                <Devexpo/>
                <Events />
                <MoreEvents />
                <div className="partners">
                  <h1>Our Partners</h1>
                  <div className="logo-part">
                    <img src={uxshot}lt="" />
                    <img src={foss} alt="" />
                    <img src={tiltedu} alt="" />
                    <img src={titlab} alt="" />
                    
                  </div>
                </div>
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
