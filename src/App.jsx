import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import Pain from './components/Pain';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import ROICalculator from './components/ROICalculator';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App = () => {
  return (
    <div style={{ backgroundColor: '#000000', color: '#FFFFFF', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Logos />
      <Pain />
      <HowItWorks />
      <Features />
      <Testimonials />
      <ROICalculator />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default App;
