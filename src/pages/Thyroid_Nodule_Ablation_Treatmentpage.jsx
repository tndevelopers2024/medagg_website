import React from 'react';
import Navbar from '../components/home/Navbar';
import Treatmentnavbar from '../components/home/Treatmentnavbar';
import Thyroid_Herosection from '../components/Treatment Pages/Thyroid_herosection';
import WhyChooseThyroidAblation from '../components/Treatment Pages/why_choice_Thyroid_ablation';
import HowThyroidWork from '../components/Treatment Pages/How_thyroid_work';
import CompareTreatmentOptionThyroid from '../components/Treatment Pages/Compare_treatment_option_Thyroid';
import Thyroid_bookappoinment from '../components/Treatment Pages/Thyroid_bookappoinment';
import WhatHappensThyroidAblation from '../components/Treatment Pages/What_Happens_Thyroid_Ablation';
import OurDoctor from '../components/home/Ourdoctor';
import Consultourdoctor from '../components/home/Consultourdoctor';

const Thyroid_Nodule_Ablation_Treatmentpage = () => (
  <>
    <Navbar />
    <Treatmentnavbar />
        <Thyroid_Herosection />
        <WhyChooseThyroidAblation />
                <HowThyroidWork />
    <Thyroid_bookappoinment />
    <CompareTreatmentOptionThyroid />
    <WhatHappensThyroidAblation />
        <OurDoctor />
    <Consultourdoctor />
  </>
);

export default Thyroid_Nodule_Ablation_Treatmentpage;
