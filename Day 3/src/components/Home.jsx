import React from "react";
import Button from "../layouts/Button";
import Navbar from "./Navbar";
// import { Navbar } from "flowbite-react";

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className=" min-h-screen flex flex-col justify-center lg:px-31.5 px-5 text-white bg-[url('assets/img/clg.jpeg')] bg-no-repeat bg-cover opacity-90">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          Welcome to UniAccess!
        </h1>
        <p>
        An extensive admission portal for the students, parents, and education industry players who are seeking <br></br>information on  education sector in India . 
        One can rely on Uni Access.com for getting most brief and<br></br> relevant data on colleges and universities.

        </p>
        

        <Button title="Join Us" />
        
        
      </div>
    </div>
    </>
  );
};

export default Home;
