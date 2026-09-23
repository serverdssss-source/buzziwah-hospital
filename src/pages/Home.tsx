import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import WhatIsHealthcareMarketing from '../components/WhatIsHealthcareMarketing';
import ClientLogos from '../components/ClientLogos';
import FeaturedHospitals from '../components/FeaturedHospitals';
import HowWeWork from '../components/HowWeWork';
import ReviewsSection from '../components/ReviewsSection';
import FAQSection from '../components/FAQSection';
import CaseStudies from '../components/CaseStudies';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <>
      <Header />
      <Hero />
      <WhatIsHealthcareMarketing />
      <ClientLogos />
      <FeaturedHospitals />
      <HowWeWork />
      <CaseStudies />
      <ReviewsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
};

export default Home;
