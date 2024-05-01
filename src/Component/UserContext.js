import React, { createContext, useState, useEffect, useContext } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const handleSignUp = (userData) => {
    const accessToken = generateAccessToken();
    setUser({ ...userData, accessToken });
  };

  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const generateAccessToken = () => {
    return [...Array(16)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join("");
  };

  return (
    <UserContext.Provider value={{ user, handleSignUp, logout }}>
      {children}
    </UserContext.Provider>
  );
};
