import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/ui/Loader';
import CustomCursor from './components/ui/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useSmoothScroll } from './hooks/useSmoothScroll';

export default function App() {
  const [loading, setLoading] = useState(true);
  
  // Initialize Lenis smooth scroll engine
  useSmoothScroll();

  return (
    <div className="relative min-h-screen text-white select-none selection:bg-cyber-neon selection:text-black">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader finishLoading={() => setLoading(false)} />
        ) : (
          <>
            <div className="aurora-bg" />
            <div className="mesh-gradient opacity-40 fixed inset-0 pointer-events-none" />
            
            <CustomCursor />
            <Navbar />
            
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Certifications />
              <Services />
              <Testimonials />
              <Contact />
            </main>
            
            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}