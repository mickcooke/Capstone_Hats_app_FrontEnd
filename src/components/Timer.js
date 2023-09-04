import React, { useState, useEffect } from "react";
import "./Timer.css";


const Timer = () => {
  // state to store time
  const [time, setTime] = useState(0);

  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

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
      console.log(`Total time difference (minutes): ${timeDifference}`);
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
  const milliseconds = time % 100;

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
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </p>
      <div className="stopwatch-buttons">
        <button className="stopwatch-button" onClick={() => {
          startAndStop();
          saveStartTime();
          saveEndTime();
        }}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button className="stopwatch-button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;