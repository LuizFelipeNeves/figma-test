import React from 'react';
import './index.css';

import Destination from '../components/Destination';
import Package from '../components/Package';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

export default function Main() {
  return (
    <div className='main-container flex flex-col items-start flex-nowrap relative mx-auto my-0 w-full max-w-screen-xl'>
      <div className='flex flex-col items-start self-stretch shrink-0 flex-nowrap bg-[url(../assets/images/04f98b2a-1698-4990-9bb1-f71f30c9623f.png)] bg-cover bg-no-repeat relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]' />
      <Destination/>
      <Package/>
      <Testimonial/>
      <div className='flex pt-[120px] pr-[80px] pb-[120px] pl-[80px] gap-[24px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[url(../assets/images/51a1b21a-e42f-4d16-a10b-fbcc19c247dc.png)] bg-cover bg-no-repeat relative z-[88] w-full h-[20vh] md:h-[30vh] lg:h-[40vh]' />
      <Footer />
    </div>
  );
}