'use client';

// src/components/home/BeritaSection.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, FileText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link dari next/link

const BeritaSection = () => {
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});

  // Mock data berita (pastikan ID ini konsisten dengan halaman /berita/[id])
  const mockBerita = [
    {
      id: 1,
      judul: 'Pelatihan Kewirausahaan untuk Masyarakat Desa Gentan',
      tanggal: '12 Juli 2025',
      tentang: 'Pelatihan',
      ringkasan: 'BUMDes Gentan mengadakan pelatihan kewirausahaan untuk meningkatkan kemampuan masyarakat dalam mengembangkan usaha mandiri. Pelatihan ini diikuti oleh 50 peserta dari berbagai kelompok masyarakat.',
      gambar: '/images/berita/berita1.jpg', // Pastikan gambar ini ada di public/images/berita/
      fallbackColor: 'from-emerald-100 to-emerald-200'
    },
    {
      id: 2,
      judul: 'Launching Unit Usaha Maggot sebagai Inovasi Baru',
      tanggal: '10 Juli 2025',
      tentang: 'Inovasi',
      ringkasan: 'BUMDes Gentan meluncurkan unit usaha budidaya maggot sebagai solusi inovatif pengelolaan sampah organik. Unit usaha ini diharapkan dapat memberikan nilai tambah ekonomi bagi masyarakat.',
      gambar: '/images/berita/berita2.jpg', // Pastikan gambar ini ada di public/images/berita/
      fallbackColor: 'from-blue-100 to-blue-200'
    },
    {
      id: 3, // Tambahkan berita ketiga ini jika Anda ingin 3 kartu
      judul: 'BUMDes Mangesti Sejahtera Hadirkan Program "GELIPAH"',
      tanggal: '18 Juli 2025',
      tentang: 'Program',
      ringkasan: 'BUMDes Mangesti Sejahtera meluncurkan program GELIPAH (Gentang Peduli Sampah) yang mengubah sampah menjadi tabungan emas untuk warga.',
      gambar: '/images/berita/berita3.jpg', // Pastikan gambar ini ada di public/images/berita/
      fallbackColor: 'from-purple-100 to-purple-200'
    },
  ];

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">BERITA TERKINI</h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Informasi terbaru tentang kegiatan dan perkembangan BUMDes Gentan
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {mockBerita.map((berita, index) => (
            <motion.article
              key={berita.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Wrap the whole card content in a Link */}
              <Link href={`/berita/${berita.id}`} passHref>
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  {!imageErrors[berita.id] ? (
                    <Image
                      src={berita.gambar} // Menggunakan gambar dari mockBerita
                      alt={berita.judul}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={() => handleImageError(berita.id)}
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${berita.fallbackColor} flex items-center justify-center`}>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-emerald-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                          <FileText className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-emerald-600 font-medium">Berita {berita.id}</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {berita.tentang}
                    </span>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>Admin</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{berita.tanggal}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors duration-200">
                    {berita.judul}
                  </h3>

                  {/* Summary */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {berita.ringkasan}
                  </p>

                  {/* Read More Button (now part of the Link wrapping the card) */}
                  <div className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2">
                    Baca Selengkapnya
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link> {/* Penutup Link untuk seluruh kartu */}
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/berita" passHref> {/* Mengarahkan ke halaman daftar berita */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg"
            >
              Lihat Semua Berita
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BeritaSection;