'use client';

// src/components/home/ArsipKegiatan.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Calendar, Image as ImageIcon, ArrowRight } from 'lucide-react'; // Import ArrowRight
import Image from 'next/image';
import Link from 'next/link'; // Import Link dari next/link

const ArsipKegiatan = () => {
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});

  // Mock data arsip
  const mockArsip = [
    {
      id: 1,
      judul: 'Pelatihan Budidaya Maggot',
      deskripsi: 'Dokumentasi kegiatan pelatihan budidaya maggot untuk masyarakat',
      tanggal: '12 Juli 2025',
      gambar: '/images/galeri/fotoecozyme.jpg', // <-- Tambahkan path gambar spesifik
      fallbackColor: 'from-emerald-100 to-emerald-200'
    },
    {
      id: 2,
      judul: 'Rapat Koordinasi BUMDes',
      deskripsi: 'Rapat evaluasi dan perencanaan program kerja BUMDes Gentan',
      tanggal: '10 Juli 2025',
      gambar: '/images/galeri/fotogelimpah.jpg', // <-- Tambahkan path gambar spesifik
      fallbackColor: 'from-blue-100 to-blue-200'
    },
    {
      id: 3,
      judul: 'Sosialisasi Program Unggulan',
      deskripsi: 'Sosialisasi program unggulan BUMDes kepada masyarakat desa',
      tanggal: '8 Juli 2025',
      gambar: '/images/galeri/fotousaha.jpg', // <-- Tambahkan path gambar spesifik
      fallbackColor: 'from-purple-100 to-purple-200'
    }
  ];

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">ARSIP KEGIATAN</h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Dokumentasi kegiatan dan program kerja BUMDes Gentan
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mockArsip.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              {/* Wrap the entire card with Link */}
              <Link href="/galeri" passHref>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden"> {/* Using aspect-ratio for consistency */}
                    {!imageErrors[item.id] ? (
                      <Image
                        src={item.gambar} // <-- Menggunakan gambar spesifik dari item
                        alt={item.judul}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={() => handleImageError(item.id)}
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${item.fallbackColor} flex items-center justify-center`}>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-emerald-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                            <ImageIcon className="w-8 h-8 text-white" />
                          </div>
                          <p className="text-emerald-600 font-medium">Galeri {item.id}</p>
                        </div>
                      </div>
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }} // Changed to whileInView for initial appearance
                        transition={{ duration: 0.2 }}
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 text-white">
                          <Eye className="w-6 h-6" />
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors duration-200 line-clamp-2"> {/* Added line-clamp-2 */}
                      {item.judul}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2"> {/* Added line-clamp-2 */}
                      {item.deskripsi}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        <span>{item.tanggal}</span>
                      </div>
                      {/* Optional: Add a "Lihat Detail" link/button here if you want to click to a specific gallery item */}
                      <span className="text-emerald-600 font-medium text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Lihat Galeri <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link> {/* Closing Link tag */}
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/galeri" passHref> {/* Mengarahkan ke halaman galeri */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg"
            >
              Lihat Semua Arsip
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ArsipKegiatan;