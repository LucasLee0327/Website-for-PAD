import React, { Component } from "react";
import { useState, useEffect } from 'react'
import './App.css'

import { Route, NavLink, HashRouter, Routes } from "react-router-dom";
import About from "./pages/About";
import Chatboard from "./pages/Chatboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// 這裡是主頁面，還會另開一個about頁面(但導到相同路徑)
function App() {
  
  return (
    <>
      <div className="page">
        <h1 className="text-xl text-red-300 bg-orange-900">LucasLee's website</h1>
        <OnlineUserCount />
        <HashRouter>
          <nav className="linklist">         
            <ul className="linklist">
                <li><NavLink exact to='/'>About </NavLink></li>
                <li><NavLink to='/Chatboard'>Chatboard </NavLink></li>
                <li><NavLink to='/Login'>Log in </NavLink></li>
                <li><NavLink to='/Signup'>Sign up </NavLink></li>
            </ul>
          </nav>
          <main className="main">
            <Routes>
              <Route exact path="/" element={<About/>} />
              <Route path="/Chatboard" element={<Chatboard/>} />
              <Route path="/Login" element={<Login/>} />
              <Route path="/Signup" element={<Signup/>} />
            </Routes>
              
          </main>
        </HashRouter>      
      </div>      
    </>
  )
}

function OnlineUserCount() {
  const [onlineUsers, setOnlineUsers] = useState(0);

  useEffect(() => {
    // 組件加載時增加線上人數
    setOnlineUsers(prevOnlineUsers => prevOnlineUsers + 1);

    // 卸載時減少線上人數
    return () => {
        setOnlineUsers(prevOnlineUsers => prevOnlineUsers - 1);
    };
  }, []);
  return (
      <div className="usercount">
          <h3>線上人數：{onlineUsers}</h3>
      </div>
  );
}

export default App

