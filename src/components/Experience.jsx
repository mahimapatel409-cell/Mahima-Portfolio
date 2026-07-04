import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Trophy, GraduationCap } from 'lucide-react';

export default function Journey() {
  const milestones = [
    {
      year: "2025 - Present",
      type: "Internship",
      title: "AI Specialist Intern",
      organization: "Infosys Springboard AI Empow(her) Program",
      desc: "Developing contextual models, mastering production analytics setups, and scaling practical end-to-end model deployments designed for predictive systems.",
      icon: <Briefcase size={14} />
    },
    {
      year: "2024",
      type: "Internship",
      title: "Python Software Engineering Intern",
      organization: "CodeAlpha",
      desc: "Engineered robust analytical algorithms, script automations, and backend infrastructure using advanced data arrays and pipeline environments.",
      icon: <Briefcase size={14} />
    },
    {
      year: "2023 - 2026",
      type: "Hackathons & Innovation",
      title: "Active Competitive Developer",
      organization: "SIH Intercollege | Hacksrit | Idea Spark",
      desc: "Collaborated under intense timelines to build real-world software proofs-of-concept, translating rapid prototypes into modular code configurations.",
      icon: <Trophy size={14} />
    },
    {
      year: "2023 - 2027",
      type: "Education",
      title: "B.Tech — Artificial Intelligence & Machine Learning",
      organization: "Shri Ram Institute of Technology, Jabalpur",
      desc: "Deep diving into advanced statistical structures, modern algorithms, computer vision pipelines, and scalable database schemas.",
      icon: <GraduationCap size={14} />
    }
  ];

  return (
    <section id="journey" className="py-24 px-4 relative max-w-full overflow-hidden">
      <div className="max-w-4xl mx-auto z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-gray-500 tracking-tight">
            Journey Timeline
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyber-purple to-cyber-pink mx-auto mt-4" />
        </div>

        {/* Flex layout container ensures correct structural alignment */}
        <div className="relative border-l-2 border-white/10 ml-4 md:ml-12 pl-8 space-y-12">
          {milestones.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Perfectly centered timeline node anchor */}
              <div className="absolute -left-[43px] top-1.5 p-2 bg-[#030014] rounded-xl border border-white/10 text-gray-400 flex items-center justify-center z-20">
                {item.icon}
              </div>
              
              <span className="text-xs font-mono text-cyber-purple uppercase tracking-widest block mb-1">{item.year}</span>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <h4 className="text-sm font-medium text-cyber-neon mt-0.5">{item.organization}</h4>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}