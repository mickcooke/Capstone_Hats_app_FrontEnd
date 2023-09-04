import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  background-color: ${clientCardColourCode};
  display: grid;
  grid-template-columns: 30% 70%;
`;

  const url = `/jobs/${client.id}`;
  const editUrl = `/clients/edit/${client.id}`;

  const hatIconIndex = client.hat.id - 1;
  const hatCode = hatIcons[hatIconIndex];

  return (
    <>
    <div className="hat-card-wrap">
      <Link to={url}>
        <ClientCardStyle>
          <div className="card-image-box">
            <img
              src={require(`../assets/images/${hatCode}`)}
              className="hat-image"
              alt="hat"
            />
          </div>
          <div className="card-text-box">
            <p className="hat-name-text">{client.firstName} {client.lastName} </p>

            {/* {noOngoingJobs() ? (
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
            )} */}


          </div>
        </ClientCardStyle>
      </Link>
      <Link to={editUrl}>
        <div className="card-edit-button">edit</div>
      </Link>
    </div>
  </>




    // <div>
    //   <Link to={url}>
    //     <p>{client.firstName}</p>
    //   </Link>
    //   <Link to={editUrl}>
    //     <p>Edit Client</p>
    //   </Link>
    // </div>
  );
};

export default ClientCard;
