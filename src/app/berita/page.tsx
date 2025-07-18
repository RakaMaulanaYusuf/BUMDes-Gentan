'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Search, Tag, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function BeritaPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const beritaList = [
    {
      id: 1,
      judul: 'Pengembangan Unit Usaha Maggot BSF untuk Pakan Ternak',
      tanggal: '12 Juli 2025',
      kategori: 'Unit Usaha',
      penulis: 'Admin BUMDes',
      ringkasan: 'BUMDes Gentan mengembangkan unit usaha budidaya maggot Black Soldier Fly sebagai alternatif pakan ternak yang berkelanjutan dan ramah lingkungan.',
      gambar: '/images/berita/berita1.png' // <-- Sesuaikan dengan ekstensi file gambar Anda
    },
    {
      id: 2,
      judul: 'Program Gelimpah: Gerakan Literasi dan Pemberdayaan Masyarakat',
      tanggal: '10 Juli 2025',
      kategori: 'Program',
      penulis: 'Tim Gelimpah',
      ringkasan: 'Meluncurkan program Gelimpah yang fokus pada peningkatan literasi dan pemberdayaan ekonomi masyarakat Desa Gentan melalui berbagai pelatihan dan workshop.',
      gambar: '/images/berita/berita2.png' // <-- Sesuaikan dengan ekstensi file gambar Anda
    },
    {
      id: 3,
      judul: 'BUMDes Mangesti Sejahtera Hadirkan Program "GELIPAH" Solusi Sampah Jadi Tabungan Emas untuk Warga Gentan',
      tanggal: '18 Juli 2025',
      kategori: 'Program',
      penulis: 'Admin BUMDes',
      ringkasan: 'BUMDes Mangesti Sejahtera meluncurkan program GELIPAH (Gentang Peduli Sampah) yang mengubah sampah menjadi tabungan emas, meningkatkan kesejahteraan dan kesadaran lingkungan.',
      gambar: '/images/berita/berita3.png' // <-- Sesuaikan dengan ekstensi file gambar Anda
    },
  ];

  const categories = ['Semua', 'Unit Usaha', 'Program', 'Kemitraan', 'Pelatihan', 'Inovasi', 'Workshop'];

  const filteredBerita = beritaList.filter(berita => {
    const matchesSearch = berita.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          berita.ringkasan.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || berita.kategori === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (!isClient) {
    return (
      <div className="pt-16">
        <section className="relative py-20 bg-[url('/images/background/background.jpg')] bg-cover bg-center text-white">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-5xl font-bold mb-6">
              Berita & Informasi
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Dapatkan informasi terkini tentang kegiatan, program, dan perkembangan
              BUMDes Gentan
            </p>
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
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 drop-shadow-sm">
              Berita & Informasi
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Dapatkan informasi terkini tentang kegiatan, program, dan perkembangan
              BUMDes Gentan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative flex-1 w-full lg:max-w-md"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari berita..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all duration-200"
              />
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-end w-full"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredBerita.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 text-lg">
                Tidak ada berita yang ditemukan untuk pencarian {searchTerm}
                {selectedCategory !== 'Semua' && ` pada kategori "${selectedCategory}"`}
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBerita.map((berita, index) => (
                <motion.article
                  key={`berita-${berita.id}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 group"
                >
                  <Link href={`/berita/${berita.id}`} className="block">
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={berita.gambar}
                        alt={berita.judul}
                        layout="fill"
                        objectFit="cover"
                        quality={75}
                        className="transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Category Badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <Tag className="w-4 h-4 text-emerald-600" />
                        <span className="bg-emerald-100 text-emerald-600 text-xs font-medium px-2 py-1 rounded-full">
                          {berita.kategori}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors duration-200">
                        {berita.judul}
                      </h3>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{berita.tanggal}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{berita.penulis}</span>
                        </div>
                      </div>

                      {/* Summary */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {berita.ringkasan}
                      </p>

                      {/* Read More Button (now just a visual cue since the whole card is a link) */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        Baca Selengkapnya
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </motion.button>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {filteredBerita.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors duration-200 shadow-md">
                Muat Lebih Banyak
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tetap Update dengan Berita Terbaru
            </h2>
            <p className="text-lg md:text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Daftarkan email Anda untuk mendapatkan update berita dan informasi terbaru dari BUMDes Gentan
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 shadow-md"
              >
                Berlangganan
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}