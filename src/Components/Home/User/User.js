import React from "react";
import "./User.css";

const User = (props) => {
  const { gender, email } = props.user;
  const { title, first, last } = props.user.name || {};
  const { large } = props.user.picture || {};
  const { city, country, postcode, state } = props.user.location || {};
  const { description, offset } = props.user?.location?.timezone || {};
  const { number, name } = props.user?.location?.street || {};

  return (
    <>
      {email ? (
        <>
          <div className="col-10 mx-auto col-md-8 col-sm-12">
            <div className="display-box card-footer m-4 p-5 d-flex align-items-center justify-content-center flex-md-row">
              <img
                className="mx-3 img-fluid rounded-circle"
                src={large}
                alt="userImage"
              />
              <div className="ms-4">
                <h1 class="card-title">
                  {title} {first} {last}
                </h1>
                <h5 class="card-text">
                  <span>{number}</span>, {name}, {city}, {state},
                  <span> {country}</span>, {postcode}
                </h5>
                <h5 class="card-text">
                  {offset} - {description}
                </h5>
                <p class="card-text text-muted">{gender}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div></div>
        </>
      )}
    </>
  );
};

export default User;
