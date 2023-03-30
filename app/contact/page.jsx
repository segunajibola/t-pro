"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypingText } from "../../components";
import "../../styles/gradient.css";
import styles from "../../styles";
import { fadeIn, staggerContainer } from "../../utils/motion";
import Image from "next/image";
// import style from "../globals.css";
import style from "./page.module.css";

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
    <div className="mt-10 w-[80%] mx-auto">
      <p className="">
        We would love to hear from you! Our team is dedicated to providing you
        with exceptional customer service and support. If you have any
        questions, comments, or concerns, please feel free to reach out to us
        using the contact information below:
      </p>

      <div className="my-10 flex flex-col gap-3">
        <a href="mailto:em@i.l">Email: [insert email address here]</a>
        <a href="tel:+2347085596323">Phone: +2347085596323</a>
        <p>Address: [insert physical address here]</p>
      </div>

      <p>
        Alternatively, you can also use the contact form below to send us a
        message directly. Please provide as much detail as possible so that we
        can assist you in the best way possible. We strive to respond to all
        inquiries within 24-48 hours.
      </p>
      <p className="mt-10">
        Thank you for choosing our website for your needs. We value your
        feedback and look forward to hearing from you soon!
      </p>
    </div>
    <form
      method="POST"
      action="https://formsubmit.co/cfd3b6bc430690ebff065253cdfdb7b5"
      className="relative flex flex-col max-w-[600px] w-[80%] mx-auto mt-20 md:mt-16"
    >
      <input
        className="bg-gray-300 dark:bg-gray-300 rounded-lg p-2 outline-none placeholder:text-gray-600"
        type="text"
        placeholder="Name"
        name="name"
        required
      />
      <input
        className="bg-gray-300 dark:bg-gray-300 my-4 p-2 rounded-lg outline-none placeholder:text-gray-600"
        type="email"
        placeholder="Email"
        name="email"
        required
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        className="bg-gray-300 dark:bg-gray-300 mb-4 p-2 rounded-lg outline-none placeholder:text-gray-600"
      />
      <textarea
        className="bg-gray-300 dark:bg-gray-300 rounded-lg p-2 outline-none placeholder:text-gray-600"
        name="message"
        rows="10"
        placeholder="Message"
        required
      ></textarea>
      <input
        type="hidden"
        name="_next"
        value="https://www.segunajibola.com/thankyou"
      />
      <input type="hidden" name="_captcha" value="false" />
      <button className={`${style.button} bg-gray-300 rounded-lg text-lg dark:bg-gray-100 border-2 border-red-500 hover:bg-gray-100 hover:border-red-200 px-4 py-3 my-8 mx-auto flex items-center dark:border-gray-900 dark:hover:bg-gray-300 dark:hover:border-gray-800`}>
        Send mail
      </button>
    </form>
    <button className="bg-gray-300 rounded-lg text-lg dark:bg-gray-100 border-2 border-red-500 hover:bg-gray-100 hover:border-red-200 px-4 py-3 my-8 mx-auto flex items-center dark:border-gray-900 dark:hover:bg-gray-300 dark:hover:border-gray-800">
        Send mail
      </button>
  </div>
);

export default MainContact;
