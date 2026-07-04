import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Brain, Bot } from 'lucide-react';

export default function Projects() {
  const customProjects = [
    {
      title: "AI Learning Buddy",
      desc: "An intelligent personalized study dashboard built to ingest user study documents and systematically compile automated summaries, study guides, and context-aware quiz parameters automatically.",
      tech: ["Python", "React.js", "Tailwind CSS", "LangChain", "HuggingFace"],
      link: "https://github.com/mahimapatel409-cell/AI-Learning-Buddy",
      icon: <Brain className="text-cyber-neon" size={24} />
    },
    {
      title: "AI Medical Chatbot",
      desc: "A medical conversational interface designed with natural language comprehension pipelines to triage queries, categorize systems parameters, and securely process medical information queries with highly responsive UI logic.",
      tech: ["Python", "Django", "React.js", "Transformers", "NLP Core"],
      link: "https://github.com/mahimapatel409-cell",
      icon: <Bot className="text-cyber-pink" size={24} />
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-gray-500 tracking-tight">
            My Custom Creations
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyber-purple to-cyber-pink mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {customProjects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl flex flex-col justify-between hover:border-white/20 transition-all group"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">{proj.icon}</div>
                  <div className="flex gap-3 text-gray-400">
                    <a href={proj.link} target="_blank" rel="noreferrer" className="hover:text-cyber-neon transition-colors"><Github size={18} /></a>
                    <a href={proj.link} target="_blank" rel="noreferrer" className="hover:text-cyber-purple transition-colors"><ExternalLink size={18} /></a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-cyber-neon transition-colors">{proj.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{proj.desc}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {proj.tech.map((t, i) => (
                  <span key={i} className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}