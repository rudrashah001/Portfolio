import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">Experience</h2>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l border-white/10">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1" />
            <div className="mb-2 text-sm text-primary font-medium">2026 - Present</div>
            <h3 className="text-xl font-bold">Full Stack Developer Intern</h3>
            <div className="text-gray-400 mb-4">Infividhya Pvt Ltd</div>
            <p className="text-gray-400 leading-relaxed">
              Developed full stack web applications, integrated frontend with REST APIs, and managed database schemas. Implemented responsive UI designs and improved application performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
