import React from 'react'
import './App.css';
import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Pages/About';
import Support from './Pages/Support';
import Platform from './Pages/Platform';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Pricing from './Pages/Pricing';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/platform' element={<Platform/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/support' element={<Support/>}/>
      </Routes>

      <Footer/>
    </Router>
  )
}

export default App;
