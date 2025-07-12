'use client';

// src/components/home/HeroSlider.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Mock data untuk slider
  const slides = [
    {
      id: 1,
      image: '/images/slider/slide1.jpg',
      title: 'Selamat Datang di BUMDes Gentan',
      subtitle: 'Membangun Desa Melalui Kewirausahaan'
    },
    {
      id: 2,
      image: '/images/slider/slide2.jpg',
      title: 'Inovasi untuk Kemajuan Desa',
      subtitle: 'Bersama Menciptakan Peluang Usaha'
    },
    {
      id: 3,
      image: '/images/slider/slide3.jpg',
      title: 'Pemberdayaan Masyarakat',
      subtitle: 'Menuju Desa Mandiri dan Sejahtera'
    }
  ];

  // Auto slide
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-yellow-custom pt-16">
      <div className="container-custom">
        <div className="pt-16 pb-8">
          {/* Welcome Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
              Selamat Datang,
            </h1>
            <p className="text-xl md:text-2xl text-black">
              di Website BUMDes GENTAN
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-gray-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-200"
            >
              Tentang Kami
            </motion.button>
          </motion.div>

          {/* Slider Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Slider Images */}
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <div className="aspect-[4/3] bg-white rounded-lg shadow-lg overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${currentSlide}-${index}`}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center"
                    >
                      <div className="text-center p-8">
                        <div className="w-16 h-16 bg-green-custom rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-white font-bold text-xl">
                            {((currentSlide + index) % 3) + 1}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-green-custom mb-2">
                          {slides[(currentSlide + index) % slides.length].title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {slides[(currentSlide + index) % slides.length].subtitle}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="w-10 h-10 bg-green-custom rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentSlide ? 'bg-green-custom' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="w-10 h-10 bg-green-custom rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Section Labels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="py-8"
            >
              <h2 className="text-3xl font-bold text-black">MAGGOT</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="py-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-black">GELIMPAH</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="py-8"
            >
              <h2 className="text-3xl font-bold text-black">USAHA</h2>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;