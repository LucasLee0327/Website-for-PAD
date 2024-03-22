import React, { Component } from "react";
import { useState, useEffect } from 'react'
import mypic from './pikachu-surprised.jpg'

function About() {

  return (
    <>
      <div className="description">
        <img src={mypic} alt="my-selfie"/>
        <p>
          國立臺灣大學 醫學系
          <br/>
          李承洋
        </p>
        <p>
          我是李承洋，是醫學系大二的學生。
          <br/>
          你問我來修這個幹嘛?窩不知道。
          <br/>
          我只知道義大利麵要拌42號混凝土。
          <br/>
          欸嘿( 。ω。)b
        </p>
      </div>     
    </>
  )
}

export default About