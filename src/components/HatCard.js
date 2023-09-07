import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HatCard = ({ hat, hatIcons, hatCardColours }) => {
  if (!hat) {
    return <p>Loading...</p>;
  }

  const hatCardColourIndex = hat.id - 1;
  const hatCardColourCode = hatCardColours[hatCardColourIndex];

  const HatCardStyle = styled.div`
    width: 300px;
    height: 100px;
    padding: 10px;
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 10px;
    background-color: ${hatCardColourCode};
    display: grid;
    grid-template-columns: 30% 70%;
  `;

  const url = `/clients/${hat.id}`;
  const newClientFormUrl = `/clients/new/${hat.id}`
  const editUrl = `/hats/edit/${hat.id}`;

  let numberOfOngoingJobs = 0;
  let numberOfUnpaidJobs = 0;

  const hatIconIndex = hat.id - 1;
  const hatCode = hatIcons[hatIconIndex];

  const calculateOngoingJobs = () => {
    const clients = hat.clients;
    const allHatJobs = [];

    for (const client of clients) {
      for (const job of client.jobs) {
        allHatJobs.push(job);
      }
    }

    for (const job of allHatJobs) {
      if (job.completed === false) {
        numberOfOngoingJobs += 1;
      }
    }
  };

  calculateOngoingJobs();

  const calculateUnpaidJobs = () => {
    const clients = hat.clients;
    const allHatJobs = [];

    for (const client of clients) {
      for (const job of client.jobs) {
        allHatJobs.push(job);
      }
    }

    for (const job of allHatJobs) {
      if (job.completed === true && job.paid === false) {
        numberOfUnpaidJobs += 1;
      }
    }
  };

  calculateUnpaidJobs();

  const noOngoingJobs = () => {
    return numberOfOngoingJobs === 0;
  };

  const ongoingJob = () => {
    return numberOfOngoingJobs === 1;
  };

  const noUnpaidJobs = () => {
    return numberOfUnpaidJobs === 0;
  };

  const unpaidJob = () => {
    return numberOfUnpaidJobs === 1;
  };

  return (
    <>
      <div className="hat-card-wrap">
       
       
            {/* <Link to={hat.clients.length === 0 ? {newClientFormUrl} : {url}}> */}
      <Link to={url}>
        
          <HatCardStyle>
            <div className="card-image-box">
              <img
                src={require(`../assets/images/${hat.iconName}.png`)}
                className="hat-image"
                alt="hat"
              />
            </div>
            <div className="card-text-box">
              <p className="hat-name-text">{hat.name}</p>

              {noOngoingJobs() ? (
                <p></p>
              ) : ongoingJob() ? (
                <div className="ongoing-job-card">
                  <p className="ongoing-job-text">
                    {numberOfOngoingJobs} ongoing job
                  </p>
                </div>
              ) : (
                <div className="ongoing-job-card">
                  <p className="ongoing-job-text">
                    {numberOfOngoingJobs} ongoing jobs
                  </p>
                </div>
              )}

              {noUnpaidJobs() ? (
                <p></p>
              ) : unpaidJob() ? (
                <div className="unpaid-job-card">
                  <p className="ongoing-job-text">
                    {numberOfUnpaidJobs} unpaid job
                  </p>
                </div>
              ) : (
                <div className="unpaid-job-card">
                  <p className="ongoing-job-text">
                    {numberOfUnpaidJobs} unpaid jobs
                  </p>
                </div>
              )}
            </div>
          </HatCardStyle>
        </Link>
        <Link to={editUrl}>
          <div className="card-edit-button">edit</div>
        </Link>
      </div>
    </>
  );
};

export default HatCard;
