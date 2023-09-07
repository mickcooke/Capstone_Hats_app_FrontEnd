import React, {useState} from 'react'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import {useNavigate} from 'react-router-dom';
import './JobUpdateForm.css'


const UpdateJobForm = ({job, handleDelete, onUpdate}) => {

    const [updatedJob, setUpdatedJob] = useState({
      name: job.name,
      description: job.description,
      notes: job.notes,
      started: job.started,
      ended: job.ended,
      active: job.active,
      completed: job.completed,
      paid: job.paid,
      client: job.client,
      id: job.id
    })

    let jobId = job.id
  
    const handleChange = (event) => {
      const propertyName = event.target.name;
          const copyJob = {...updatedJob}
          copyJob[propertyName] = event.target.value
          setUpdatedJob(copyJob)
    }

    const onDelete = () => {
      handleDelete(job.id)
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      let clientId = job.client.id
      onUpdate(updatedJob, jobId, clientId)
    }


  return (
    <>
    <form className='form' onSubmit={handleSubmit}>
    Job Name: <input type="text" defaultValue={job.name} placeholder="Job name" name="name" onChange={ handleChange }/>

    Description: <input type="text" defaultValue={job.description}  placeholder="Description" name="description" onChange={ handleChange }/>

    Notes: <input type="text" defaultValue={job.notes} placeholder="Notes" name="notes" onChange={ handleChange }/>

    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker label="Start Date" onChange={ handleChange } />
    </LocalizationProvider>

    <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker label="End Date" onChange={ handleChange } />
    </LocalizationProvider> */}

    <div>
      Active: <input type="checkbox" placeholder="Active" name="Active" defaultValue={job.active}/>
      
      Completed: <input type="checkbox" name="Completed" />
      
      Paid: <input type="checkbox" name="Paid" />
    </div>
    <div className='buttons'>
    <button  type="submit">Save</button>
      <button onClick = {() => {
         onDelete();
       }}>Delete Job</button>
  </div>

  
  </form>


 
     </>
  )
}

export default UpdateJobForm