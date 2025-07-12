'use client';

// src/app/unit-usaha/page.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  Users, 
  ShoppingBag, 
  BookOpen, 
  Recycle, 
  TrendingUp,
  MapPin,
  Phone,
  Mail,
  Clock
} from 'lucide-react';

export default function UnitUsahaPage() {
  const unitUsaha = [
    {
      id: 1,
      nama: 'MAGGOT BSF',
      kategori: 'Budidaya',
      icon: Leaf,
      deskripsi: 'Unit usaha budidaya maggot Black Soldier Fly sebagai pakan ternak alternatif yang ramah lingkungan dan berkelanjutan.',
      keunggulan: [
        'Pakan ternak berkualitas tinggi',
        'Ramah lingkungan',
        'Siklus produksi cepat',
        'Modal relatif kecil'
      ],
      status: 'Aktif',
      kontak: 'Bu Sari - 0812-3456-7890'
    },
    {
      id: 2,
      nama: 'GELIMPAH',
      kategori: 'Pendidikan & Pemberdayaan',
      icon: BookOpen,
      deskripsi: 'Gerakan Literasi dan Pemberdayaan yang fokus pada peningkatan kemampuan masyarakat melalui berbagai program pelatihan dan workshop.',
      keunggulan: [
        'Program pelatihan beragam',
        'Sertifikat kompetensi',
        'Pendampingan berkelanjutan',
        'Jaringan kemitraan luas'
      ],
      status: 'Aktif',
      kontak: 'Pak Budi - 0813-4567-8901'
    },
    {
      id: 3,
      nama: 'UMKM CENTER',
      kategori: 'Perdagangan',
      icon: ShoppingBag,
      deskripsi: 'Pusat pengembangan dan pemasaran produk UMKM Desa Gentan dengan focus pada produk-produk unggulan lokal.',
      keunggulan: [
        'Platform pemasaran digital',
        'Branding profesional',
        'Distribusi yang luas',
        'Pendampingan bisnis'
      ],
      status: 'Aktif',
      kontak: 'Ibu Dewi - 0814-5678-9012'
    },
    {
      id: 4,
      nama: 'ECO WASTE',
      kategori: 'Lingkungan',
      icon: Recycle,
      deskripsi: 'Unit pengolahan limbah organik menjadi pupuk kompos dan produk ramah lingkungan lainnya.',
      keunggulan: [
        'Pengolahan limbah terpadu',
        'Pupuk organik berkualitas',
        'Mengurangi pencemaran',
        'Ekonomis dan efisien'
      ],
      status: 'Dalam Pengembangan',
      kontak: 'Pak Joko - 0815-6789-0123'
    },
    {
      id: 5,
      nama: 'AGRO TOURISM',
      kategori: 'Pariwisata',
      icon: MapPin,
      deskripsi: 'Pengembangan wisata agro yang menggabungkan edukasi pertanian dengan rekreasi keluarga.',
      keunggulan: [
        'Wisata edukatif',
        'Pengalaman langsung',
        'Paket keluarga lengkap',
        'Produk oleh-oleh khas'
      ],
      status: 'Perencanaan',
      kontak: 'Bu Maya - 0816-7890-1234'
    },
    {
      id: 6,
      nama: 'DIGITAL SERVICES',
      kategori: 'Teknologi',
      icon: TrendingUp,
      deskripsi: 'Layanan digital untuk mendukung transformasi digital UMKM dan pelaku usaha di Desa Gentan.',
      keunggulan: [
        'Website dan aplikasi',
        'Digital marketing',
        'E-commerce solutions',
        'Training digital'
      ],
      status: 'Aktif',
      kontak: 'Pak Andi - 0817-8901-2345'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Aktif':
        return 'bg-green-100 text-green-800';
      case 'Dalam Pengembangan':
        return 'bg-yellow-100 text-yellow-800';
      case 'Perencanaan':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
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
              Unit Usaha BUMDes
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Berbagai unit usaha yang dikembangkan BUMDes Gentan untuk 
              meningkatkan perekonomian dan kesejahteraan masyarakat desa
            </p>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '6+', label: 'Unit Usaha', icon: ShoppingBag },
              { number: '50+', label: 'Produk & Layanan', icon: Leaf },
              { number: '100+', label: 'Mitra Usaha', icon: Users },
              { number: '5+', label: 'Tahun Pengalaman', icon: TrendingUp }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-green-50 rounded-lg"
              >
                <div className="w-16 h-16 bg-green-custom rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-green-custom mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Unit Usaha Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Unit Usaha Kami
            </h2>
            <div className="w-24 h-1 bg-green-custom mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {unitUsaha.map((unit, index) => (
              <motion.div
                key={unit.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-green-custom rounded-full flex items-center justify-center">
                        <unit.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">
                          {unit.nama}
                        </h3>
                        <p className="text-green-custom font-medium">
                          {unit.kategori}
                        </p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(unit.status)}`}>
                      {unit.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {unit.deskripsi}
                  </p>

                  {/* Keunggulan */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Keunggulan:</h4>
                    <ul className="space-y-2">
                      {unit.keunggulan.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-600">
                          <div className="w-2 h-2 bg-green-custom rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact */}
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                    <Phone className="w-4 h-4" />
                    <span>Kontak: {unit.kontak}</span>
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-green-custom text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
                  >
                    Pelajari Lebih Lanjut
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-custom text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Tertarik Bermitra dengan Kami?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan BUMDes Gentan untuk mengembangkan usaha 
              dan berkontribusi pada kemajuan ekonomi desa
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-custom text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-yellow-400 transition-colors duration-200"
              >
                Hubungi Kami
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-green-custom transition-colors duration-200"
              >
                Download Proposal
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Informasi Kontak
            </h2>
            <div className="w-24 h-1 bg-green-custom mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: 'Alamat',
                content: ['Desa Gentan, Kecamatan Susukan', 'Kabupaten Semarang, Jawa Tengah', 'Kode Pos: 50773']
              },
              {
                icon: Phone,
                title: 'Telepon',
                content: ['+62 812-3456-7890', '+62 813-4567-8901', 'Whatsapp: +62 814-5678-9012']
              },
              {
                icon: Mail,
                title: 'Email',
                content: ['info@bumdesgentan.id', 'admin@bumdesgentan.id', 'marketing@bumdesgentan.id']
              }
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <div className="w-16 h-16 bg-green-custom rounded-full flex items-center justify-center mx-auto mb-4">
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {contact.title}
                </h3>
                <div className="space-y-2">
                  {contact.content.map((item, idx) => (
                    <p key={idx} className="text-gray-600">
                      {item}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Operating Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center p-8 bg-green-50 rounded-lg"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-green-custom" />
              <h3 className="text-xl font-bold text-gray-800">
                Jam Operasional
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
              <div>
                <p className="font-medium">Senin - Jumat</p>
                <p>08:00 - 16:00 WIB</p>
              </div>
              <div>
                <p className="font-medium">Sabtu</p>
                <p>08:00 - 12:00 WIB</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              *Minggu dan hari libur nasional tutup
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}