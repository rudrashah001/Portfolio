import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Skills & Technologies
          </h2>
        </motion.div>
        {/* Placeholder for skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            "React.js",
            "Node.js",
            "MongoDB",
            "Tailwind CSS",
            "OpenAI API",
            "Stripe",
          ].map((skill) => (
            <div
              key={skill}
              className="glass p-4 rounded-xl text-center border-white/5 hover:border-primary/50 transition-colors"
            >
              <span className="font-medium text-gray-300">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
