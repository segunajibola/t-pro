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
    <div className={`${styles.innerWidth} w-[80%] mx-auto pt-24 pb-12`}>
      <div>
        {services
          .filter((service) => service.name.toUpperCase() === newServiceName.toUpperCase())
          .map((service) => (
            <div className="">
              <Image
                src={service.image}
                alt=""
                width={400}
                height={200}
                className=""
              />
              {service.name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ParticularService;
