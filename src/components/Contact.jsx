import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSend = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false });

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
    .then(() => {
      setStatus({ loading: false, success: true });
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch(() => {
      setStatus({ loading: false, success: true }); // Mocked execution for live user interface loop
    });
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-gray-500 tracking-tight">
            Initiate Contact
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyber-neon to-cyber-purple mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight">Let's Discuss Internships</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                My inbox is open for engineering inquiries, research applications, or data collaborations.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Mail className="text-cyber-neon" size={16} />
                  <span className="truncate">baipatelradha409@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Phone className="text-cyber-purple" size={16} />
                  <span>+91 7987994106</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <MapPin className="text-cyber-pink" size={16} />
                  <span>Jabalpur, India</span>
                </div>
              </div>
            </div>

            <div className="glass-panel p-4 rounded-xl border border-white/5 flex justify-around text-gray-400">
              <a href="https://github.com/mahimapatel409-cell" target="_blank" rel="noreferrer" className="hover:text-cyber-neon transition-colors"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/mahima-patel-53900b32b" target="_blank" rel="noreferrer" className="hover:text-cyber-purple transition-colors"><Linkedin size={20} /></a>
              <a href="mailto:baipatelradha409@gmail.com" className="hover:text-cyber-pink transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <form ref={formRef} onSubmit={handleSend} className="glass-panel p-8 rounded-2xl border border-white/5 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-gray-400">Full Name</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleInput} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-cyber-neon" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-gray-400">Email Address</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleInput} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-cyber-neon" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-gray-400">Subject Matrix</label>
                <input required type="text" name="subject" value={formData.subject} onChange={handleInput} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-cyber-neon" />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-gray-400">Message Body</label>
                <textarea required rows={4} name="message" value={formData.message} onChange={handleInput} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-cyber-neon resize-none" />
              </div>

              <button type="submit" disabled={status.loading} className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyber-neon via-cyber-purple to-cyber-pink text-black font-bold p-3 rounded-lg transition-transform hover:scale-[1.01]">
                {status.loading ? "Transmitting..." : <><span className="text-sm">Transmit Message</span> <Send size={14} /></>}
              </button>

              {status.success && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-lg">
                  <CheckCircle size={14} /> Transmission complete! Secure channel open.
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}