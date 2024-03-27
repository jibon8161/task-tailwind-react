import React, { createContext, useContext, useEffect, useState } from "react";

const UserDataContext = createContext();

const Loader = () => {
  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
      <img
        src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
        className="rounded-full h-28 w-28"
        alt=""
      />
    </div>
  ); 
};

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    )
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setLoading(false); 
      });

    return () => {
    
    };
  }, []);

 
  if (loading) {
    return <Loader />; 
  }

  return (
    <UserDataContext.Provider value={userData}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => useContext(UserDataContext);
