import React from "react";
import Link from "next/link";

const ServiceCard = ({ service }) => {
  return (
    <div
      className="flex flex-col bg-gray-400 rounded-3xl shadow-lg h-fit relative mx-4 md:mx-2"
      key={service.id}
    >
      <div className="w-full h-[40%]">
        <img
          src={service.image}
          alt={`${service.name} services`}
          className="rounded-t-2xl object-cover object-top w-full h-full"
        />
      </div>

      <div className="px-3 py-5 h-[60%]">
        <div className="text-center">
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
    </div>
  );
};

export default ServiceCard;
