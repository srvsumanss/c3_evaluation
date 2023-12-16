import React from 'react';
import Section from './Section';
import DotsAnimation from './Animation';
import About from './About';
import Header from './Header';
import WhyDheer from './WhyDheer';
import Footer from './Footer';
import BrandsPatner from './BrandsPatner';

function Home() {
  return (
    <div>
    
      <Header/>
      <DotsAnimation/>
      <Section />
      <About/>
      <WhyDheer/>
      <BrandsPatner/>
      <Footer/>
  
    
    </div>
  );
}

export default Home;
