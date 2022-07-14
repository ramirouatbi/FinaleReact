import React from "react";
import mission from "../../imgs/mission.png";
import vision from "../../imgs/vision.png";
import values from "../../imgs/values.png";
import melamine from "../../imgs/melamine.png";
export default function Missions() {
  return (
    <div className=" w-full hidden sm:flex h-[600px] bg-[#EEEE] pr-20 justify-center mb-[100px]">
      <div className="mt-[90px]">
        <div className="flex justify-center	ml-[70px] mb-[20px]">
          <div className="h-[70px] w-[70px] " data-aos="fade-right" data-aos-duration="2000">
            <img src={mission} alt="mission img" />
          </div>
          <div className="w-[40%] ml-[50px]">
            <h2 className="text-[black] pt-[25px]" data-aos="fade-left" data-aos-duration="2000">
              Our mission is to continue to provide our customers with the best
              in materials and a wide variety of cutting edge choices through
              our continual search for the next new innovation.
            </h2>
          </div>
        </div>
        <div className="flex justify-center	ml-[70px] mb-[20px]" data-aos="fade-right" data-aos-delay="200" data-aos-duration="3000">
          <div className="h-[70px] w-[70px]">
            <img src={vision} alt="vision img" />
          </div>
          <div className="w-[40%] ml-[50px] ">
            <h2 className="text-[black] pt-[25px]" data-aos="fade-left" data-aos-delay="200" data-aos-duration="3000">
              Our mission is to continue to provide our customers with the best
              in materials and a wide variety of cutting edge choices through
              our continual search for the next new innovation.
            </h2>
          </div>
        </div>
        <div className="flex justify-center	ml-[70px] mb-[20px]">
          <div className="h-[70px] w-[70px]" data-aos-delay="400" data-aos-duration="3000" data-aos="fade-right">
            <img src={values} alt="values img" />
          </div>
          <div className="w-[40%] ml-[50px]" data-aos="fade-left" data-aos-delay="400" data-aos-duration="3000">
            <h2 className="text-[black] pt-[25px]">
              Our mission is to continue to provide our customers with the best
              in materials and a wide variety of cutting edge choices through
              our continual search for the next new innovation.
            </h2>
          </div>
        </div>
      </div>
      <div className="mt-[120px] scale-75 hover:scale-100 cursor-pointer">
        <img src={melamine} alt='mission img' />
      </div>
    </div>
  );
}
