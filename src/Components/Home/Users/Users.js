import React from "react";
import "./Users.css";

const Users = (props) => {
  const { gender, email, nat } = props.users;
  const { title, first, last } = props.users.name;
  const userHandler = props.userHandler;

  return (
    <section
      className="col-md-3 col-sm-4 user__card"
      onClick={() => userHandler(email)}
    >
      <div class="card rounded-5">
        <div class="card-body">
          <h6 class="card-subtitle mb-2">
            {gender} . {nat}
          </h6>
          <h5 class="card-title">
            {title} {first} {last}
          </h5>
          <p class="card-text">{email}</p>
        </div>
      </div>
    </section>
  );
};

export default Users;
