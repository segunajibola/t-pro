import React from "react";
import Link from "next/link";

const ServiceCard = ({ service }) => {
  return (
    <div
      className="flex flex-col bg-gray-400 rounded-3xl shadow-lg h-full relative mx-4 md:mx-2"
      key={service.id}
    >
      <img
        src={service.image}
        alt={`${service.name} services`}
        className="rounded-t-2xl object-cover object-top w-full h-48"
      />
      <div className="flex flex-col px-3 py-5 text-center h-full justify-between">
        <h3 className="font-bold text-2xl">{service.name}</h3>
        <p className="pt-2">{service.description}</p>

        <Link
          href={`/${service.name.toLowerCase().split(" ").join("-")}`}
          className="block w-32 mx-auto mt-4 px-2 py-1 bg-white rounded-md shadow-md text-sm font-bold text-black"
        >
          See more
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
