'use client';

// src/components/home/HeroSlider.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

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

  // Auto slide setiap 4 detik (lebih lambat untuk animasi halus)
  useEffect(() => {
    if (isAutoPlaying && !isDragging) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, isDragging, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Handle drag/swipe gesture
  const handleDragEnd = (event: unknown, info: PanInfo) => {
    const threshold = 100; // Minimum drag distance
    
    if (info.offset.x > threshold) {
      // Drag right - previous slide
      prevSlide();
    } else if (info.offset.x < -threshold) {
      // Drag left - next slide
      nextSlide();
    }
    setIsDragging(false);
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  // Function untuk mendapatkan index slide
  const getPrevIndex = () => (currentSlide - 1 + slides.length) % slides.length;
  const getNextIndex = () => (currentSlide + 1) % slides.length;

  return (
    <div className="bg-[url('/images/background/background.jpg')] bg-cover bg-center">
      <div className="bg-black/40">
        <div className="container-custom">
          <div className="pt-16 pb-8">
            {/* Welcome Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 mt-4">
                Selamat Datang,
              </h1>
              <p className="text-xl md:text-2xl text-white">
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

            {/* CAROUSEL SLIDER - 3 GAMBAR BESAR DENGAN DRAG */}
            <div className="relative mb-16 overflow-hidden">
              <motion.div
                className="flex items-center justify-center gap-8 px-4 cursor-grab active:cursor-grabbing"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                whileDrag={{ scale: 0.98 }}
              >
                {/* GAMBAR KIRI - Ukuran Besar */}
                <motion.div
                  key={`left-${currentSlide}`}
                  initial={{ opacity: 0, x: 200 }}
                  animate={{ opacity: 0.7, x: 0 }}
                  exit={{ opacity: 0, x: -200 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeInOut"
                  }}
                  className="relative cursor-pointer"
                  onClick={prevSlide}
                >
                  <div className="w-80 h-56 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`left-content-${currentSlide}`}
                        initial={{ x: 150, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -150, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center"
                      >
                        <div className="text-center p-6">
                          <div className="w-16 h-16 bg-green-custom rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-xl">
                              {getPrevIndex() + 1}
                            </span>
                          </div>
                          <h3 className="text-sm font-bold text-green-custom mb-2">
                            {slides[getPrevIndex()].title.substring(0, 25)}...
                          </h3>
                          <p className="text-xs text-gray-600">
                            {slides[getPrevIndex()].subtitle.substring(0, 30)}...
                          </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* GAMBAR TENGAH - Ukuran SANGAT BESAR (HIGHLIGHTED) */}
                <motion.div
                  key={`center-${currentSlide}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1.15 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeInOut"
                  }}
                  className="relative z-30"
                  onClick={nextSlide}
                >
                  <div className="w-[25rem] h-80 rounded-3xl shadow-2xl overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300 ring-4 ring-green-custom/30 mx-10">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`center-content-${currentSlide}`}
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -200, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center relative"
                      >
                        <div className="text-center p-10">
                          <div className="w-24 h-24 bg-green-custom rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl">
                            <span className="text-white font-bold text-3xl">
                              {currentSlide + 1}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-green-custom mb-4">
                            {slides[currentSlide].title}
                          </h3>
                          <p className="text-base text-gray-600 leading-relaxed">
                            {slides[currentSlide].subtitle}
                          </p>
                        </div>
                        
                        {/* Auto-slide indicator */}
                        <div className="absolute bottom-4 right-4">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="w-8 h-8 border-3 border-green-custom border-t-transparent rounded-full"
                          />
                        </div>

                        {/* Drag indicator
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                          <motion.div
                            animate={{ x: [-8, 8, -8] }}
                            transition={{ repeat: Infinity, duration: 2.5 }}
                            className="bg-white/90 px-4 py-2 rounded-full text-xs font-medium text-green-custom shadow-lg"
                          >
                            ← Geser untuk navigasi →
                          </motion.div>
                        </div> */}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* GAMBAR KANAN - Ukuran Besar */}
                <motion.div
                  key={`right-${currentSlide}`}
                  initial={{ opacity: 0, x: 200 }}
                  animate={{ opacity: 0.7, x: 0 }}
                  exit={{ opacity: 0, x: -200 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeInOut"
                  }}
                  className="relative cursor-pointer"
                  onClick={nextSlide}
                >
                  <div className="w-80 h-56 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`right-content-${currentSlide}`}
                        initial={{ x: 150, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -150, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center"
                      >
                        <div className="text-center p-6">
                          <div className="w-16 h-16 bg-green-custom rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-xl">
                              {getNextIndex() + 1}
                            </span>
                          </div>
                          <h3 className="text-sm font-bold text-green-custom mb-2">
                            {slides[getNextIndex()].title.substring(0, 25)}...
                          </h3>
                          <p className="text-xs text-gray-600">
                            {slides[getNextIndex()].subtitle.substring(0, 30)}...
                          </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>

              {/* Slide Indicators */}
              <div className="flex justify-center space-x-4 mt-12">
                {slides.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => goToSlide(index)}
                    className={`w-5 h-5 rounded-full transition-all duration-500 ${
                      index === currentSlide 
                        ? 'bg-green-custom shadow-xl ring-6 ring-green-custom/40' 
                        : 'bg-white/70 hover:bg-white/90'
                    }`}
                  />
                ))}
              </div>

              {/* Auto-play status */}
              <div className="text-center mt-6">
                <p className="text-white/90 text-sm font-medium">
                  {isDragging ? 'Menggeser...' : 'Auto-slide aktif • Geser atau hover untuk pause'}
                </p>
              </div>
            </div>

            {/* Section Labels */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="py-8"
              >
                <h2 className="text-3xl font-bold text-white">MAGGOT</h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="py-8"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white">GELIMPAH</h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="py-8"
              >
                <h2 className="text-3xl font-bold text-white">USAHA</h2>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;