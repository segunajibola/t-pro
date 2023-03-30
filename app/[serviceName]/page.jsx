"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypingText } from "../../components";
import "../../styles/gradient.css";
import styles from "../../styles";
import { fadeIn, staggerContainer } from "../../utils/motion";
import Image from "next/image";
import services from "../../data/services";

const ParticularService = ({ params }) => {
  const { serviceName } = params;

  const splitStr = serviceName.split("-").join(" ");

  const newServiceName = splitStr.charAt(0).toUpperCase() + splitStr.slice(1);

  return (
    <div className={`${styles.innerWidth} w-[80%] mx-auto pt-20 pb-12`}>
      {services
        .filter(
          (service) =>
            service.name.toUpperCase() === newServiceName.toUpperCase()
        )
        .map((service) => (
          <div
            className="w-[100%] border-4 border-
            red-500"
          >
            <Image
              src={service.image}
              alt=""
              width={400}
              height={100}
              className="w-full h-[200px] bg-cover object-cover object-center"
            />
            <div className="w-[90%] mx-auto text-center">
              <h2 className="text-xl md:text-2xl font-semibold my-10">{service.name}</h2>
              <p className="w-[80%] mx-auto">
                {service.description}
              </p>
              <button className="bg-gray-500 dark:bg-gray-700 p-3 my-3 text-white rounded-md text-center">
                <a href="" className="">
                  Book a session
                </a>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ParticularService;
