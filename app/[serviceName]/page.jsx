import React from "react";

const ParticularService = ({ params }) => {
  const { serviceName } = params;

  const splitStr = serviceName.split("-").join(" ")
  
  const newServiceName = splitStr.charAt(0).toUpperCase() + splitStr.slice(1)  

  return <div className="mt-20">{newServiceName}</div>;
};

export default ParticularService;
