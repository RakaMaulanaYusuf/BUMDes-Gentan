'use client';

// src/components/layout/Footer.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, Facebook } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="bg-yellow-custom py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Logo Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-green-custom mb-2">
                BUMDes
              </div>
              <div className="text-lg text-gray-700 font-medium">
                GENTAN
              </div>
            </motion.div>

            {/* Address Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:text-right"
            >
              <h3 className="text-xl font-semibold text-green-custom mb-4">
                Alamat :
              </h3>
              <div className="text-gray-700 leading-relaxed">
                <p>Desa Gentan, Kecamatan Susukan</p>
                <p>Kabupaten Semarang, Jawa Tengah</p>
                <p>Kode Pos: 50773</p>
              </div>
            </motion.div>
          </div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center space-x-6"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-12 h-12 bg-green-custom rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-white" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-900 py-6">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <p className="text-gray-400 text-sm">
              Hak Cipta © 2025 BUMDes GENTAN | Bali. Sukaharja
            </p>
            
            {/* Social Icons Small */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={`bottom-${social.label}`}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;