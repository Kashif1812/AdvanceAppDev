import React from "react";
import img from "../assets/img/cam.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold  text-center lg:text-start">About Us</h1>
        <p className=" text-justify lg:text-start">
        Students can use Uni Access.com as one stop destination to search about their dream college, available courses,
         admission process and lots more interactive tools to simplify the process of finding alma-mater. The website has
          the repository of more than 20,000 colleges and 6000 courses categorized in different streams like Management,
           Engineering, Medical, Arts and much more. One can classify colleges on the basis of location, ranking, ratings, 
           fees and cutoff for different competitive exams.
        </p>
        <p className="text-justify lg:text-start">
        Uni Access.com provides a non-conventional platform which focuses on delivering quality leads to enable them for
         collecting highly motivated candidates. The algorithm for data segregation in the website allows us to segregate 
         the data up to multiple levels, providing an edge to the clients looking for highly specific and active database.
        </p>
        <p className="text-justify lg:text-start">
        The website preferable addresses the concerns of parents looking for an ideal institute for their wards. It provides
         a multichannel filter page which sorts data on the basis of ranking, fees and cutoff. We have a highly skilled team
          of data miners who can present data in the most interactive allowing you to make decisions in the most informative way.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
