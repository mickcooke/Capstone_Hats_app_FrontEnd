import React from 'react'
import About1 from '../components/about1.js'
import About2 from '../components/about2.js'
import About3 from '../components/about3.js'
import Header from '../components/Header.js'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams,
  } from "react-router-dom";

const AboutContainer = () => {

    const text = "About Hats"

  return (
    <>
    <Header text={text} />

    <Routes>
      <Route path="/" element={<About1/>} />
      <Route path="/2" element={<About2/>} />
      <Route path="/3" element={<About3/>} />
    </Routes>
    </>
  )
}

export default AboutContainer