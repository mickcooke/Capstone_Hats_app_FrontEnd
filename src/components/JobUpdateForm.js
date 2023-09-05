import React, {useState} from 'react'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const UpdateJobForm = ({job}) => {

    const [newJob, setNewJob] = useState({
      name: job.name,
      description: job.description,
      notes: job.notes,
      started: job.started,
      ended: job.ended,
      active: job.active,
      completed: job.completed,
      paid: job.paid
    })
  
    const handleChange = (event) => {
      const propertyName = event.target.name;
          const copyJob = {...newJob}
          copyJob[propertyName] = event.target.value
          setNewJob(copyJob)
    }

  return (
    <form>
    <input type="text" defaultValue={job.name} placeholder="Job name" name="name" onChange={ handleChange }/>

    <input type="text" defaultValue={job.description}  placeholder="Description" name="description" onChange={ handleChange }/>

    <input type="text" defaultValue={job.notes} placeholder="Notes" name="notes" onChange={ handleChange }/>

    <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker label="Start Date" onChange={ handleChange } />
    </LocalizationProvider>

    <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker label="End Date" onChange={ handleChange } />
    </LocalizationProvider>
    
    {/* <input type="text" defaultValue={job.started} placeholder="Started" name="Started" onChange={ handleChange }/>
    
    <input type="text" defaultValue={job.ended} placeholder="Ended" name="Ended" onChange={ handleChange }/> */}

    Active: <input type="checkbox" placeholder="Active" name="Active" />
        
    Completed: <input type="checkbox" name="Completed" />
        
    Paid: <input type="checkbox" name="Paid" />
    
    <button type="submit">Save</button>
  </form>
  )
}

export default UpdateJobForm