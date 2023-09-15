import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./ClientCard.css";

const ClientCard = ({ client, hatIcons, clientCardColours }) => {
  if (!client) {
    return <p>Loading...</p>;
  }

  const clientCardColourIndex = client.id - 1;
  const clientCardColourCode = clientCardColours[clientCardColourIndex];

  const ClientCardStyle = styled.div`
    width: 300px;
    height: 100px;
    padding: 10px;
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 10px;
    background-color: #ffe48c;
    display: grid;
    grid-template-columns: 30% 70%;
    box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.5);
  `;

  const getUrl = () => {
    if (client.jobs.length === 0) {
      return `/jobs/new/${client.id}`;
    } else {
      return `/jobs/${client.id}`;
    }
  };

  const url = getUrl();
  const editUrl = `/clients/edit/${client.id}`;
  const detailsUrl = `/clients/detail/${client.id}`;

  let numberOfOngoingJobs = 0;
  let numberOfUnpaidJobs = 0;
  let unpaidAmount = 0;


  const calculateOngoingJobs = () => {
    const allClientJobs = client.jobs;

    for (const job of allClientJobs) {
      if (job.completed === false) {
        numberOfOngoingJobs += 1;
      }
    }
  };

  calculateOngoingJobs();

  const calculateUnpaidJobs = () => {
    const allClientJobs = client.jobs;

    for (const job of allClientJobs) {
      if (job.completed === true && job.paid === false) {
        numberOfUnpaidJobs += 1;
      }
    }
  };

  calculateUnpaidJobs();

  const calculateUnpaidAmount = () => {
    const allClientJobs = client.jobs;

    for (const job of allClientJobs) {
      if (job.completed === true && job.paid === false) {
        unpaidAmount += (client.hourlyRate * (job.timeTaken / 3600)).toFixed(2);
      }
    }
  };

  calculateUnpaidAmount();

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
        <Link to={url}>
          <ClientCardStyle>
            <div className="card-image-box">
              <img
                src={require(`../assets/images/${client.hat.iconName}.png`)}
                className="hat-image"
                alt="hat"
              />
            </div>
            <div className="card-text-box">
              <p className="hat-name-text">
                {client.firstName} {client.lastName}{" "}
              </p>

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
                <>
                  <div className="unpaid-job-card">
                    <p className="ongoing-job-text">
                      {numberOfUnpaidJobs} unpaid job
                    </p>
                  </div>
                  <p className="owed-text">
                    £{parseFloat(unpaidAmount).toFixed(2)} owed
                  </p>
                </>
              ) : (
                <div className="unpaid-job-card">
                  <p className="ongoing-job-text">
                    {numberOfUnpaidJobs} unpaid jobs
                  </p>
                  <p className="owed-text">
                    £{parseFloat(unpaidAmount).toFixed(2)} owed
                  </p>
                </div>
              )}
            </div>
          </ClientCardStyle>
        </Link>

        <Link to={detailsUrl}>
          <div className="card-details-button">details</div>
        </Link>

        <Link to={editUrl}>
          <div className="card-edit-button">edit</div>
        </Link>
      </div>
    </>


  );
};

export default ClientCard;
