import React from 'react';
import Navbar from '../components/home/Navbar';
import Treatmentnavbar from '../components/home/Treatmentnavbar';
import UAE_Herosection from '../components/treatment/UAE_Herosection';
import WhyChooseUAE from '../components/treatment/why_choose_UAE';
import HowUAEWorks from '../components/treatment/How_UAE_work';
import WhatHappenUAE from '../components/treatment/what_happen_UAE';
import AreYouExperiencingUAE from '../components/treatment/Are_you_experience_UAE';
import ThinkYouMightNeedUAE from '../components/treatment/Think_you_might_need_UAE';
import UAE_Compare from '../components/treatment/UAE_Compare';
import OurDoctor from '../components/home/Ourdoctor';
import Consultourdoctor from '../components/home/Consultourdoctor';

const UAEPage = () => {
  return (
    <>
      <Navbar />
      <Treatmentnavbar />
      <UAE_Herosection />
      <WhyChooseUAE />
            <HowUAEWorks />
            <AreYouExperiencingUAE />
      <ThinkYouMightNeedUAE />
      <UAE_Compare />
            <WhatHappenUAE />
      <OurDoctor />
      <Consultourdoctor />
    </>
  );
};

export default UAEPage;
