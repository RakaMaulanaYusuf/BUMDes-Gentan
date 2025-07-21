'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Calendar, Eye } from 'lucide-react';
import Image from 'next/image'; 

export default function GaleriPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null); 
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const categories = ['Semua', 'Kegiatan', 'Unit Usaha', 'Pelatihan', 'Workshop', 'Acara'];

  const galeriItems = [
    {
      id: 1,
      judul: 'Workshop Budidaya Maggot BSF',
      kategori: 'Workshop',
      tanggal: '12 Juli 2025',
      deskripsi: 'Pelatihan budidaya maggot Black Soldier Fly untuk pakan ternak alternatif',
      gambar: '/images/galeri/fotoecozyme.jpg' 
    },
    {
      id: 2,
      judul: 'Panen Perdana Unit Usaha Maggot',
      kategori: 'Unit Usaha',
      tanggal: '10 Juli 2025',
      deskripsi: 'Dokumentasi panen perdana maggot dengan hasil yang memuaskan',
      gambar: '/images/galeri/fotogelimpah.jpg' 
    },
    {
      id: 3,
      judul: 'Pelatihan Digital Marketing UMKM',
      kategori: 'Pelatihan',
      tanggal: '8 Juli 2025',
      deskripsi: 'Pelatihan pemasaran digital untuk pelaku UMKM Desa Gentan',
      gambar: '/images/galeri/fotousaha.jpg' 
    },
    {
      id: 4,
      judul: 'Rapat Koordinasi Pengurus BUMDes',
      kategori: 'Kegiatan',
      tanggal: '5 Juli 2025',
      deskripsi: 'Rapat koordinasi bulanan pengurus BUMDes Gentan',
      gambar: '/images/galeri/galeri.png' 
    }
  ];

  const filteredItems = galeriItems.filter(item => 
    selectedCategory === 'Semua' || item.kategori === selectedCategory
  );

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      const nextIdx = (selectedImageIndex + 1) % filteredItems.length;
      setSelectedImageIndex(nextIdx);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      const prevIdx = (selectedImageIndex - 1 + filteredItems.length) % filteredItems.length;
      setSelectedImageIndex(prevIdx);
    }
  };

  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset'; 
    };
  }, [selectedImageIndex]);


  if (!isClient) {
    return (
      <div className="pt-16">
        <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Galeri Kegiatan
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Dokumentasi visual kegiatan, program, dan perkembangan 
                BUMDes Gentan dalam membangun ekonomi desa
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 bg-[url('/images/background/background.jpg')] bg-cover bg-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Galeri Kegiatan
            </h1>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
              Dokumentasi visual kegiatan, program, dan perkembangan 
              BUMDes Gentan dalam membangun ekonomi desa
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 text-gray-600 text-lg"
            >
              Tidak ada item galeri dalam kategori {selectedCategory}.
            </motion.div>
          ) : (
            <motion.div
              layout 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={`galeri-${item.id}`} 
                  layout 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }} 
                  transition={{ duration: 0.5, delay: index * 0.05 }} 
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }} 
                  className="group cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300"
                  onClick={() => setSelectedImageIndex(index)} 
                >
                  {/* Image Container - Displays actual image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.gambar} 
                      alt={item.judul}
                      layout="fill"
                      objectFit="cover"
                      quality={75}
                      className="transform group-hover:scale-105 transition-transform duration-500" 
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }} 
                        transition={{ duration: 0.2 }}
                        className="opacity-0 group-hover:opacity-100" 
                      >
                        <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-4">
                          <Eye className="w-8 h-8 text-white" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-emerald-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                        {item.kategori}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors duration-200 line-clamp-2"> {/* Added line-clamp-2 */}
                      {item.judul}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{item.tanggal}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3"> 
                      {item.deskripsi}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Statistics Section (as is) */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Statistik Galeri
            </h2>
            <p className="text-emerald-100">
              Dokumentasi perjalanan BUMDes Gentan
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '0+', label: 'Total Foto' },
              { number: '0+', label: 'Kegiatan Terdokumentasi' },
              { number: '0+', label: 'Kategori' },
              { number: '0+', label: 'Tahun Dokumentasi' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-emerald-100 text-lg">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out" 
            onClick={() => setSelectedImageIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden shadow-2xl cursor-auto" 
              onClick={(e) => e.stopPropagation()} 
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-50 p-2" 
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }} 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-50 p-2 bg-black/30 rounded-full hover:bg-black/50" // Added styling
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }} 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-50 p-2 bg-black/30 rounded-full hover:bg-black/50" // Added styling
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Main Image */}
              <div className="relative aspect-[16/10] overflow-hidden"> 
                {selectedImageIndex !== null && ( 
                  <Image
                    src={filteredItems[selectedImageIndex]?.gambar} 
                    alt={filteredItems[selectedImageIndex]?.judul}
                    layout="fill"
                    objectFit="contain" 
                    quality={90}
                    priority 
                  />
                )}
              </div>
              
              {/* Image Info */}
              <div className="p-6 bg-white"> 
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {filteredItems[selectedImageIndex]?.judul}
                </h3>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{filteredItems[selectedImageIndex]?.tanggal}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {filteredItems[selectedImageIndex]?.deskripsi}
                </p>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-3 py-1 rounded-full text-sm"> {/* Styled counter */}
                <span>{selectedImageIndex + 1} / {filteredItems.length}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}