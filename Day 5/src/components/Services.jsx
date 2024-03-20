import React from "react";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Services = () => {
  const icon1 = (
    <RiMicroscopeLine size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Our Courses
          </h1>
          <p className=" mt-2 text-center lg:text-start">
           Major branches offered by our college with industrial based knowledge for students.
          </p>
        </div>
        <div className=" mt-4 lg:mt-0">
          <Button title="More Courses" />
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row gap-5 pt-14">
        <ServicesCard icon={icon1} title="Computer Science and Engineering" />
        <ServicesCard icon={icon1} title="Information Technology" />
        <ServicesCard icon={icon1} title="Electronic and Communication Enginnering"/>
       

      </div>
    </div>
  );
};

export default Services;
