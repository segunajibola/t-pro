"use client";

import React from "react";
import testimonials from "../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import styles from "../styles";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import "../styles/gradient.css";
import { fadeIn, staggerContainer } from "../utils/motion";

const Testimonials = () => {
  return (
    <section
      className={`${styles.paddings} md:py-24 bg-gray-200 dark:bg-gray-600 relative z-10`}
    >
      <div className="gradient-01 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText
          title="| Testimonials"
          textStyles="text-center md:text-[30px] font-bold dark:text-gray-200"
        />

        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal text-[14px] md:text-[24px] text-center text-secondary-white dark:text-white"
        >
          What Others Are Saying
        </motion.p>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[Autoplay, Navigation]}
          className="w-[430px] sm:w-[30rem] mx-auto md:w-[40rem]"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide className="md:my-5 p-2">
              <figure className="p-3 text-center">
                <img
                  className="w-32 h-32 rounded-full mx-auto"
                  src={testimonial.image}
                  alt=""
                />
                <figcaption className="font-medium text-gray-500 dark:text-gray-800">
                  <div className="">{testimonial.name}</div>
                  <div className="mb-2">{testimonial.position}</div>
                </figcaption>
                <blockquote className="mx-auto">
                  <p className="text-lg font-normal mx-2 dark:text-gray-900">
                    {testimonial.text}
                  </p>
                </blockquote>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      <div className="flex justify-center">
        <motion.img
          variants={fadeIn("up", "tween", 0.1, 0.3)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[50px] h-[50px] object-contain my-[28px] bg-gray-300 p-3 dark:bg-gray-500"
        />
      </div>
    </section>
  );
};

export default Testimonials;
