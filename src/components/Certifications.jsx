import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck } from 'lucide-react';

export default function Certifications() {
  const certificates = [
    { provider: "Infosys Springboard", name: "Advanced AI/ML Specialist Path", date: "2025", verify: "#" },
    { provider: "Google Cloud Platform", name: "Machine Learning Engineering Foundations", date: "2024", verify: "#" },
    { provider: "Microsoft Azure Core", name: "AI Fundamentals (AI-900)", date: "2024", verify: "#" },
    { provider: "IBM Developer Network", name: "Data Science Professional Certificate", date: "2023", verify: "#" },
    { provider: "Coursera / DeepLearning.AI", name: "Deep Learning Specialization Suite", date: "2023", verify: "#" }
  ];

  return (
    <section id="certifications" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-gray-500 tracking-tight">
            Verified Credentials
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyber-purple to-cyber-pink mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-panel p-6 rounded-xl border border-white/5 flex flex-col justify-between hover:bg-white/[0.04] transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-gray-400 tracking-wide">{cert.provider}</span>
                  <ShieldCheck size={16} className="text-cyber-neon" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight leading-snug">{cert.name}</h3>
              </div>
              
              <div className="flex items-center justify-between pt-6 mt-4 border-t border-white/5">
                <span className="text-xs font-mono text-gray-500">Issued {cert.date}</span>
                <a href={cert.verify} className="text-xs font-mono text-cyber-purple hover:text-cyber-neon flex items-center gap-1 transition-colors">
                  Verify <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}