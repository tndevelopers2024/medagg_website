import React from 'react';
import Navbar from '../components/home/Navbar';
import Treatmentnavbar from '../components/home/Treatmentnavbar';
import GAE_HeroSection from '../components/Treatment Pages/GAE_Herosection';
import GAE_Treatment_Why_Choose_us from '../components/Treatment Pages/GAE_Treatment_Why_Choose_us';
import HowGAEWork from '../components/Treatment Pages/HowGAEWork';
import GAE_Are_you_experience from '../components/Treatment Pages/GAE_Are_you_experience';
import GAE_Bookanappoinment from '../components/Treatment Pages/GAE_Bookanappoinment';
import GAE_Compare_treatment_option from '../components/Treatment Pages/GAE_Compare_treatment_option';
import What_happen_in_GAE from '../components/Treatment Pages/what_happen_in_GAE';
import Ourdoctor from '../components/home/Ourdoctor';
import Consultourdoctor from '../components/home/Consultourdoctor';
const GAE_Treatmentpage = () => (
  <>
    <Navbar />
    <Treatmentnavbar />
    <GAE_HeroSection />
    <GAE_Treatment_Why_Choose_us />
    <HowGAEWork />
    <GAE_Are_you_experience />
    <GAE_Bookanappoinment />
    <GAE_Compare_treatment_option />
    <What_happen_in_GAE />
    <Ourdoctor />
    <Consultourdoctor />
  </>
);

export default GAE_Treatmentpage;
