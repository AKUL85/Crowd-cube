import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Transform Lives Through Crowdfunding",
      subtitle: "Join thousands of supporters making dreams come true",
      description: "From personal emergencies to groundbreaking startups, every campaign tells a story of hope and determination.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cta: "Start Your Campaign",
      link: "/add-campaign"
    },
    {
      title: "Support Innovation & Creativity",
      subtitle: "Back the next big idea today",
      description: "Discover innovative projects, creative endeavors, and breakthrough technologies waiting for your support.",
      image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cta: "Explore Campaigns",
      link: "/campaigns"
    },
    {
      title: "Make a Difference in Someone's Life",
      subtitle: "Every donation counts, every story matters",
      description: "Your contribution can provide medical aid, education opportunities, and hope to those who need it most.",
      image: "https://images.pexels.com/photos/6995213/pexels-photo-6995213.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cta: "Donate Now",
      link: "/campaigns"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div className="relative h-full">
            <img src={slides[currentSlide].image} alt="Hero" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                  <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6"
                  >
                    <Typewriter
                      words={[slides[currentSlide].title]}
                      loop={1}
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={50}
                    />
                  </motion.h1>

                  <motion.h2 className="text-xl md:text-2xl text-gray-200 mb-4">{slides[currentSlide].subtitle}</motion.h2>
                  <motion.p className="text-lg text-gray-300 mb-8 max-w-2xl">{slides[currentSlide].description}</motion.p>

                  <motion.div>
                    <Link to={slides[currentSlide].link} className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                      {slides[currentSlide].cta}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 text-white rounded-full hover:bg-white/30">
        <ChevronLeft />
      </button>
      <button onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 text-white rounded-full hover:bg-white/30">
        <ChevronRight />
      </button>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrentSlide(i)} className={`w-3 h-3 rounded-full ${currentSlide === i ? 'bg-white' : 'bg-white/50'}`} />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
