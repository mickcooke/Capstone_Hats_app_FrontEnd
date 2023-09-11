import React from "react";
import { useParams } from "react-router-dom";
import Timer from "./Timer";
import "./JobDetail.css";

const JobDetail = ({ job, onUpdate }) => {
  const unpaid = () => {
    return job.completed === true && job.paid === false;
  };

  const ongoing = () => {
    return job.completed === false;
  };

  const completed = () => {
    return job.completed === true;
  };

  const hasStarted = () => {
    return job.started !== "" && job.started !== null;
  };

  const hasEnded = () => {
    return job.ended !== "" && job.ended !== null;
  };

  const year = (dateTime) => {
    return dateTime.slice(0, 4);
  }

  const month = (dateTime) => {
    return dateTime.slice(5,7);
  } 

  const day = (dateTime) => {
    return dateTime.slice(8,10);
  }

  const time = (dateTime) => {
    return dateTime.slice(11,16)
  }


  // const amountEarned = Math.floor((job.client.hourlyRate * (job.timeTaken/3600) + Number.EPSILON)*100)/100

  const amountEarned = (job.client.hourlyRate * (job.timeTaken/3600)).toFixed(2)


  return (

    <div className="card">
      {/* <img src="" */}
      <p className="job-detail-name">
        <b>{job.name}</b>
      </p>
      <p className="job-detail-text">{job.description}</p>
      <p className="job-detail-text"> {job.notes}</p>

      {hasStarted() ? (
                <>
                <p className="job-started-text">
                  <b>Started:</b> {day(job.started)}{"-"}{month(job.started)}{"-"}{year(job.started)}{" at "}{time(job.started)}
                </p>
                </>
              ) : (
                ""
              )}

              {hasEnded() ? (
                <p className="job-started-text">
                  <b>Ended:</b> {day(job.ended)}{"-"}{month(job.ended)}{"-"}{year(job.ended)}{" at "}{time(job.ended)}
                </p>
              ) : (
                ""
              )}

      {job.active ? "" : <p>Not Started</p>}
            

      {job.completed ? (
        <div className="completed-job-card">
          <p className="completed-job-text">COMPLETED</p>
        </div>
      ) : (
        <div className="completed-job-card">
          <p className="completed-job-text">ONGOING</p>

        </div>
      )}
      <br/>
      {unpaid() ? (
        <div className="unpaid-job-card">
          <p className="job-detail-paid-text">UNPAID</p>
        </div>
      ) : ongoing() ? (
        <p></p>
      ) : (
        <div className="paid-job-card">
          <p className="job-detail-paid-text">PAID</p>
        </div>
      )}
  <p>Amount earned: £{amountEarned}</p>
      <div className="timer">
        <Timer job={job} onUpdate={onUpdate} />
      </div>
    </div>
  );
};

export default JobDetail;
