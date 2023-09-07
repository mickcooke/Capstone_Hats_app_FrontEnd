import React from 'react'
import About1 from '../components/about1.js'
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
      {/* <Route path="/new" element={<HatForm />} />
      <Route path="/edit/:id" element={<HatUpdateForm hats={hats}/>} /> */}
    </Routes>
    </>
  )
}

export default AboutContainer