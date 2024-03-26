import React, { createContext, useContext, useEffect, useState } from "react";

const UserDataContext = createContext();

const Loader = () => {
  return (
    <div class="relative flex justify-center items-center min-h-screen bg-black">
      <div class="absolute animate-spin rounded-full  border-t-4 border-b-4 border-purple-500"></div>
      <img
        alt="loader"
        src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
        class="rounded-full h-28 w-28"
      />
    </div>
  ); // You can customize this loader as needed
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
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setLoading(false); // Set loading to false if there's an error
      });

    return () => {
      // Cleanup
    };
  }, []);

  // Render loader if data is still loading
  if (loading) {
    return <Loader />; // Use the Loader component here
  }

  return (
    <UserDataContext.Provider value={userData}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => useContext(UserDataContext);
