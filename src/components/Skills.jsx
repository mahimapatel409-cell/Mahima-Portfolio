import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const categories = [
    {
      title: "Programming",
      color: "from-cyber-neon to-cyber-purple",
      items: ["Python", "Java", "C++", "JavaScript"]
    },
    {
      title: "Web Engineering",
      color: "from-cyber-purple to-cyber-violet",
      items: ["HTML5 / CSS3", "React.js", "Tailwind CSS", "Django"]
    },
    {
      title: "AI / Machine Learning",
      color: "from-cyber-violet to-cyber-pink",
      items: ["NumPy & Pandas", "Scikit-Learn", "TensorFlow", "OpenCV", "Natural Language Processing"]
    },
    {
      title: "Databases & Cloud",
      color: "from-cyber-pink to-cyber-neon",
      items: ["MySQL", "MongoDB", "Git / GitHub Engine"]
    },
    {
      title: "Tools & Environments",
      color: "from-cyber-neon via-cyber-purple to-cyber-pink",
      items: ["VS Code", "Jupyter Notebooks", "Postman API Ecosystem"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-gray-500 tracking-tight">
            Technical Arsenal
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyber-purple to-cyber-pink mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all flex flex-col justify-between"
            >
              <div>
                <div className={`h-[3px] w-12 bg-gradient-to-r ${cat.color} rounded-full mb-4`} />
                <h3 className="text-lg font-bold text-white mb-4 tracking-tight">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-gray-300 hover:text-cyber-neon hover:border-cyber-neon/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}