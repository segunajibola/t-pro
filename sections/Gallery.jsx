import React from "react";
import Image from "next/image";
import styles from "../styles";

const Gallery = () => {
  return (
    <section
      className={`${styles.paddings} md:py-24 bg-gray-200 dark:bg-gray-600 relative z-10`}
    >
      <div className="grid grid-cols-2 grid-rows-5 md:grid-cols-3 md:grid-rows-3 gap-3">
        <div className="col-span-1">
          <div className="w-full h-full">
            <Image
              scr="/decoration.jpg"
              width={400}
              height={400}
              className="rounded-t-2xl object-cover object-center w-full h-full"
            />
          </div>
        </div>
        <div className="col-span-1 row-span-2 md:row-span-1">
          <div className="w-full h-full"></div>
        </div>
        <div className="col-span-1 md:row-span-2">
          <div className="w-full h-full"></div>
        </div>
        <div className="col-span-1 md:col-span-2">
          <div className="w-full h-full"></div>
        </div>
        <div className="col-span-1">
          <div className="w-full h-full"></div>
        </div>
        <div className="col-span-2 md:col-span-2">
          <div className="w-full h-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
