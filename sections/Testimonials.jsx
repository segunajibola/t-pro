"use client";

import testimonials from "../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="w-full overflow-hidden dark:bg-gray-100 dark:text-gray-800"
    >
      {/* <div className="grid grid-cols sm:grid-cols-1 justify-center gap-8 px-2 pt-4"> */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
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
                <p className="text-lg font-semibold mx-2 dark:text-gray-900">
                  {testimonial.text}
                </p>
              </blockquote>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    // </div>
  );
};

export default Testimonials;
