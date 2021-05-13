import axios from "axios";
import React, { useEffect, useState } from "react";
import User from "../User/User";
import Users from "../Users/Users";

const UserList = () => {
  const [userLists, setUserLists] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const url =
      "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20";
    axios(url).then((data) => setUserLists(data.data.results));
  }, []);

  const userHandler = (email) => {
    const newUser = userLists.find((person) => person.email === email);
    setUser(newUser);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row">
            <User user={user} />
          </div>
          <div className="row gy-4 my-5">
            {userLists.map((users) => (
              <Users users={users} userHandler={userHandler} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
