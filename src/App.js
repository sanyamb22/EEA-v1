import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login'
import Header from './Components/Header';
// import Footer from './Components/Footer';
import Signup from './Components/signup/Signup';
import Political from './Components/signup/Political';


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signup/pe' element={<Political />} />
      </Routes>
    {/* <Footer /> */}
    </BrowserRouter>
    
  );
}

export default App;
