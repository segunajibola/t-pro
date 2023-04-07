import React from "react";
import CountUp, { useCountUp } from "react-countup";

const Numbers = () => {
  return (
    <div className="my-4 w-[80%] h-[500px] mx-auto">
      <div className="relative h-[300px] pt-[150px]">
        <div className="text-center">
          <h3 className="text-4xl">Metrics show our success</h3>
          <h4 className="my-2 text-xl">Quantitative results speak volumes</h4>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 md:w-11/12 mx-auto pt-4 text-2xl">
          <div className="text-center">
            <CountUp end={10} enableScrollSpy />
            <span className="inline">+</span>
            <h5 className="">Years of Experience</h5>
          </div>
          <div className="text-center">
            <CountUp end={100} enableScrollSpy />
            <span className="inline">+</span>
            <h5 className="">Clients</h5>
          </div>
          <div className="text-center">
            <CountUp end={200} enableScrollSpy />
            <span className="inline">+</span>
            <h5 className="">Successful Deployment</h5>
          </div>
          <div className="text-center">
            <CountUp end={14} enableScrollSpy />
            <span className="inline">+</span>
            <h5 className="">Awards & Recognition</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
