import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, MapPin } from 'lucide-react';
import Canvas3D from './ui/Canvas3D';

export default function Hero() {
  const titles = ["Future AI Engineer", "Future Python Developer", "Future Full-Stack Engineer", "Future Data Scientist"];
  const [textIndex, setTextIndex] = useState(0);
  const [subText, setSubText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const fullText = titles[textIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setSubText(fullText.substring(0, subText.length - 1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setSubText(fullText.substring(0, subText.length + 1));
      }, 100);
    }

    if (!isDeleting && subText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && subText === '') {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [subText, isDeleting, textIndex]);

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-24 px-4 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 text-cyber-neon font-mono uppercase tracking-widest text-sm mb-3">
            <span>My Portfolio</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            Hi, I'm <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-300 to-gray-500">
              Mahima Patel
            </span>
          </h1>
          
          <div className="h-12 text-2xl md:text-3xl font-bold text-cyber-purple mb-4">
            <span>{subText}</span>
            <span className="animate-pulse">|</span>
          </div>

          <p className="text-gray-400 text-base md:text-lg max-w-xl mb-6 leading-relaxed">
            AI & Machine Learning undergraduate student at <strong>Shri Ram Institute of Technology, Jabalpur</strong>. 
            I'm passionate about AI, Machine Learning, Python, and problem-solving, and I'm continuously improving my skills through hands-on projects, coding, and continuous learning.
          </p>

          <div className="flex items-center gap-2 text-xs font-mono text-gray-500 mb-8">
            <MapPin size={14} className="text-cyber-pink" />
            <span>Jabalpur, Madhya Pradesh, India</span>
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            <a href="#projects" className="flex items-center gap-2 bg-gradient-to-r from-cyber-neon to-cyber-purple text-black font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform">
              Explore Tech Stack <ArrowRight size={16} />
            </a>
            <a href="#contact" className="flex items-center gap-2 glass-panel px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
              Initiate Contact
            </a>
          </div>

          <div className="flex gap-5 text-gray-400">
            <a href="https://github.com/mahimapatel409-cell" target="_blank" rel="noreferrer" className="hover:text-cyber-neon transition-colors"><Github size={22} /></a>
            <a href="https://www.linkedin.com/in/mahima-patel-53900b32b" target="_blank" rel="noreferrer" className="hover:text-cyber-purple transition-colors"><Linkedin size={22} /></a>
            <a href="mailto:baipatelradha409@gmail.com" className="hover:text-cyber-pink transition-colors"><Mail size={22} /></a>
          </div>
        </motion.div>
        {/* Right Column: 3D Scene */}
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full h-full flex justify-center items-center relative"
            >
  <Canvas3D />
</motion.div>    
    
      </div>
    </section>
  );
}