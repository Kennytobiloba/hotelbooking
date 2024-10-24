import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Navbar from './components/Layouts/Navbar';
import Footer from './components/Layouts/Footer';

function App() {
  return (
   <div className='relative overflow-x-hidden min-h-screen'>
      <Navbar />
      <Router>
        <Routes>
          {/* Define the route for Home */}
          <Route path="/" element={<Home />} />
          {/* You can add more routes here */}
        </Routes>
      </Router>
      <Footer/>
   </div>
  );
}

export default App;
