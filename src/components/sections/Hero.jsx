import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-medium text-gray-300">
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Hi, I'm <span className="text-white">Rudra Shah</span>
          <br />
          <span className="text-gradient">Full Stack Developer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-lg text-gray-400 mb-10"
        >
          MERN Stack Expert . I craft cinematic, high-performance web
          applications that leave a lasting impression.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-black bg-white rounded-full hover:bg-gray-100 transition-colors"
          >
            View Projects <ArrowRight className="ml-2 w-4 h-4" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white glass rounded-full hover:bg-white/10 transition-colors"
          >
            <Download className="mr-2 w-4 h-4" /> Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex gap-6"
        >
          <a
            href="https://github.com/rudrashah001"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/rudra-shah-421761349/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:rudra@example.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
