import React, { useEffect } from "react";
import { useUser } from "./UserContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    
    if (!user || !user.accessToken) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="container">
      <div>
      <h2>Profile</h2>
      {user && (
        <div className="profile-box">
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Profile;
