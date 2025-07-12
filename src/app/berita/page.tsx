'use client';

// src/app/berita/page.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Search, Tag } from 'lucide-react';

export default function BeritaPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const beritaList = [
    {
      id: 1,
      judul: 'Pengembangan Unit Usaha Maggot BSF untuk Pakan Ternak',
      tanggal: '12 Juli 2025',
      kategori: 'Unit Usaha',
      penulis: 'Admin BUMDes',
      ringkasan: 'BUMDes Gentan mengembangkan unit usaha budidaya maggot Black Soldier Fly sebagai alternatif pakan ternak yang berkelanjutan dan ramah lingkungan.',
      gambar: '/images/berita/berita1.jpg'
    },
    {
      id: 2,
      judul: 'Program Gelimpah: Gerakan Literasi dan Pemberdayaan Masyarakat',
      tanggal: '10 Juli 2025',
      kategori: 'Program',
      penulis: 'Tim Gelimpah',
      ringkasan: 'Meluncurkan program Gelimpah yang fokus pada peningkatan literasi dan pemberdayaan ekonomi masyarakat Desa Gentan melalui berbagai pelatihan dan workshop.',
      gambar: '/images/berita/berita2.jpg'
    },
    {
      id: 3,
      judul: 'Kemitraan dengan UMKM Lokal dalam Pengembangan Produk Desa',
      tanggal: '8 Juli 2025',
      kategori: 'Kemitraan',
      penulis: 'Manajer UMKM',
      ringkasan: 'BUMDes Gentan menjalin kemitraan strategis dengan UMKM lokal untuk mengembangkan produk-produk unggulan desa yang memiliki nilai jual tinggi.',
      gambar: '/images/berita/berita3.jpg'
    },
    {
      id: 4,
      judul: 'Pelatihan Teknologi Digital untuk Pelaku Usaha Desa',
      tanggal: '5 Juli 2025',
      kategori: 'Pelatihan',
      penulis: 'Tim Digital',
      ringkasan: 'Mengadakan pelatihan teknologi digital dan e-commerce untuk meningkatkan kemampuan pelaku usaha desa dalam memasarkan produk secara online.',
      gambar: '/images/berita/berita4.jpg'
    },
    {
      id: 5,
      judul: 'Inovasi Pengolahan Limbah Organik Menjadi Pupuk Kompos',
      tanggal: '3 Juli 2025',
      kategori: 'Inovasi',
      penulis: 'Tim Lingkungan',
      ringkasan: 'Mengembangkan sistem pengolahan limbah organik menjadi pupuk kompos berkualitas tinggi sebagai bagian dari program pengelolaan lingkungan berkelanjutan.',
      gambar: '/images/berita/berita5.jpg'
    },
    {
      id: 6,
      judul: 'Workshop Kewirausahaan untuk Pemuda Desa Gentan',
      tanggal: '1 Juli 2025',
      kategori: 'Workshop',
      penulis: 'Koordinator Pemuda',
      ringkasan: 'Menyelenggarakan workshop kewirausahaan khusus untuk pemuda desa dengan tujuan menciptakan wirausaha muda yang inovatif dan mandiri.',
      gambar: '/images/berita/berita6.jpg'
    }
  ];

  const categories = ['Semua', 'Unit Usaha', 'Program', 'Kemitraan', 'Pelatihan', 'Inovasi', 'Workshop'];

  const filteredBerita = beritaList.filter(berita => {
    const matchesSearch = berita.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         berita.ringkasan.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || berita.kategori === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              Berita & Informasi
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Dapatkan informasi terkini tentang kegiatan, program, dan perkembangan 
              BUMDes Gentan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative flex-1 max-w-md"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari berita..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-custom focus:border-transparent transition-all duration-200"
              />
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-2"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-green-custom text-white'
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
        <div className="container-custom">
          {filteredBerita.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 text-lg">
                Tidak ada berita yang ditemukan untuk pencarian
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBerita.map((berita, index) => (
                <motion.article
                  key={berita.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 bg-green-custom rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">
                          {berita.id}
                        </span>
                      </div>
                      <p className="text-green-custom font-medium">
                        Foto Berita
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-green-custom" />
                      <span className="bg-green-100 text-green-custom text-xs font-medium px-2 py-1 rounded-full">
                        {berita.kategori}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 hover:text-green-custom transition-colors duration-200 cursor-pointer">
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

                    {/* Read More Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-green-custom text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
                    >
                      Baca Selengkapnya
                    </motion.button>
                  </div>
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
              <button className="bg-green-custom text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200">
                Muat Lebih Banyak
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}