import React from 'react';
import Section from './Section';
import DotsAnimation from './Animation';
import About from './About';
import Header from './Header';



function Home() {
  return (
    <div>
    
      <Header/>
      <DotsAnimation/>
      <Section />
      <About/>
    </div>
  );
}

export default Home;
