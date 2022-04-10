import React from 'react';
import { Routes ,Route, BrowserRouter } from 'react-router-dom';
// import { Route, Rout, BrowserRouter  } from "react-router-dom";
import './App.css';

import About from './pages/about/about';
import Quote from './pages/quote/quote';
import Contact from './pages/contact/contact';
import Admin from './pages/admin/admin';
import Navbar from './components/navbar/navbar';


export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      <Routes>
        <Navbar />
        <Route path='/' element={About} />
        <Route path='/quote' element={Quote} />
        <Route path='/contact' element={Contact} />
        <Route path='/admin' element={Admin} />
      </Routes>
      Hello world!
    </h1>
  )
}