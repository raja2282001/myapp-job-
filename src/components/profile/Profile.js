import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {

    const userProfile = JSON.parse(localStorage.getItem("Profile"));

  return (
    <div>
      <div>
        <h1>Profile Page</h1>
      </div>
      <div className='profilemain'>
        <ul>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
            <li>
                <Link to="/userproduct">Product</Link>
            </li>
            <li>
                <Link to="/wishlistdetail">Wishlist</Link>
            </li>
        </ul>
        <div className='detail'>
            <div>
                <div>
                 Name : {userProfile?.name}
                </div>
                <div>
                Email : {userProfile?.email}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
