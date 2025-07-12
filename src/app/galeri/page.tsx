'use client';

// src/app/galeri/page.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Calendar, Eye } from 'lucide-react';

export default function GaleriPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const categories = ['Semua', 'Kegiatan', 'Unit Usaha', 'Pelatihan', 'Workshop', 'Acara'];

  const galeriItems = [
    {
      id: 1,
      judul: 'Workshop Budidaya Maggot BSF',
      kategori: 'Workshop',
      tanggal: '12 Juli 2025',
      deskripsi: 'Pelatihan budidaya maggot Black Soldier Fly untuk pakan ternak alternatif',
      gambar: '/images/galeri/workshop-maggot.jpg'
    },
    {
      id: 2,
      judul: 'Panen Perdana Unit Usaha Maggot',
      kategori: 'Unit Usaha',
      tanggal: '10 Juli 2025',
      deskripsi: 'Dokumentasi panen perdana maggot dengan hasil yang memuaskan',
      gambar: '/images/galeri/panen-maggot.jpg'
    },
    {
      id: 3,
      judul: 'Pelatihan Digital Marketing UMKM',
      kategori: 'Pelatihan',
      tanggal: '8 Juli 2025',
      deskripsi: 'Pelatihan pemasaran digital untuk pelaku UMKM Desa Gentan',
      gambar: '/images/galeri/digital-marketing.jpg'
    },
    {
      id: 4,
      judul: 'Rapat Koordinasi Pengurus BUMDes',
      kategori: 'Kegiatan',
      tanggal: '5 Juli 2025',
      deskripsi: 'Rapat koordinasi bulanan pengurus BUMDes Gentan',
      gambar: '/images/galeri/rapat-koordinasi.jpg'
    },
    {
      id: 5,
      judul: 'Sosialisasi Program Gelimpah',
      kategori: 'Acara',
      tanggal: '3 Juli 2025',
      deskripsi: 'Sosialisasi program Gelimpah kepada masyarakat Desa Gentan',
      gambar: '/images/galeri/sosialisasi-gelimpah.jpg'
    },
    {
      id: 6,
      judul: 'Kunjungan Komisi Desa',
      kategori: 'Acara',
      tanggal: '1 Juli 2025',
      deskripsi: 'Kunjungan komisi desa untuk monitoring perkembangan BUMDes',
      gambar: '/images/galeri/kunjungan-komisi.jpg'
    },
    {
      id: 7,
      judul: 'Workshop Pengolahan Pakan Ternak',
      kategori: 'Workshop',
      tanggal: '28 Juni 2025',
      deskripsi: 'Workshop pengolahan pakan ternak menggunakan maggot BSF',
      gambar: '/images/galeri/workshop-pakan.jpg'
    },
    {
      id: 8,
      judul: 'Pembukaan Unit Usaha Baru',
      kategori: 'Unit Usaha',
      tanggal: '25 Juni 2025',
      deskripsi: 'Peresmian pembukaan unit usaha pengolahan kompos organik',
      gambar: '/images/galeri/unit-usaha-baru.jpg'
    },
    {
      id: 9,
      judul: 'Pelatihan Kewirausahaan Pemuda',
      kategori: 'Pelatihan',
      tanggal: '22 Juni 2025',
      deskripsi: 'Pelatihan kewirausahaan khusus untuk pemuda Desa Gentan',
      gambar: '/images/galeri/pelatihan-pemuda.jpg'
    }
  ];

  const filteredItems = galeriItems.filter(item => 
    selectedCategory === 'Semua' || item.kategori === selectedCategory
  );

  const nextImage = () => {
    if (selectedImage !== null) {
      const nextIndex = (selectedImage + 1) % filteredItems.length;
      setSelectedImage(nextIndex);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      const prevIndex = (selectedImage - 1 + filteredItems.length) % filteredItems.length;
      setSelectedImage(prevIndex);
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-yellow-custom py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-black mb-6">
              Galeri Kegiatan
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Dokumentasi visual kegiatan, program, dan perkembangan 
              BUMDes Gentan dalam membangun ekonomi desa
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
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
                    ? 'bg-green-custom text-white shadow-lg'
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
        <div className="container-custom">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-green-100 to-green-200 overflow-hidden">
                    {/* Placeholder Image */}
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 bg-green-custom rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Calendar className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-green-custom font-medium text-sm">
                          {item.kategori}
                        </p>
                      </div>
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileHover={{ opacity: 1, scale: 1 }}
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
                      <span className="bg-green-custom text-white text-xs font-medium px-3 py-1 rounded-full">
                        {item.kategori}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-custom transition-colors duration-200">
                      {item.judul}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{item.tanggal}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.deskripsi}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Image */}
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="aspect-[16/10] bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <div className="text-center p-12">
                    <div className="w-24 h-24 bg-green-custom rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Calendar className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-green-custom font-medium text-lg">
                      {filteredItems[selectedImage]?.kategori}
                    </p>
                  </div>
                </div>
                
                {/* Image Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {filteredItems[selectedImage]?.judul}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{filteredItems[selectedImage]?.tanggal}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {filteredItems[selectedImage]?.deskripsi}
                  </p>
                </div>
              </div>

              {/* Image Counter */}
              <div className="text-center mt-4 text-white">
                <span>{selectedImage + 1} / {filteredItems.length}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}