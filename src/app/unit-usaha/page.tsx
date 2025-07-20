'use client';

// src/app/unit-usaha/page.tsx
import React, { useState, useEffect } from 'react';
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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const unitUsaha = [
    {
      id: 1,
      nama: 'GELIPAH',
      kategori: 'Pengelolaan Lingkungan & Ekonomi Sirkular',
      icon: Leaf,
      deskripsi: 'Bank Sampah “GELIPAH” (Gentan Peduli Sampah) merupakan inisiatif pengelolaan sampah kering rumah tangga yang dilakukan oleh BUMDes Gentan dengan membeli sampah dari warga, menyortirnya berdasarkan jenis plastik, dan hasil penjualannya ditabungkan dalam bentuk tabungan emas di Pegadaian. Program ini telah menjalin kerja sama resmi dengan PT. Pegadaian (Persero) dan memiliki 240 anggota aktif.',
      keunggulan: [
        'Inovatif: Mengonversi sampah menjadi nilai ekonomi berupa tabungan emas.',
        'Berbasis Komunitas: Melibatkan warga secara langsung dalam pengelolaan sampah.',
        'Berkelanjutan: Mendukung prinsip REDUCE dengan mengurangi sampah ke TPS.',
        'Kolaboratif: Didukung oleh kemitraan strategis dengan Pegadaian dan Pemerintah Desa.',
        'Meningkatkan Kesadaran: Menumbuhkan budaya peduli lingkungan di masyarakat.'
      ],
      status: 'Aktif',
      kontak: 'Raka - xxxx-xxxx-xxxx'
    },
    {
      id: 2,
      nama: 'ECO ENZYME',
      kategori: 'Lingkungan Hidup & Kesehatan Berkelanjutan',
      icon: BookOpen,
      deskripsi: 'Program pembuatan Eco Enzyme merupakan upaya memanfaatkan limbah organik rumah tangga seperti kulit buah, sisa buah, dan sayur segar untuk diolah menjadi cairan fermentasi alami yang berguna untuk berbagai keperluan rumah tangga, pertanian, dan kesehatan. Cairan ini dibuat dengan campuran molase/gula merah, limbah organik, dan air dalam perbandingan 1:3:10. Kegiatan ini mendukung prinsip REDUCE serta mendorong gaya hidup bebas bahan kimia.',
      keunggulan: [
        'Ramah Lingkungan: Mengurangi limbah organik dan mendukung daur ulang alami.',
        'Multifungsi: Dapat digunakan sebagai pembersih alami, pupuk organik, dan pengusir hama.',
        'Murah & Mudah Dibuat: Menggunakan bahan yang mudah ditemukan di rumah.',
        'Sehat: Mengurangi ketergantungan terhadap produk berbahan kimia sintetis.',
        'Meningkatkan Kesadaran Lingkungan: Menumbuhkan budaya ekologis di masyarakat.'
      ],
      status: 'Aktif',
      kontak: 'Raka - xxxx-xxxx-xxxx'
    },
    {
      id: 3,
      nama: 'PERDAGANGAN SEMBAKO',
      kategori: 'Perdagangan',
      icon: ShoppingBag,
      deskripsi: 'Unit usaha Perdagangan Sembako merupakan inisiatif BUMDes yang menyediakan berbagai kebutuhan bahan pokok untuk masyarakat, baik dalam partai kecil maupun besar secara tunai. Dimulai sejak April 2021, usaha ini bertujuan memenuhi kebutuhan pokok warga secara mudah dan terjangkau, serta memperkuat kemandirian ekonomi desa.',
      keunggulan: [
        'Melayani Langsung Warga: Menyediakan kebutuhan pokok tanpa harus jauh ke pasar.',
        'Fleksibel: Melayani penjualan dalam partai besar dan kecil.',
        'Dukungan Sosial: Membangun sinergi dengan Pemerintah Desa, RT/RW, dan lembaga desa lainnya.',
        'Mendorong Ekonomi Lokal: Perputaran uang tetap berada di lingkungan desa.',
        'Potensi Diperluas: Memiliki prospek pengembangan pelanggan melalui sosialisasi aktif.'
      ],
      status: 'Aktif',
      kontak: 'Raka - xxxx-xxxx-xxxx'
    },
    {
      id: 4,
      nama: 'LAYANAN PEMBAYARAN',
      kategori: 'Layanan Publik',
      icon: Recycle,
      deskripsi: 'Program Layanan Pembayaran BUMDes memberikan kemudahan bagi warga untuk melakukan pembayaran tagihan seperti listrik, telepon, PBB, dan lainnya langsung di kantor BUMDes. Saat ini, BUMDes telah menjalin kerja sama dengan PT. Bank Jateng dan PT. Pegadaian melalui skema Agen Pegadaian, guna memperluas akses layanan keuangan dan pembayaran di desa.',
      keunggulan: [
        'Mudah & Dekat: Warga tidak perlu pergi ke kota atau ATM untuk membayar tagihan.',
        'Akses Keuangan Lebih Luas: Mendekatkan layanan perbankan ke masyarakat desa.',
        'Cepat & Aman: Transaksi dilakukan melalui sistem kerja sama resmi dengan lembaga terpercaya.',
        'Meningkatkan Peran BUMDes: Menjadikan BUMDes sebagai pusat layanan keuangan desa.',
        'Mendukung Digitalisasi Desa: Mendorong literasi keuangan dan penggunaan layanan elektronik.'
      ],
      status: 'Aktif',
      kontak: 'Raka - xxxx-xxxx-xxxx'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Aktif':
        return 'bg-emerald-100 text-emerald-800';
      case 'Dalam Pengembangan':
        return 'bg-amber-100 text-amber-800';
      case 'Perencanaan':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isClient) {
    return (
      <div className="pt-16">
        <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Unit Usaha BUMDes
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Berbagai unit usaha yang dikembangkan BUMDes Gentan untuk 
                meningkatkan perekonomian dan kesejahteraan masyarakat desa
              </p>
            </div>
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
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Unit Usaha BUMDes
            </h1>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
              Berbagai unit usaha yang dikembangkan BUMDes Gentan untuk 
              meningkatkan perekonomian dan kesejahteraan masyarakat desa
            </p>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '0+', label: 'Unit Usaha', icon: ShoppingBag },
              { number: '0+', label: 'Produk & Layanan', icon: Leaf },
              { number: '0+', label: 'Mitra Usaha', icon: Users },
              { number: '0+', label: 'Tahun Pengalaman', icon: TrendingUp }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">
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
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Unit Usaha Kami
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
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
                      <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center">
                        <unit.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">
                          {unit.nama}
                        </h3>
                        <p className="text-emerald-600 font-medium">
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
                          <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tertarik Bermitra dengan Kami?
            </h2>
            <p className="text-lg md:text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan BUMDes Gentan untuk mengembangkan usaha 
              dan berkontribusi pada kemajuan ekonomi desa
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                Hubungi Kami
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Informasi Kontak
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: 'Alamat',
                content: ['Jl. Raya Songgolangit No. 4 Desa Gentan, Kecamatan Baki, Kabupaten Sukoharjo, Jawa Tengah 57194']
              },
              {
                icon: Phone,
                title: 'Telepon',
                content: ['0271.7650146', '0856-4200-6919','0821-3646-1270']
              },
              {
                icon: Mail,
                title: 'Email',
                content: ['bumdesmangestisejahtera@gmail.com']
              }
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
            className="mt-12 text-center p-8 bg-emerald-50 rounded-lg"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-emerald-600" />
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