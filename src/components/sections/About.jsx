import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8">About Me</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            I am a passionate Full Stack Developer specializing in the MERN
            stack . My goal is to build scalable, high-performance web
            applications that solve real-world problems while delivering an
            exceptional user experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
