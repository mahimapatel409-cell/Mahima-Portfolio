import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Brain, Bot } from 'lucide-react';

export default function Projects() {
  const customProjects = [
    {
      title: "AI Learning Buddy",
      desc: "An intelligent personalized study dashboard that ingests study materials and automatically generates summaries, study guides, and quizzes.",
      tech: ["Python", "React.js", "Tailwind CSS", "LangChain", "HuggingFace"],
      link: "https://github.com/mahimapatel409-cell/AI-Learning-Buddy",
      icon: <Brain className="text-cyber-neon" size={24} />
    },
    {
      title: "AI Medical Chatbot",
      desc: "A medical chatbot built using NLP and Transformer models to answer healthcare queries with a responsive web interface.",
      tech: ["Python", "Django", "React.js", "Transformers", "NLP"],
      link: "https://github.com/mahimapatel409-cell",
      icon: <Bot className="text-cyber-pink" size={24} />
    }
  ];

  return (
    <section
      id="projects"
      className="py-16 px-4 relative scroll-mt-28"
    >
      <div className="max-w-6xl mx-auto relative">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-gray-500">
            My Custom Creations
          </h2>

          <div className="w-20 h-[3px] bg-gradient-to-r from-cyber-purple to-cyber-pink mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {customProjects.map((proj, idx) => (

            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-panel rounded-2xl p-6 hover:border-cyber-neon transition-all duration-300"
            >

              <div className="flex justify-between mb-5">

                <div className="p-3 rounded-xl bg-white/5">
                  {proj.icon}
                </div>

                <div className="flex gap-3">
                  <a href={proj.link} target="_blank" rel="noreferrer">
                    <Github
                      className="hover:text-cyber-neon transition"
                      size={20}
                    />
                  </a>

                  <a href={proj.link} target="_blank" rel="noreferrer">
                    <ExternalLink
                      className="hover:text-cyber-purple transition"
                      size={20}
                    />
                  </a>
                </div>

              </div>

              <h3 className="text-2xl font-bold mb-3">
                {proj.title}
              </h3>

              <p className="text-gray-400 leading-7 mb-6">
                {proj.desc}
              </p>

              <div className="flex flex-wrap gap-2">

                {proj.tech.map((tech, i) => (

                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-white/5 text-sm border border-white/10"
                  >
                    {tech}
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