import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const element = cardRef.current;
    const rect = element.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Smooth parametric tilt angle conversion scaling metrics
    const rX = -(mouseY / height) * 12;
    const rY = (mouseX / width) * 12;
    
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        rotateX: rotateX,
        rotateY: rotateY
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="glass-panel rounded-2xl overflow-hidden border border-white/5 bg-dark-card group hover:border-white/20 transition-colors duration-300"
    >
      {/* High-Contrast Vector Graphic Shell Preview Zone */}
      <div className="h-48 w-full bg-gradient-to-br from-slate-900 to-black relative flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-10 mesh-gradient group-hover:scale-110 transition-transform duration-700" />
        <span className="text-4xl transform group-hover:scale-125 transition-transform duration-500">{project.icon}</span>
        
        {/* Absolute Hover Ambient Light Tracking Projection */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(0,242,254,0.15)_0%,transparent_50%)] transition-opacity duration-500" />
      </div>

      {/* Meta Text Information Blocks */}
      <div className="p-6 space-y-4" style={{ transform: 'translateZ(20px)' }}>
        <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyber-neon transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed h-14 overflow-hidden text-ellipsis">
          {project.description}
        </p>

        {/* Dynamic Technology Array Wrapper */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5">
              {tag}
            </span>
          ))}
        </div>

        {/* Link Interactivity Sub-Panel */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <a href={project.github} className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white transition-colors">
            <Github size={14} /> Repository
          </a>
          <a href={project.demo} className="flex items-center gap-1.5 text-xs font-mono text-cyber-neon hover:underline">
            Live Run <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}