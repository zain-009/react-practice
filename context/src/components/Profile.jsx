import React from "react";
import { useContext } from "react";
import UserContext from "../context/userContext";

function Profile() {
  const { user } = useContext(UserContext);
  return user ? <div>Welcome {user.username}</div> : <div>Please Login</div>;
}

export default Profile;
