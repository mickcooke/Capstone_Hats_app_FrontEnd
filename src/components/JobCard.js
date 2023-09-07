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
  `;

  const ActiveJobCardStyle = styled(JobCardStyle)`
    border: solid #ff0303;
  `;

  const url = `/jobs/detail/${job.id}`;
  const editUrl = `/jobs/edit/${job.id}`;

  const hatIconIndex = job.client.hat.id - 1;
  const hatCode = hatIcons[hatIconIndex];

  const active = () => {
    return job.active === true;
  };

  const unpaid = () => {
    return job.paid === false;
  };

  return (
    <>
      <div className="hat-card-wrap">
        <Link to={url}>
          <ActiveJobCardStyle>
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
                <b>Started:</b> {job.started}</p>
              <p className="job-started-text">{job.ended} </p>
              <p className="job-active-text">ACTIVE</p>
            </div>
          </ActiveJobCardStyle>
        </Link>
        <Link to={editUrl}>
          <div className="card-edit-button">edit</div>
        </Link>
      </div>
    </>
  );
};

export default JobCard;
