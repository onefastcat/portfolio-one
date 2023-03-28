import React from 'react';
import { Routes, Route } from "react-router-dom";
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage"
import AboutPage from "./components/About"
import Navbar from "./components/Navbar"




function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/contact" element={ <ContactPage /> } />
      <Route path="/about" element={ <AboutPage /> } />
      <Route path='/' element={ <HomePage /> } />
      <Route path='/home' element={ <HomePage /> } />
    </Routes>

    </>
  )
}

export default App;
