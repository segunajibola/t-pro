import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-5 md:grid-cols-3 md:grid-rows-2">
      <div className="">
        <Image />
      </div>
      <div>
        <Image />
      </div>
    </div>
  );
};

export default Gallery;
