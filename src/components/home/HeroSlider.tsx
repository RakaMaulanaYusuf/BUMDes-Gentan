/* eslint-disable @next/next/no-img-element */
// src/components/home/HeroSlider.tsx
'use client'; 

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging] = useState(false); 
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

  // Mock data for slider
  const slides = [
    {
      id: 1,
      image: '/images/slider/fotogelimpah.jpg',
      title: 'Selamat Datang di BUMDes Gentan',
      subtitle: 'Membangun Desa Melalui Kewirausahaan',
      fallbackColor: 'from-emerald-400 to-emerald-600',
    },
    {
      id: 2,
      image: '/images/slider/fotoecozyme.jpg',
      title: 'Inovasi untuk Kemajuan Desa',
      subtitle: 'Bersama Menciptakan Peluang Usaha',
      fallbackColor: 'from-blue-400 to-blue-600',
    },
    {
      id: 3,
      image: '/images/slider/fotousaha.jpg',
      title: 'Pemberdayaan Masyarakat',
      subtitle: 'Menuju Desa Mandiri dan Sejahtera',
      fallbackColor: 'from-purple-400 to-purple-600',
    },
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    if (isAutoPlaying && !isDragging) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, isDragging, slides.length]);

  const handleSlideChange = (newSlideIndex: number) => {
    setCurrentSlide(newSlideIndex);
  };

  const nextSlide = () => {
    handleSlideChange((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    handleSlideChange((currentSlide - 1 + slides.length) % slides.length);
  };

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  // Function to get slide indices for peek view
  const getPrevIndex = () => (currentSlide - 1 + slides.length) % slides.length;
  const getNextIndex = () => (currentSlide + 1) % slides.length;

  // Animation variants for Framer Motion
  const sliderVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: '0%',
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url('/images/background/background.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex-grow flex flex-col">
        {/* Welcome Text Section */}
        <div className="container mx-auto px-4 pt-16 flex-shrink-0">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-8 animate-fadeInUp">
              Selamat Datang,
            </h1>
            <p className="text-xl md:text-2xl text-white animate-fadeInUp animation-delay-200 mb-6">
              di Website BUMDes GENTAN
            </p>
            <a href='/profile' className="mt-6 bg-gray-800/80 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-700/80 transition-all duration-300 hover:scale-105 animate-fadeInUp animation-delay-400">
              Tentang Kami
            </a>
          </div>
        </div>

        {/* CAROUSEL SLIDER - Center with Peek View */}
        <div className="relative flex-grow flex flex-col justify-center">
          <div
            className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8 w-full py-8 px-4 overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* LEFT IMAGE (Peek View) - Only visible on desktop */}
            <div className="hidden md:block">
              <motion.div
                key={slides[getPrevIndex()].id + '-prev'} 
                initial="enter"
                animate="center"
                exit="exit"
                variants={sliderVariants}
                custom={-1} 
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="relative overflow-hidden cursor-pointer transition-all duration-700 ease-out flex-shrink-0
                  w-[85vw] h-[45vh] md:w-[55vw] md:h-[55vh] lg:w-[50vw] lg:h-[60vh] shadow-2xl hover:scale-105 rounded-xl z-10 opacity-70 hover:opacity-90 transform translate-x-4
                "
                onClick={prevSlide}
              >
                {!imageErrors[slides[getPrevIndex()].id] ? (
                  <img
                    src={slides[getPrevIndex()].image}
                    alt={slides[getPrevIndex()].title}
                    className="w-full h-full object-cover rounded-inherit transition-all duration-700"
                    onError={() => handleImageError(slides[getPrevIndex()].id)}
                  />
                ) : (
                  <div
                    className={`w-full h-full bg-gradient-to-br ${slides[getPrevIndex()].fallbackColor} flex items-center justify-center rounded-inherit`}
                  >
                    <div className="text-center p-4 md:p-6">
                      <div className="w-12 h-12 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-300">
                        <span className="text-white font-bold text-lg">
                          {slides[getPrevIndex()].id}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 hover:bg-black/25 transition-all duration-300 rounded-inherit" />
              </motion.div>
            </div>

            {/* CENTER IMAGE (ACTIVE) - Always visible */}
            <AnimatePresence initial={false}>
              <motion.div
                key={slides[currentSlide].id} 
                initial="enter"
                animate="center"
                exit="exit"
                variants={sliderVariants}
                custom={currentSlide > (currentSlide - 1 + slides.length) % slides.length ? 1 : -1} 
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="relative overflow-hidden cursor-pointer flex-shrink-0
                  w-[85vw] h-[45vh] md:w-[55vw] md:h-[55vh] lg:w-[50vw] lg:h-[60vh] shadow-2xl scale-100 rounded-2xl z-20
                "
              >
                {!imageErrors[slides[currentSlide].id] ? (
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="w-full h-full object-cover rounded-inherit transition-all duration-700"
                    onError={() => handleImageError(slides[currentSlide].id)}
                  />
                ) : (
                  <div
                    className={`w-full h-full bg-gradient-to-br ${slides[currentSlide].fallbackColor} flex items-center justify-center rounded-inherit`}
                  >
                    <div className="text-center p-4 md:p-6">
                      <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-300">
                        <span className="text-white font-bold text-2xl">
                          {slides[currentSlide].id}
                        </span>
                      </div>
                      <h3 className="text-white font-bold text-lg mb-2">
                        {slides[currentSlide].title}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {slides[currentSlide].subtitle}
                      </p>
                    </div>
                  </div>
                )}
                {/* Content overlay for active slide */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end rounded-inherit">
                  <div className="text-white p-6 md:p-8 w-full">
                    <h3
                      className={`text-2xl md:text-4xl font-bold mb-3 transition-all duration-500`}
                    >
                      {slides[currentSlide].title}
                    </h3>
                    <p
                      className={`text-white/90 text-base md:text-lg transition-all duration-500 delay-100`}
                    >
                      {slides[currentSlide].subtitle}
                    </p>
                  </div>
                </div>

                {/* Navigation Arrows for Mobile */}
                <button
                  onClick={prevSlide}
                  className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 z-30"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextSlide}
                  className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 z-30"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </motion.div>
            </AnimatePresence>

            {/* RIGHT IMAGE (Peek View) - Only visible on desktop */}
            <div className="hidden md:block">
              <motion.div
                key={slides[getNextIndex()].id + '-next'} 
                initial="enter"
                animate="center"
                exit="exit"
                variants={sliderVariants}
                custom={1} 
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="relative overflow-hidden cursor-pointer transition-all duration-700 ease-out flex-shrink-0
                  w-[85vw] h-[45vh] md:w-[55vw] md:h-[55vh] lg:w-[50vw] lg:h-[60vh] shadow-2xl hover:scale-105 rounded-xl z-10 opacity-70 hover:opacity-90 transform -translate-x-4
                "
                onClick={nextSlide}
              >
                {!imageErrors[slides[getNextIndex()].id] ? (
                  <img
                    src={slides[getNextIndex()].image}
                    alt={slides[getNextIndex()].title}
                    className="w-full h-full object-cover rounded-inherit transition-all duration-700"
                    onError={() => handleImageError(slides[getNextIndex()].id)}
                  />
                ) : (
                  <div
                    className={`w-full h-full bg-gradient-to-br ${slides[getNextIndex()].fallbackColor} flex items-center justify-center rounded-inherit`}
                  >
                    <div className="text-center p-4 md:p-6">
                      <div className="w-12 h-12 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-300">
                        <span className="text-white font-bold text-lg">
                          {slides[getNextIndex()].id}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 hover:bg-black/25 transition-all duration-300 rounded-inherit" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0; /* Ensure it starts hidden for the animation to work */
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0; /* Ensure it starts hidden for the animation to work */
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;