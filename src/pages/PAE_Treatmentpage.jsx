import React from 'react';
import Navbar from '../components/home/Navbar';
import Treatmentnavbar from '../components/home/Treatmentnavbar';
import PAE_HeroSection from '../components/Treatment Pages/PAE_Herosection';
import PAE_Treatment_About from '../components/Treatment Pages/What_happens_in_PAE';
import PAE_Treatment_Procedure from '../components/Treatment Pages/HowPAEWork';
import PAE_Treatment_Why_Choose_Us from '../components/Treatment Pages/whychoosePAE';
import PAE_Treatment_FAQs from '../components/Treatment Pages/Are_you_experience';
import PAE_Treatment_Testimonials from '../components/Treatment Pages/Have_Postate';
import PAE_Treatment_Book_Appointment from '../components/Treatment Pages/Compare_treatment_option_PAE';
import OurDoctor from '../components/home/Ourdoctor';
import Consultourdoctor from '../components/home/Consultourdoctor';

const PAE_Treatmentpage = () => (
  <>
    <Navbar />
    <Treatmentnavbar />
    <PAE_HeroSection />
    <PAE_Treatment_Why_Choose_Us />
    <PAE_Treatment_Procedure />
    <PAE_Treatment_About />
    <PAE_Treatment_Testimonials />
    <PAE_Treatment_FAQs />
    <PAE_Treatment_Book_Appointment />
    <OurDoctor />
    <Consultourdoctor />
  </>
);

export default PAE_Treatmentpage;
