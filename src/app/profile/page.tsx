'use client';

// src/app/profile/page.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Eye, Award } from 'lucide-react';

export default function ProfilePage() {
  const features = [
    {
      icon: Target,
      title: 'Visi',
      description: 'Menjadi BUMDes yang mandiri dan berkelanjutan untuk kesejahteraan masyarakat Desa Gentan'
    },
    {
      icon: Eye,
      title: 'Misi',
      description: 'Mengembangkan potensi ekonomi desa melalui unit usaha yang inovatif dan pemberdayaan masyarakat'
    },
    {
      icon: Users,
      title: 'Tim',
      description: 'Didukung oleh tim profesional yang berpengalaman dalam pengembangan ekonomi desa'
    },
    {
      icon: Award,
      title: 'Prestasi',
      description: 'Telah meraih berbagai penghargaan dalam pengembangan ekonomi kreatif dan pemberdayaan masyarakat'
    }
  ];

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
              Profile BUMDes Gentan
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Badan Usaha Milik Desa yang berkomitmen untuk memajukan perekonomian 
              masyarakat Desa Gentan melalui berbagai unit usaha yang inovatif
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Tentang BUMDes Gentan
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                BUMDes Gentan didirikan dengan tujuan untuk mengoptimalkan potensi 
                ekonomi yang ada di Desa Gentan. Dengan semangat gotong royong dan 
                inovasi, kami mengembangkan berbagai unit usaha yang tidak hanya 
                menguntungkan secara ekonomi, tetapi juga berkelanjutan bagi lingkungan.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Melalui unit usaha seperti budidaya maggot, pengembangan UMKM, dan 
                program gelimpah (gerakan literasi dan pemberdayaan), kami berkomitmen 
                untuk menciptakan lapangan kerja dan meningkatkan kesejahteraan 
                masyarakat desa.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-[4/3] bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center"
            >
              <div className="text-center p-8">
                <div className="w-24 h-24 bg-green-custom rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-custom">
                  BUMDes Gentan
                </h3>
                <p className="text-gray-600 mt-2">
                  Membangun Bersama
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Visi, Misi & Nilai Kami
            </h2>
            <div className="w-24 h-1 bg-green-custom mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-green-custom rounded-full flex items-center justify-center mb-6 mx-auto">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-green-custom text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Pencapaian Kami
            </h2>
            <p className="text-xl text-green-100">
              Angka yang menunjukkan dampak positif BUMDes Gentan
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Anggota Aktif' },
              { number: '10+', label: 'Unit Usaha' },
              { number: '100+', label: 'Keluarga Terdampak' },
              { number: '5+', label: 'Tahun Berpengalaman' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-yellow-custom mb-2">
                  {stat.number}
                </div>
                <div className="text-green-100 text-lg">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}