import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, setDarkMode } = useTheme();

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Assistant", id: "ai-assistant" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-7xl"
    >
      <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/40 backdrop-blur-xl px-5 py-3 shadow-xl">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold whitespace-nowrap bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          MP.AI
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="relative text-[14px] xl:text-[15px] font-medium text-gray-300 hover:text-cyan-400 transition duration-300 whitespace-nowrap group"
            >
              {link.name}

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-white/10 transition"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden mt-3 rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl p-5 shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-center text-lg text-gray-300 hover:text-cyan-400 transition"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}