import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Code2, Layers } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const focalPoints = [
    { icon: <Brain className="text-cyber-neon" size={24} />, title: "AI Engineering", desc: "Developing optimized custom architectures for deep predictive tasks." },
    { icon: <Cpu className="text-cyber-purple" size={24} />, title: "Machine Learning", desc: "Training clean models using supervised and unsupervised workflows." },
    { icon: <Code2 className="text-cyber-violet" size={24} />, title: "Problem Solving", desc: "Translating engineering algorithmic logic directly into efficient systems." },
    { icon: <Layers className="text-cyber-pink" size={24} />, title: "Full-Stack AI Solutions", desc: "Integrating core intelligent models seamlessly into real-world UI apps." }
  ];

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-gray-500 tracking-tight">
            About My Core Mission
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyber-neon to-cyber-purple mx-auto mt-4" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Visual Profile Avatar Container */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-neon to-cyber-pink rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="w-72 h-96 rounded-3xl overflow-hidden glass-panel border border-white/10 p-3 relative bg-dark-bg">
                <div className="w-full h-full rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 flex items-center justify-center border border-white/5 relative overflow-hidden">
                  {/* Embedded abstract mesh geometry representation within UI placeholder */}
                  <div className="absolute inset-0 opacity-20 mesh-gradient animate-pulse" />
                  <div className="z-10 text-center px-4">
                    <span className="text-4xl block mb-2">👩‍💻</span>
                    <h4 className="text-md font-semibold text-white">Mahima Patel</h4>
                    <p className="text-xs text-cyber-neon font-mono mt-1">AI/ML Student Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Summary Info Content */}
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Bridging the Gap Between Complex Datasets and Interactive Interfaces
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I am a 3rd-year B.Tech student in Artificial Intelligence and Machine Learning. My goal is to build clean, functional AI apps that solve real-world problems. I combine backend machine learning models with responsive modern web designs.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I love finding elegant solutions to complex coding challenges, working with teams on production-ready projects, and continuously learning new technologies.
            </p>

            {/* Strategic Focus Attributes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {focalPoints.map((item, idx) => (
                <div key={idx} className="glass-panel p-4 rounded-xl border border-white/5 flex gap-4 items-start hover:border-white/20 transition-all">
                  <div className="p-2 rounded-lg bg-white/5 shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="text-white font-medium text-sm">{item.title}</h4>
                    <p className="text-gray-400 text-xs mt-1 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}