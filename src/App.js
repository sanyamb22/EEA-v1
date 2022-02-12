import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login'
import Signin from './Components/Signin';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    <Footer />
    </BrowserRouter>
    
  );
}

export default App;
