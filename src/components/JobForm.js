import React, {useState} from 'react'
import Request from '../helpers/request';

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

  // const handlePost = (newJob) => {
  //   const request = new Request();
  //   request.post('/api/jobs', job).then(() => {
  //     window.location = '/jobs';
  //   })
  // }
//  console.log(job)

  const handleSubmit = (event) => {
    event.preventDefault();
    // handlePost(newJob);
  }


  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Job name" name="name" onChange={ handleChange }/>

        <input type="text" placeholder="Description" name="description" onChange={ handleChange }/>

        <input type="text" placeholder="Notes" name="notes" onChange={ handleChange }/>
        
        <button type="submit">Create</button>
      </form>
  )
}

export default JobForm