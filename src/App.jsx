import React, { Component } from "react";
import { useState, useEffect } from 'react';
import {Helmet} from 'react-helmet-async';
import './App.css'

import { Route, NavLink, HashRouter, Routes } from "react-router-dom";
import About from "./pages/About";
import Chatboard from "./pages/Chatboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// 這裡是主頁面，還會另開一個about頁面(但導到相同路徑)
// webpage template from https://tailblocks.cc/
function App() {
  
  return (
    <>
      <HashRouter>
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">LucasLee's website   </span>
            </a>

            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
              <ul className="flex justify-evenly">
                
                <li className="mr-6"><NavLink exact to='/' class="text-black hover:text-blue-500 font-bold">About </NavLink></li>
                <li className="mr-6"><NavLink to='/Chatboard' class="text-black hover:text-blue-500 font-bold">Chatboard </NavLink></li>
                <li className="mr-6"><NavLink to='/Login' class="text-black hover:text-blue-500 font-bold">Log in </NavLink></li>
                <li className="mr-6"><NavLink to='/Signup' class="text-black hover:text-blue-500 font-bold">Sign up </NavLink></li>
              </ul>
            </nav>
              
          </div>
        </header>    
        <div id="main">
          <Routes>
            <Route exact path="/" element={<About/>} />
            <Route path="/Chatboard" element={<Chatboard/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Signup" element={<Signup/>} />
          </Routes>             
        </div>
      </HashRouter> 
    </>
  )
}

export default App
