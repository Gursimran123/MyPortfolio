import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import Services from '../components/Services';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 title="PROJECTS" text="Some of my most recent works with my skills."/>
      <Work />
      <Services />
      <Footer />
    </div>
  )
}

export default Project