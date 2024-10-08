import React, { useState } from 'react';
import './index.css';

import Destination from '../components/Destination';
import Package from '../components/Package';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

import Hero from '../components/Hero';


import Header from '../components/Header';

export default function Main() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const showSidebar = () => {
    setSidebarVisible(true);
  };

  const hideSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <div>
      <Header showSidebar={showSidebar} isSidebarVisible={isSidebarVisible } hideSidebar={hideSidebar }/>
      <Hero/>
      <Destination/>
      <Package/>
      <Testimonial/>
      <Contact/>
      <Footer />
    </div>
  );
}