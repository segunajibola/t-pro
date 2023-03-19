"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedCharacters";
import "../styles/slider.css";

const sliderStyles = {
  width: "100%",
  position: "relative",
  height: "100%",
  marginLeft: "auto",
  marginRight: "auto",
};

const slideStyles = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  marginLeft: "auto",
  marginRight: "auto",
  // position: "relative",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "30px",
  color: "gray",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "30px",
  color: "gray",
  zIndex: 1,
  cursor: "pointer",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "10px",
};

const text = {
  fontSize: "300px",
  fontColor: "red",
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  useEffect(() => {
    setTimeout(() => {
      goToNext();
    }, 3000);
  });

  const [replay, setReplay] = useState(true);
  // Placeholder text data, as if from API
  const placeholderText = [
    // { type: "heading1", text: "Framer Motion" },
    // {
    //   type: "heading2",
    //   text: "Animating responsive text!",
    // },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  // Quick and dirt for the example
  // const handleReplay = () => {
  //   setReplay(!replay);
  //   setTimeout(() => {
  //     setReplay(true);
  //   }, 600);
  // };

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div
        style={slideStylesWidthBackground}>
        {/* <div style={text} className="text-7xl text-red-500 z-10">
          {slides.title}
        </div> */}
        <p className="text-sm md:text-3xl text-white absolute mt-10 border-4 bg-gray-600 p-2 md:p-4 top-[5rem] md:top-[12rem] left-[5.5rem] md:left-[21.5rem]">
          Make up | Event planner | Bead making
        </p>
        <motion.div
          className="App"
          initial="hidden"
          // animate="visible"
          animate={replay ? "visible" : "hidden"}
          variants={container}
        >
          <div className="container">
            {placeholderText.map((item, index) => {
              return <AnimatedText {...item} key={index} />;
            })}
          </div>
          {/* <button onClick={handleReplay}>
            Replay <span>⟲</span>
          </button> */}
        </motion.div>
      </div>
      {/* <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
           ●
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default ImageSlider;
