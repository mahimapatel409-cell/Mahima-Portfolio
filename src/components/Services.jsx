import React from 'react';
import { motion } from 'framer-motion';
import { Bot, LineChart, Code, Terminal, ToggleLeft, Database } from 'lucide-react';

export default function Services() {
  const serviceOfferings = [
    { icon: <Bot className="text-cyber-neon" size={24} />, title: "Intelligent Agent Solutions", desc: "Building responsive custom AI chatbots, system automations, and LLM orchestration layer templates." },
    { icon: <LineChart className="text-cyber-purple" size={24} />, title: "Machine Learning Solutions", desc: "Training clean models to extract insights from raw, unstructured enterprise datasets." },
    { icon: <Terminal className="text-cyber-violet" size={24} />, title: "Python Software Engineering", desc: "Writing clean, performant backends, multi-threaded worker files, and custom algorithmic scripts." },
    { icon: <Code className="text-cyber-pink" size={24} />, title: "Web Application Construction", desc: "Building highly responsive interfaces integrated with secure, containerized data pipes." },
    { icon: <ToggleLeft className="text-cyber-neon" size={24} />, title: "Process Automation Scripts", desc: "Automating routine system processes using web scrapers and API integrations." },
    { icon: <Database className="text-cyber-purple" size={24} />, title: "Data Analysis Pipelines", desc: "Cleaning messy raw data inputs and creating production-ready business visualization dashboards." }
  ];

  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-gray-500 tracking-tight">
            Capabilities Ecosystem
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyber-neon to-cyber-pink mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceOfferings.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-cyber-purple/30 transition-all group duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}