import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Component/Header';
import Home from './Component/Body/Home'
import About from './Component/Body/About';
import Contact from './Component/Body/Contact';
import Footer from './Component/Footer';
import Error from './Component/Error';

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='*' element={<Error />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;