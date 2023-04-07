import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-5 md:grid-cols-3 md:grid-rows-2">
      <div className="col-span-1">
        <Image />
      </div>
      <div className="col-span-1 row-span-2">
        <Image />
      </div>
      <div className="col-span-1">
        <Image />
      </div>
      <div className="col-span-1">
        <Image />
      </div>
      <div className="col-span-1">
        <Image />
      </div>
      <div className="col-span-2">
        <Image />
      </div>
    </div>
  );
};

export default Gallery;
