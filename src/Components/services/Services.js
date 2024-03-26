import React from "react";
import { useUserData } from "../context/Context";

const Services = () => {
  const userData = useUserData();
 
  return (
    <div id="Services">
      <div className="divider"></div>
      <div className="container mx-auto ">
        <h1 className="text-3xl underline font-serif mb-8">My Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {userData?.user?.services.map((service, index) => (
            <div
              key={index}
              className="card card-compact bg-base-100 shadow-lg shadow-black hover:shadow-2xl hover:shadow-orange-500"
            >
              <figure>
                <img
                  className="w-full h-64 object-cover hover:animate-pulse"
                  src={
                    service?.image?.url ||
                    "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  }
                  alt={service.title || "Service Image"}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {service?.name || "Service Title"}
                </h2>
                <h2 className="card-title">
                  Charge: {service?.charge || "Service Charge"}
                </h2>
                <p className="text-left">
                  {service.desc || "Service Description"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
