import React from "react";
import HatList from "../components/HatList.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import ClientList from "../components/ClientList.js";
import Header from "../components/Header.js";
import HatForm from "../components/HatForm.js";
import UpdateHatForm from "../components/HatUpdateForm.js";

const HatContainer = ({ hats, jobs, clients, hatIcons }) => {
  const text = "Choose your hat";

  return (
    <>
      <Header text={text} />

      <Routes>
        <Route path="/" element={<HatList hats={hats} jobs={jobs} hatIcons={hatIcons}/>} />
        <Route path="/new" element={<HatForm />} />
        <Route path="/edit/:id" element={<UpdateHatForm />} />
      </Routes>
    </>
  );
};

export default HatContainer;
