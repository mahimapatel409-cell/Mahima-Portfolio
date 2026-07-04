import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      text: "Mahima's ability to seamlessly connect Python machine learning backends to reactive web architectures is exceptional for an engineering student. Her work ethic is highly production-focused.",
      name: "Project Coordinator",
      role: "Infosys Springboard Track"
    },
    {
      text: "During our 48-hour hackathon sprint, Mahima built a text classification layer that worked flawlessly. She stays remarkably calm under tight deployment deadlines.",
      name: "Team Lead",
      role: "Smart India Hackathon Initiative"
    },
    {
      text: "Her understanding of data structure architectures alongside core convolutional model fine-tuning sets her far ahead of typical third-year engineering students.",
      name: "Academic Mentor",
      role: "AI & ML Department Faculty"
    }
  ];

  const [active, setActive] = useState(0);

  const handleNext = () => setActive((prev) => (prev + 1) % reviews.length);
  const handlePrev = () => setActive((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section id="testimonials" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-gray-500 tracking-tight">
            Peer Endorsements
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyber-neon to-cyber-pink mx-auto mt-4" />
        </div>

        <div className="relative glass-panel rounded-3xl p-8 md:p-12 border border-white/5 bg-dark-card min-h-[280px] flex flex-col justify-between">
          <div className="absolute top-6 right-8 text-white/5 pointer-events-none">
            <Quote size={80} />
          </div>

          <div className="relative overflow-hidden h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="space-y-6"
              >
                <p className="text-gray-300 text-lg italic leading-relaxed">
                  "{reviews[active].text}"
                </p>
                <div>
                  <h4 className="text-white font-bold text-base tracking-tight">{reviews[active].name}</h4>
                  <p className="text-cyber-neon font-mono text-xs">{reviews[active].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav Controls */}
          <div className="flex gap-2 justify-end pt-6 border-t border-white/5 mt-6">
            <button onClick={handlePrev} className="p-2 rounded-full border border-white/10 hover:bg-white/5 text-white transition-colors">
              <ChevronLeft size={16} />
            </button>
            <button onClick={handleNext} className="p-2 rounded-full border border-white/10 hover:bg-white/5 text-white transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}