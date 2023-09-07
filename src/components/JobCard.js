import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const JobCard = ({ job, hatIcons, clientCardColours }) => {
  if (!job) {
    return <p>Loading...</p>;
  }

  const clientCardColourIndex = job.id - 1;
  const clientCardColourCode = clientCardColours[clientCardColourIndex];

  const JobCardStyle = styled.div`
    width: 300px;
    height: 120px;
    padding: 10px;
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 10px;
    background-color: #8cd7ff;
    display: grid;
    grid-template-columns: 30% 70%;
    box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.5);
  `;

  const url = `/jobs/detail/${job.id}`;
  const editUrl = `/jobs/edit/${job.id}`;

  // const hatIconIndex = job.client.hat.id - 1;
  // const hatCode = hatIcons[hatIconIndex];

  const active = () => {
    return job.active === true;
  };

  const unpaid = () => {
    return job.completed === true && job.paid === false;
  };

  const ongoing = () => {
    return job.active === true && job.completed === false;
  }


  const gotTime = () => {
    return job.timeTaken > 0;
  };

  const completed = () => {
    return job.completed === true;
  };

  const convertSecondsToHMS = (seconds) => {
    if (isNaN(seconds) || seconds < 0) {
      return null;
    }
    const hours = Math.floor(seconds / 3600);
    const remainingSeconds = seconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const remainingSecondsFinal = remainingSeconds % 60;
    const hoursText =
      hours > 0 ? hours + " hr" + (hours === 1 ? "" : "s") : "";
    const minutesText =
      minutes > 0 ? minutes + " min" + (minutes === 1 ? "" : "s") : "";
    const secondsText =
      remainingSecondsFinal +
      " sec" +
      (remainingSecondsFinal === 1 ? "" : "s");
    const timeArray = [hoursText, minutesText, secondsText].filter(
      (text) => text !== ""
    );
    if (timeArray.length === 0) {
      return "0 seconds";
    }
    return timeArray.join(", ");
  };

  const runningTime = convertSecondsToHMS(Math.trunc(job.timeTaken));

  return (
    <>
      <div className="hat-card-wrap">
        <Link to={url}>
          <JobCardStyle>
            <div className="card-image-box">
              <img
                src={require(`../assets/images/${job.client.hat.iconName}.png`)}
                className="job-hat-image"
                alt="hat"
              />
            </div>
            <div className="job-card-text-box">
              <p className="job-name-text">{job.name} </p>
              <p className="job-description-text">
                <b>{job.description} </b>
              </p>
              <p className="job-started-text">
                <b>Started:</b> {job.started.slice(0, 10)}
              </p>
              {ongoing() ? 
               
                <div className="ongoing-job-card">
          <p className="completed-job-text">ONGOING</p>
        </div>
        : unpaid() ?
        <div className="unpaid-job-card">
                  <p className="ongoing-job-text">UNPAID</p>
                </div>
                : <div className="paid-job-card">
                <p className="job-detail-paid-text">PAID</p>
              </div>

              }

              {gotTime() ? (
                <p className="running-time-text">{runningTime} </p>
              ) : (
                <p></p>
              )}
             
        
            </div>
          </JobCardStyle>
        </Link>
        <Link to={editUrl}>
          <div className="card-edit-button">edit</div>
        </Link>
      </div>
    </>
  );
};

export default JobCard;
