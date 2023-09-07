import React, { useState, useEffect } from "react";
import "./Timer.css";


const Timer = ({job, onUpdate}) => {
  // state to store time
  const [time, setTime] = useState(0);

  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(null);
  const [updatedJob, setUpdatedJob] = useState({
    name: job.name,
    description: job.description,
    notes: job.notes,
    started: job.started,
    ended: job.ended,
    timeTaken: job.timeTaken,
    active: job.active,
    completed: job.completed,
    paid: job.paid,
    id: job.id,
    client: job.client
  })

  useEffect(() => {
    setUpdatedJob(job)
  },[])

  const saveStartTime = () => {
    const now = new Date();
    setStartTime(now);
    console.log(now);
    // console.log(job.client)
    
  };

  const saveEndTime = () => {
    const now = new Date();
    setEndTime(now);
    console.log(now);
    calculateTotalTime(startTime, now);
    
    console.log("this is meant to post it now")
  };

  const calculateTotalTime =  (start, end) => {
    if (start && end) {
      // const timeDifference = (end - start) / 60000; // Convert milliseconds to minutes


      const timeDifference = (end - start) / (60000 / 60); // Convert milliseconds to seconds

      // job.timeTaken = timeDifference + job.timeTaken
      const copyJob = {...updatedJob}
      copyJob.timeTaken += timeDifference 
      console.log("time difference (seconds):  " + timeDifference + updatedJob.timeTaken)
      setUpdatedJob(copyJob)
      let clientId = job.client.id
      let jobId = job.id
      console.log("updated job " + updatedJob.timeTaken)
      onUpdate(copyJob, jobId, clientId)
      // console.log(`Total time difference (minutes): ${timeDifference}`);
      console.log(job)
    }
  };

   

  // state to check stopwatch running or not
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // Hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  // const milliseconds = time % 100;

  // Method to start and stop timer

  const convertSecondsToHMS = (seconds) => {
    if (isNaN(seconds) || seconds < 0) {
      return null;
    }
    const hours = Math.floor(seconds / 3600);
    const remainingSeconds = seconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const remainingSecondsFinal = remainingSeconds % 60;
    const hoursText = hours > 0 ? hours + " hr" + (hours === 1 ? "" : "s") : "";
    const minutesText = minutes > 0 ? minutes + " min" + (minutes === 1 ? "" : "s") : "";
    const secondsText = remainingSecondsFinal + " sec" + (remainingSecondsFinal === 1 ? "" : "s");
    const timeArray = [hoursText, minutesText, secondsText].filter((text) => text !== "");
    if (timeArray.length === 0) {
      return "0 seconds";
    }
    return timeArray.join(", ");
  }
  
  const runningTime = convertSecondsToHMS(Math.trunc(updatedJob.timeTaken))
  
  
  
  


  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  // Method to reset timer back to 0
  const reset = () => {
    setTime(0);
    setStartTime(0);
  };
  return (
    <div className="stopwatch-container">
      <p className="job-detail-time"><b>Time taken:</b></p>
      <p> {runningTime}</p>
      <p className="stopwatch-time">
        {/* {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")} */}
        {/* {milliseconds.toString().padStart(2, "0")} */}
      </p>

      <img src={require(`../assets/images/${job.client.hat.iconName}.png`)} className={!isRunning ?"hat":"hat spinning"}alt="hat"/>
      <div className="stopwatch-buttons">
        <button className="stopwatch-button" 
        
        onClick={() => {
          if(isRunning){
          startAndStop();
          saveEndTime();
          reset();}else{
            startAndStop();
            saveStartTime();
          }
        }}>
          {isRunning ? "Stop Timer" : "Start Timer"}
        </button>
        {/* <button className="stopwatch-button" onClick={reset}>
          Mark as complete
        </button> */}
      </div>
    </div>
  );
};

export default Timer;