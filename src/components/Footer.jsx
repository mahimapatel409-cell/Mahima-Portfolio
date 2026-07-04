import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 relative z-10 bg-dark-bg/50 backdrop-blur-md px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h4 className="text-sm font-bold text-white tracking-wide">MAHIMA PATEL</h4>
          <p className="text-xs text-gray-500 font-mono mt-1">Autonomous Portfolio Shell Core v1.0.0 © 2026</p>
        </div>

        <div className="flex gap-6 text-xs text-gray-400">
          <a href="#home" className="hover:text-cyber-neon transition-colors">Top</a>
          <a href="#about" className="hover:text-cyber-neon transition-colors">About</a>
          <a href="#projects" className="hover:text-cyber-neon transition-colors">Projects</a>
          <a href="#contact" className="hover:text-cyber-neon transition-colors">Contact</a>
        </div>

        <button 
          onClick={handleScrollTop}
          className="p-2.5 rounded-xl border border-white/10 hover:border-cyber-neon hover:bg-white/5 transition-all text-gray-400 hover:text-white"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}