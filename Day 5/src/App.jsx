import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signup from "./pages/signup";
import Admin from "./pages/Admin"

import About from "./components/About";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import { BrowserRouter, Route,BrowserRouter as Router,Routes } from "react-router-dom";
import Footer from "./components/Footer";

import Login from "./pages/login";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className=""> 
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<> <div id="home">
          <Home />
          
        </div>
        


        <div id="services">
          <Services />
        </div>

        <div id="doctors">
          <Doctors />
        </div>

        <div id="about">
          <About />
        </div>
</>}>
</Route>
  <Route path="/login" element={<Login/>}></Route>
  <Route path="/signup" element={<Signup/>}></Route>
  <Route path="/dashboard" element={<Dashboard/>}></Route>
  <Route path="/admin" element={<Admin/>}></Route>
  {/* <Route path="/forget" element={<Forget/>}></Route> */}
      </Routes>
      </BrowserRouter>
      {/* <Navbar />

      <main>
        <div id="home">
          <Home />
          
        </div>
        

        <div id="about">
          <About />
        </div>

        <div id="services">
          <Services />
        </div>

        <div id="doctors">
          <Doctors />
        </div>

        
      </main>

      <Footer /> */}
    </div>
  
  );
};

export default App;
