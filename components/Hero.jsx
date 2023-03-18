import React from "react";
import Image from "next/image";
import ImageSlider from "./ImageSlider";
const Hero = () => {
  const slides = [
    { url: "/makeup.jpg", title: "makeup" },
    { url: "/decoration.jpg", title: "decoration" },
  ];
  return (
    <>
      <div>
        <Image src="" />
        <div className="grid bg-gray-200 pt-10 px-[2px] dark:bg-gray-700 lg:grid-cols-1 w-screen sm:w-full">
          <div className="relative mt-2 hidden md:block md:col-span-5 2xl:col-span-3">
            <div className="w-full h-[85vh] my-0 mx-auto">
              <ImageSlider slides={slides} />
            </div>
          </div>
          <div className="mx-auto bg-gray-200 lg:max-w-full pb-4 lg:p-8 xl:mr-0 2xl:col-span-2">
            <div className="mx-auto w-fit mt-0 text-center">
              <div className="w-full h-[230px] md:hidden">
                <ImageSlider slides={slides} className="h-fit" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
