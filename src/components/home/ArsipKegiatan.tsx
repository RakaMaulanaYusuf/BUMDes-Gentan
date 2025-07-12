'use client';

// src/components/home/ArsipKegiatan.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Calendar } from 'lucide-react';
import { mockArsip } from '@/lib/utlis';

const ArsipKegiatan = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">ARSIP KEGIATAN</h2>
          <div className="w-24 h-1 bg-green-custom mx-auto"></div>
        </motion.div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockArsip.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Image Container */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-green-100 to-green-200 overflow-hidden">
                  {/* Placeholder Image */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 bg-green-custom rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Calendar className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-green-custom font-medium">
                        Kegiatan {item.id}
                      </p>
                    </div>
                  </div>

                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 text-white hover:bg-white/30 transition-colors duration-200"
                    >
                      <Eye className="w-6 h-6" />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-custom transition-colors duration-200">
                    {item.judul}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Dokumentasi kegiatan BUMDes Gentan
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs text-gray-500">
                      12 Juli 2025
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-green-custom hover:text-green-700 text-sm font-medium transition-colors duration-200"
                    >
                      Lihat Detail
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-custom text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
          >
            Lihat Semua Arsip
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ArsipKegiatan;