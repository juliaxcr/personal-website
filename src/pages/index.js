import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Slides from "../components/Slides";
import { homeObjOne, homeObjTwo } from "../components/Slides/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection/>
      <Slides {...homeObjOne}/>
      <Slides {...homeObjTwo}/>
    </>
  );
};

export default Home;
