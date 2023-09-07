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
// import useSound from 'use-sound';
import HatSting from '../assets/sounds/Hats_Sting_Vintage.mp3'
import OngoingJobsList from "../components/OngoingJobsList.js";

const HatContainer = ({ hats, jobs, clients, hatIcons, hatCardColours, user }) => {
  const text = "Your Hats";
  const newHatText = "Add a hat";

  // const [play] = useSound(HatSting, {volume: 0.2})
  //   play();

if(hats.length === 0) return (
<>
<Header text={newHatText} />
  {<HatForm user={user}/>}
  </>
)

  return (
    <>
      <Header text={text} />

      <Routes>
        <Route path="/" element={<HatList hats={hats} jobs={jobs} hatIcons={hatIcons} hatCardColours={hatCardColours}/>} />
        {/* <Route path="/new" element={<HatForm />} />
        <Route path="/edit/:id" element={<HatUpdateForm hats={hats}/>} /> */}
      </Routes>
      <OngoingJobsList jobs={jobs}/>
      </>
  );
};

export default HatContainer;
