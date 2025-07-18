'use client';

// src/components/layout/Footer.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    tentang: [
      { name: 'Profile BUMDes', href: '/profile' },
      { name: 'Visi & Misi', href: '/profile#visi-misi' },
      { name: 'Struktur Organisasi', href: '/profile#struktur' },
      { name: 'Sejarah', href: '/profile#sejarah' }
    ],
    layanan: [
      { name: 'Unit Usaha', href: '/unit-usaha' },
      { name: 'Maggot BSF', href: '/unit-usaha#maggot' },
      { name: 'Gelimpah', href: '/unit-usaha#gelimpah' },
      { name: 'UMKM Center', href: '/unit-usaha#umkm' }
    ],
    informasi: [
      { name: 'Berita', href: '/berita' },
      { name: 'Galeri', href: '/galeri' },
      { name: 'Download', href: '/download' },
      { name: 'FAQ', href: '/faq' }
    ]
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat',
      content: 'Jl. Raya Songgolangit No. 4 Desa Gentan, Kecamatan Baki, Kabupaten Sukoharjo, Jawa Tengah 57194'
    },
    {
      icon: Phone,
      title: 'Telepon',
      content: '0271.7650146 / 085642006919 082136461270'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'bumdesmangestisejahtera@gmail.com'
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      content: 'Senin - Jumat: 08:00 - 16:00 WIB'
    }
  ];

  const socialMedia = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-400' },
    { name: 'Youtube', icon: Youtube, href: '#', color: 'hover:text-red-400' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-emerald-400 mb-2">
                BUMDes GENTAN
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Badan Usaha Milik Desa yang berkomitmen membangun ekonomi desa melalui 
                unit usaha inovatif dan pemberdayaan masyarakat.
              </p>
            </div>

            {/* Social Media */}
            <div className="mb-6">
              <h4 className="font-semibold text-white mb-3">Ikuti Kami</h4>
              <div className="flex gap-3">
                {socialMedia.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-colors duration-200 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links - Tentang */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4">Tentang Kami</h4>
            <ul className="space-y-2">
              {footerLinks.tentang.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links - Layanan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4">Layanan</h4>
            <ul className="space-y-2">
              {footerLinks.layanan.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4">Kontak</h4>
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0">
                    <info.icon className="w-full h-full" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">{info.title}</p>
                    <p className="text-sm text-gray-300 leading-relaxed">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="font-semibold text-white mb-2">Newsletter</h4>
            <p className="text-gray-300 text-sm mb-4">
              Dapatkan update terbaru tentang program dan kegiatan BUMDes Gentan
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors duration-200"
              >
                Berlangganan
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <p className="text-gray-400 text-sm">
                © {currentYear} BUMDes Gentan. Semua hak cipta dilindungi.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6 text-sm"
            >
              <Link href="/privacy" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                Kebijakan Privasi
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                Syarat & Ketentuan
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                Sitemap
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-700 transition-colors duration-200 z-40"
        aria-label="Kembali ke atas"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;