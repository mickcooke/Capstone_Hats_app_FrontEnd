import React, {useState} from 'react'

const JobForm = ({clientId}) => {
  const [newJob, setNewJob] = useState({
    name: "",
    description: "",
    notes: "",
  })

  const handleChange = (event) => {
    const propertyName = event.target.name;
        const copyJob = {...newJob}
        copyJob[propertyName] = event.target.value
        setNewJob(copyJob)
  }


  return (
    <form>
        <input type="text" placeholder="Job name" name="name" onChange={ handleChange }/>

        <input type="text" placeholder="Description" name="description" onChange={ handleChange }/>

        <input type="text" placeholder="Notes" name="notes" onChange={ handleChange }/>
        
        <button type="submit">Save</button>
      </form>
  )
}

export default JobForm