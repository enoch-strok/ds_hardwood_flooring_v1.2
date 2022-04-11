import React from 'react';
import { render } from "react-dom";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';

import About from './pages/about/about';
import Quote from './pages/quote/quote';
import Contact from './pages/contact/contact';
import Admin from './pages/admin/admin';
import Navbar from './components/navbar/navbar';


export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/quote' element={<Quote />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/admin' element={<Admin />} />
          </Routes>
        </div>
      </BrowserRouter>


      {/* <Routes>
        <Navbar />
        <Route path='/' element={<About />} />
        <Route path='/quote' element={<Quote />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/admin' element={<Admin />} />
      </Routes> */}
            {/* <BrowserRouter >
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/">
                <About />
            </Route>
            <Route path="/quote">
                <Quote />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/admin">
                <Admin/>
            </Route>
          </Switch>
        </div>
      </BrowserRouter > */}
      Hello world!
    </h1>
  )
}