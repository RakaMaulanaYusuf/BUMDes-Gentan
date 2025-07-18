'use client';

// src/app/profile/page.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';
import Image from 'next/image';
import strukturOrganisasi from '../../../public/images/profile/image.png';

export default function ProfilePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const features = [
    {
      icon: Target,
      title: 'Visi',
      description: 'Mewujudkan BUM Desa yang handal dalam mengelola lingkungan untuk meningkatkan pembangunan, pendapatan dan kesejahteraan masyarakat desa'
    },
    {
      icon: Eye,
      title: 'Misi',
      description: [
        'Melakukan kegiatan usaha untuk mencari keuntungan berbasis sosial (sosiopreneur) serta untuk meningkatkan pendapatan asli desa;',
        'Memanfaatkan potensi sumber daya manusia dan alam yang ada di desa sebagai aset penggerak ekonomi lokal yang berorientasi pada kelestarian bumi dan lingkungan;',
        'Mengembangkan inovasi usaha melalui program strategis di bidang produksi pertanian, peternakan, perdagangan, pemasaran, industri, serta pariwisata yang bertujuan meningkatkan ketahanan pangan;',
        'Meningkatkan kompetensi dan daya saing usaha pedesaan secara mandiri dan profesional;',
        'Mewujudkan sinergi dan jejaring antar BUMDES dan usaha lain dalam meningkatkan hubungan yang saling menguntungkan;',
        'Meningkatkan partisipasi masyarakat dalam pembangunan sehingga dapat menumbuh kembangkan kesadaran dan kemandirian dalam pembangunan desa yang berkelanjutan;',
        'Menciptakan lapangan kerja bagi masyarakat kurang mampu yang ada didesa;',
        'Pengembangan usaha ekonomi melalui usaha simpan pinjam.'
      ]
    },
  ];

  // Data for Legal Basis
  const legalBasisData = {
    perdesNumber: 'No. 4 Tahun 2021',
    perdesDate: '10 September 2021',
    skPengurusNumber: 'No. 10 Tahun 2021',
    skPengurusDate: '13 September 2021',
    skKemenkumham: 'AHU-03958.AH.01.33.Tahun 2022 Tanggal 23 Mei 2022',
    npwp: '53.706.701.9-532.000',
  };

  if (!isClient) {
    // Render a loading state or a simpler static version for SEO/initial load
    // WARNA TEKS DISINI HARUS SESUAI DENGAN LATAR BELAKANG LOADING STATE
    return (
      <div className="pt-16 bg-[url('/images/background/background.jpg')] py-20 text-center">
        {/* Tambahkan overlay di sini juga jika latar belakang loadingnya gelap */}
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-5xl font-bold text-white mb-6">Loading Profile...</h1> {/* TEKS PUTIH UNTUK KONTRAST */}
        <p className="relative z-10 text-xl text-gray-200 max-w-3xl mx-auto"> {/* TEKS ABU-ABU TERANG UNTUK KONTRAST */}
          Please wait while we load the content.
        </p>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-sm"> {/* TEKS PUTIH */}
              Profil BUMDes Gentan
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white max-w-3xl mx-auto leading-relaxed"> {/* TEKS PUTIH */}
              Badan Usaha Milik Desa yang berkomitmen untuk memajukan perekonomian
              masyarakat Desa Gentan melalui berbagai unit usaha yang inovatif.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Tentang BUMDes Gentan
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 text-justify">
                BUMDes (Badan Usaha Milik Desa) Mangesti Sejahtera merupakan lembaga ekonomi desa Gentan
                yang dibentuk berdasarkan musyawarah masyarakat dan pemerintah Desa Gentan
                sebagai upaya untuk meningkatkan kesejahteraan warga melalui pengelolaan
                potensi lokal secara mandiri, profesional, dan berkelanjutan.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
              className="aspect-video lg:aspect-[4/3] bg-white rounded-lg flex items-center justify-center shadow-xl overflow-hidden group"
            >
              <Image
                src="/images/profile/Picture1.jpg"
                alt="Tentang BUMDes Gentan"
                width={1000}
                height={750}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section (Visi & Misi) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Visi & Misi Kami
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                {Array.isArray(feature.description) ? (
                  <ul className="text-gray-600 text-left leading-relaxed space-y-2 list-disc list-inside px-4">
                    {feature.description.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 text-center leading-relaxed text-lg md:text-xl italic">
                    {feature.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Basis Section */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Dasar Hukum
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white rounded-lg shadow-xl p-8 md:p-12 max-w-4xl mx-auto border border-gray-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Left Column */}
              <div className="space-y-4 pr-0 md:pr-6 border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0">
                <div className="text-gray-800">
                  <p className="font-bold text-lg mb-1">Nomor Perdes:</p>
                  <p className="text-gray-600 text-base">{legalBasisData.perdesNumber}</p>
                </div>
                <div className="text-gray-800">
                  <p className="font-bold text-lg mb-1">Tanggal Perdes:</p>
                  <p className="text-gray-600 text-base">{legalBasisData.perdesDate}</p>
                </div>
                <div className="text-gray-800">
                  <p className="font-bold text-lg mb-1">SK Pengurus:</p>
                  <p className="text-gray-600 text-base">{legalBasisData.skPengurusNumber}</p>
                </div>
                <div className="text-gray-800">
                  <p className="font-bold text-lg mb-1">Tanggal SK Pengurus:</p>
                  <p className="text-gray-600 text-base">{legalBasisData.skPengurusDate}</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4 pl-0 md:pl-6 pt-4 md:pt-0">
                <div className="text-gray-800">
                  <p className="font-bold text-lg mb-1">SK Kemenkumham:</p>
                  <p className="text-gray-600 text-base">{legalBasisData.skKemenkumham}</p>
                </div>
                <div className="text-gray-800">
                  <p className="font-bold text-lg mb-1">NPWP:</p>
                  <p className="text-gray-600 text-base">{legalBasisData.npwp}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Struktur Organisasi Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Struktur Organisasi BUMDes Gentan
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex justify-center p-4"
          >
            <Image
              src={strukturOrganisasi}
              alt="Struktur Organisasi BUMDes Gentan"
              width={1200}
              height={800}
              className="rounded-lg shadow-md max-w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}