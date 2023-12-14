import React from 'react';
import Navbar from './Navbar';
import Section from './Section';
import DotsAnimation from './Animation';
import About from './About';



function Home() {
  return (
    <div>
      <Navbar />
      <DotsAnimation />
      <Section />
      <About/>
    </div>
  );
}

export default Home;
