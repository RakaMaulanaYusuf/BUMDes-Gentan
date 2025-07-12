'use client';

// src/components/home/BeritaSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { mockBerita } from '@/lib/utlis';

const BeritaSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">BERITA</h2>
          <div className="w-24 h-1 bg-green-custom mx-auto"></div>
        </motion.div>

        {/* News Items */}
        <div className="space-y-8">
          {mockBerita.map((berita, index) => (
            <motion.div
              key={berita.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {/* Image Container */}
                <div className="md:col-span-1">
                  <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 bg-green-custom rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">
                          {berita.id}
                        </span>
                      </div>
                      <p className="text-green-custom font-medium">
                        Foto Berita {berita.id}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Container */}
                <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                  <motion.h3
                    whileHover={{ color: '#1a5d3a' }}
                    className="text-2xl font-bold text-gray-800 mb-4 cursor-pointer transition-colors duration-200"
                  >
                    {berita.judul}
                  </motion.h3>

                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>Oleh : Admin</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>tanggal upload | {berita.tanggal}</span>
                    </div>
                    <div className="text-gray-500">
                      {berita.tentang}
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {berita.ringkasan}
                  </p>

                  {/* Read More Button */}
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: '#0f4a2a' }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-custom text-white px-6 py-3 rounded-lg font-medium self-start flex items-center gap-2 transition-colors duration-200"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All News Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-custom text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
          >
            Lihat Semua Berita
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BeritaSection;