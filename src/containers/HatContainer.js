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
import HatUpdateForm from "../components/HatUpdateForm.js";

const HatContainer = ({ hats, jobs, clients, hatIcons, hatCardColours, user }) => {
  const text = "Choose your hat";

if(hats.length === 0) return (
<>
<Header text={text} />
  {<HatForm user={user}/>}
  </>
)

  return (
    <>
      <Header text={text} />

      <Routes>
        <Route path="/" element={<HatList hats={hats} jobs={jobs} hatIcons={hatIcons} hatCardColours={hatCardColours}/>} />
        <Route path="/new" element={<HatForm user={user}/>} />
        <Route path="/edit/:id" element={<HatUpdateForm />} />
      </Routes>
    </>
  );
};

export default HatContainer;
