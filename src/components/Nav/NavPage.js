import React from "react";
import { Link } from "react-router-dom";

const NavPage = () => {

    const userProfile = JSON.parse(localStorage.getItem("Profile"));

    console.log("profile: ", userProfile)
  return (
    <div className="list">
      <ul className="navul">
        <li>
          <Link to="/">Home</Link>
        </li>
        {
            userProfile==null ?

        <li>
          <Link to="/login">Login</Link>
        </li> :

        <li style={{display:"flex",gap:"5px"}}>
          <Link to="/login" onClick={()=>localStorage.removeItem("Profile")}>Logout</Link>
          <Link to="/profile">Profile</Link>
        </li>
        }
      </ul>
    </div>
  );
};

export default NavPage;
