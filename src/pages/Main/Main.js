import React from "react";
import { useAuth } from "../../context/AuthContext";

function Main() {
  const { user, handleLogout } = useAuth();
  return (
    <div>
      <h2>Welcome</h2>
      <p>{user?.email}</p>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}

export default Main;
