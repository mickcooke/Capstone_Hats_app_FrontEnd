import React from "react";
import { Link } from "react-router-dom";

const HatCard = ({ hat }) => {
  if (!hat) {
    return <p>Loading...</p>;
  }

  const url = `/clients/${hat.id}`;
  const editUrl = `/hats/edit/${hat.id}`;

  return (
    <>
      <div className="hat-card-wrap">
        <Link to={url}>
          <div className="hat-card">
            <div>
              <img
                src={require("../assets/images/trilby.png")}
                className="hat-image"
              />
            </div>
            <div>
              <p className="hat-name-text">{hat.name}</p>

            </div>
          </div>
        </Link>
        <Link to={editUrl}>
          <div className="card-edit-button">edit</div>
          </Link>
      </div>
    </>
  );
};

export default HatCard;
