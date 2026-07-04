import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ finishLoading }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(finishLoading, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [finishLoading]);

  return (
    <div className="fixed inset-0 bg-dark-bg z-50 flex flex-col items-center justify-center font-sans">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        className="text-center"
      >
        <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyber-neon via-cyber-purple to-cyber-pink tracking-widest mb-4">
          MAHIMA PATEL
        </h2>
        <p className="text-xs text-gray-400 tracking-widest uppercase mb-8">Initializing AI Core Systems Engine</p>
        
        <div className="w-64 h-[2px] bg-dark-border relative rounded-full overflow-hidden mx-auto">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyber-neon to-cyber-violet"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-cyber-neon font-mono text-sm block mt-2">{progress}%</span>
      </motion.div>
    </div>
  );
}
