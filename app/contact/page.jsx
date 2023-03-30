"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypingText } from "../../components";
import "../../styles/gradient.css";
import styles from "../../styles";
import { fadeIn, staggerContainer } from "../../utils/motion";
import Image from "next/image";

const MainContact = () => (
  <div className={`${styles.innerWidth} w-[80%] mx-auto pt-24 pb-12`}>
    <div className="flex gap-4 justify-center">
      <Image src="/makeup.jpg" alt="" width={400} height={200} className="" />
      <Image
        src="/decoration.jpg"
        alt=""
        width={400}
        height={200}
        className=""
      />
    </div>
    <div className="mt-10">
      <TypingText
        title="| Contact T-pro Signature"
        textStyles="text-center md:text-[30px] font-bold dark:text-gray-200"
      />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal text-[14px] md:text-[24px] text-center text-secondary-white dark:text-white"
      >
        Reach Us
      </motion.p>
    </div>
    <div className="mt-10">
      <p className="w-[80%] mx-auto">
        We would love to hear from you! Our team is dedicated to providing you
        with exceptional customer service and support. If you have any
        questions, comments, or concerns, please feel free to reach out to us
        using the contact information below:
      </p>

      <div className="my-10 flex flex-col gap-3">
        <p>Email: [insert email address here]</p>
        <p>Phone: [insert phone number here]</p>
        <p>Address: [insert physical address here]</p>
      </div>

      <p>
        Alternatively, you can also use the contact form below to send us a
        message directly. Please provide as much detail as possible so that we
        can assist you in the best way possible. We strive to respond to all
        inquiries within 24-48 hours. Thank you for choosing our website for
        your needs. We value your feedback and look forward to hearing from you
        soon!
      </p>
    </div>
  </div>
);

export default MainContact;
