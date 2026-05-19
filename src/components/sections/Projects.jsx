import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">Featured Projects</h2>
        </motion.div>
        {/* Placeholder for project cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-2xl border-white/5">
            <h3 className="text-2xl font-bold mb-4">AI Interview Prep SaaS</h3>
            <p className="text-gray-400 mb-6">AI resume analysis, interview preparation, and chatbot utilizing OpenAI API and Stripe.</p>
            <div className="flex gap-2">
              <span className="text-xs bg-white/10 px-2 py-1 rounded">React</span>
              <span className="text-xs bg-white/10 px-2 py-1 rounded">Node.js</span>
            </div>
          </div>
          <div className="glass p-8 rounded-2xl border-white/5">
            <h3 className="text-2xl font-bold mb-4">Event Management System</h3>
            <p className="text-gray-400 mb-6">End-to-End event tracking with QR ticket generation and role-based access.</p>
            <div className="flex gap-2">
              <span className="text-xs bg-white/10 px-2 py-1 rounded">MERN</span>
              <span className="text-xs bg-white/10 px-2 py-1 rounded">JWT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
