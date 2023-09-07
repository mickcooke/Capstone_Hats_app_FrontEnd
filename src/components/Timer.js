import React, { useState, useEffect } from "react";
import "./Timer.css";


const Timer = ({job}) => {
  // state to store time
  const [time, setTime] = useState(0);

  const [startTime, setStartTime] = useState(null);
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
    paid: job.paid
  })

  const saveStartTime = () => {
    const now = new Date();
    setStartTime(now);
    console.log(now);
  };

  const saveEndTime = () => {
    const now = new Date();
    setEndTime(now);
    console.log(now);
    calculateTotalTime(startTime, now);
  };

  const calculateTotalTime = (start, end) => {
    if (start && end) {
      const timeDifference = (end - start) / 60000; // Convert milliseconds to minutes
      // job.timeTaken = timeDifference + job.timeTaken
      const copyJob = {...updatedJob}
      copyJob.timeTaken = timeDifference + job.timeTaken
      setUpdatedJob(copyJob)
      console.log(`Total time difference (minutes): ${timeDifference}`);
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
  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  // Method to reset timer back to 0
  const reset = () => {
    setTime(0);
  };
  return (
    <div className="stopwatch-container">
      <p className="stopwatch-time">
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
        {/* {milliseconds.toString().padStart(2, "0")} */}
      </p>
      <div className="stopwatch-buttons">
        <button className="stopwatch-button" onClick={() => {
          startAndStop();
          saveStartTime();
          saveEndTime();
          reset();
        }}>
          {isRunning ? "Stop" : "Start"}
        </button>
        {/* <button className="stopwatch-button" onClick={reset}>
          Reset
        </button> */}
      </div>
    </div>
  );
};

export default Timer;