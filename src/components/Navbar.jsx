import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, setDarkMode } = useTheme();

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 w-[92%] max-w-6xl glass-panel rounded-full px-6 py-3 flex items-center justify-between shadow-2xl"
    >
      <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyber-neon to-cyber-purple tracking-tight">
        MP.AI
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a 
            key={link} 
            href={`#${link.toLowerCase()}`}
            className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity relative group"
          >
            {link}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyber-neon transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-white/10 dark:hover:bg-black/20 transition-colors"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Mobile Toggle */}
        <button className="md:hidden p-1" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-16 left-0 right-0 glass-panel rounded-3xl p-6 flex flex-col gap-4 text-center border md:hidden"
        >
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium block py-2"
            >
              {link}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}