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
    height: 100px;
    padding: 10px;
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 10px;
    background-color: ${clientCardColourCode};
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

  const gotTime = () => {
    return job.timeTaken > 0;
  };

  const completed = () => {
    return job.completed !== true;
  };

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
              {completed ? (
                <p className="job-started-text">{job.ended} </p>
              ) : (
                  <p></p>
              )}

              {gotTime() ? (
                <p className="job-started-text">{job.timeTaken}m </p>
              ) : (
                <p></p>
              )}
              {/* {active() ? <p className="job-active-text">ACTIVE</p>
              : <p></p>} */}
              {unpaid() ? (
                <div className="unpaid-job-card">
                  <p className="ongoing-job-text">UNPAID</p>
                </div>
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
