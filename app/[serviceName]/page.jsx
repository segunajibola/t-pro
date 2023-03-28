import React from "react";

const ParticularService = ({ params }) => {
  const { serviceName } = params;

  const newServiceName = serviceName.split("-").join(" ")
  word.charAt(0).toUpperCase()
  + word.slice(1)
  

  return <div className="mt-20">{newServiceName}</div>;
};

export default ParticularService;
