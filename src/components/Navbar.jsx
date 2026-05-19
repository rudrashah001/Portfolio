import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter text-white">
          Rudra<span className="text-primary">.</span>
        </a>

        <nav className="hidden md:flex gap-8">
          {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-colors"
        >
          Hire Me
        </a>
      </div>
    </motion.header>
  );
};

export default Navbar;
