import React from "react";
import styles from "../styles";
import "../styles/gradient.css";
import { motion } from "framer-motion";
import { TypingText, ServiceCard } from "../components";
import "../styles/gradient.css";
import { fadeIn, staggerContainer } from "../utils/motion";


const Faqs = ({faqHome}) => {
  return (
    <section
      className={`${styles.paddings} md:py-24 bg-gray-200 dark:bg-gray-600 relative z-10`}
    >
      <div className="gradient-03 z-0" />

      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <div className={`${styles.paddings} md:py-12 bg-gray-200 dark:bg-gray-600 relative z-10`}>
        <TypingText
        title="| Frequently Asked Questions"
        textStyles="px-8 py-2 text-center md:text-[30px] font-semibold dark:text-gray-200"
      />
        <div className="flex justify-center mx-auto mt-2">
          <span className="inline-block w-40 h-1 rounded-full bg-pure-black"></span>
          <span className="inline-block w-3 h-1 mx-1 rounded-full bg-pure-grey"></span>
          <span className="inline-block w-1 h-1 rounded-full bg-pure-black"></span>
        </div>
        <div className="mx-4 mt-2 question-wrap">
          {faqHome.map((faq) => (
            <details className="py-4 question">
              <summary className="flex items-center text-[18px] md:text-[24px] text-left">
                <h2 className="cursor-pointer">{faq.question}</h2>

                <button className="ml-auto">
                  <svg
                    className="w-4 h-4 -mr-1 opacity-75 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                  </svg>
                </button>
              </summary>
              <div className="mt-4 leading-normal text-left text-[14px] md:text-[20px]">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
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

export default Faqs;
