import React from "react";
import Link from "next/link"

const ServiceCard = ({ service }) => {
  return (
      <div className="bg-gray-600 rounded-3xl shadow-lg" key={service.id}>
        <img
          src={service.image}
          alt={`${service.name} services`}
          className="rounded-t-2xl object-cover object-top w-full h-40"
        />
        <div className="p-3 text-center">
          <h3 className="font-bold text-2xl">{service.name}</h3>
          <p className="pt-2">{service.description}</p>
          
          <Link
            href={`/${service.name}`}
            className="block text-center w-32 mx-auto mt-4 px-2 py-1 bg-white rounded-md shadow-md text-sm font-bold text-black"
          >
            See more
          </Link>
        </div>
      </div>
  );
};

export default ServiceCard;