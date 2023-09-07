import React, { useState } from "react";
import './JobForm.css'
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import Request from "../helpers/request";

const JobForm = ({ clientId, onCreate, foundClient }) => {
  const [newJob, setNewJob] = useState({
    name: "",
    description: "",
    notes: "",
    started: "",
    ended: "",
    active: true,
    completed: false,
    paid: false,
    client: foundClient
  });

  const handleChange = (event) => {
    const propertyName = event.target.name;
    const copyJob = { ...newJob };
    copyJob[propertyName] = event.target.value;
    setNewJob(copyJob);
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(newJob);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      Job Name:{" "}
      <input
        type="text"
        placeholder="Job name"
        name="name"
        onChange={handleChange}
      />
      Description:{" "}
      <input
        type="text"
        placeholder="Description"
        name="description"
        onChange={handleChange}
      />
      Notes:{" "}
      <input
        type="text"
        placeholder="Notes"
        name="notes"
        onChange={handleChange}
      />
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker label="Start Date" onChange={handleChange} />
      </LocalizationProvider> */}
      {/* <input type="text" placeholder="Ended" name="Ended" onChange={ handleChange }/>

        Active: <input type="checkbox" placeholder="Active" name="Active" />
        
        Completed: <input type="checkbox" name="Completed" />
        
        Paid: <input type="checkbox" name="Paid" /> */}
      <div className="submit"><button type="submit">Create</button></div>
    </form>
    
  );
};

export default JobForm;
