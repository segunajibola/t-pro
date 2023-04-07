"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypingText } from "../../components";
import "../../styles/gradient.css";
import styles from "../../styles";
import { fadeIn, staggerContainer } from "../../utils/motion";
import Image from "next/image";
import {
  beauty,
  bead_making,
  event_decoration,
} from "../../data/faqHome";
import services from "../../data/services";
import { Faqs } from "../../sections";

const ParticularService = ({ params }) => {
  const { serviceName } = params;

  const splitWithSpace = serviceName.split("-").join(" ");

  const splitWithUnderscore = serviceName.split("-").join("_");

  const newServiceName = splitWithSpace.charAt(0).toUpperCase() + splitWithSpace.slice(1);

  const arrName =
    serviceName === "beauty"
      ? beauty
      : splitWithUnderscore === "bead_making"
      ? bead_making
      : splitWithUnderscore === "event_decoration"
      ? event_decoration
      : "";

  return (
    <div className={`${styles.innerWidth} w-[80%] mx-auto pt-20 pb-12`}>
      {services
        .filter(
          (service) =>
            service.name.toUpperCase() === newServiceName.toUpperCase()
        )
        .map((service) => (
          <div className="w-[100%]">
            <Image
              src={service.image}
              alt=""
              width={400}
              height={100}
              className="w-full h-[50%] bg-cover object-cover object-center"
            />
            <div className="w-[90%] mx-auto text-center">
              <h2 className="text-xl md:text-2xl font-semibold my-10">
                {service.name}
              </h2>
              <p className="w-[80%] mx-auto">{service.description}</p>
              <a href="" className="flex justify-center">
                <button className="bg-gray-500 dark:bg-gray-700 p-3 my-5 text-white rounded-md text-center">
                  Book a session
                </button>
              </a>
            </div>
          </div>
        ))}
      <Faqs faqHome={arrName} />
    </div>
  );
};

export default ParticularService;
