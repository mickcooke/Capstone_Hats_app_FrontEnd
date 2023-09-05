import React, {useState} from 'react'

const UpdateJobForm = ({job}) => {

    const [newJob, setNewJob] = useState({
      name: job.name,
      description: job.description,
      notes: job.notes,
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
    
    <button type="submit">Save</button>
  </form>
  )
}

export default UpdateJobForm