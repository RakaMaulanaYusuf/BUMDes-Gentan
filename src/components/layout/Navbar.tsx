'use client';

// src/components/layout/Navbar.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  // Handle mounting to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMounted]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (!isMounted) return;
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isMounted]);

  const menuItems = [
    { name: 'BERANDA', path: '/' },
    { name: 'PROFILE', path: '/profile' },
    { name: 'BERITA', path: '/berita' },
    { name: 'GALERI', path: '/galeri' },
    { name: 'UNIT USAHA', path: '/unit-usaha' }
  ];

  // Don't render scroll-dependent styles until mounted
  if (!isMounted) {
    return (
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm transition-all duration-300">
        {/* Mengubah container-custom menjadi container mx-auto px-4 */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div>
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/images/logo/logo2.png" // Path relatif dari folder 'public'
                  alt="Logo BUMDes Gentan"
                  width={40} // Lebar yang diinginkan dalam piksel
                  height={40} // Tinggi yang diinginkan dalam piksel
                />
                <div className="text-2xl font-bold text-black">
                  BUMDes
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  GENTAN
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.path}
                    className={`text-sm font-medium transition-colors duration-200 hover:text-green-custom ${
                      pathname === item.path
                        ? 'text-black border-b-2 border-green-custom pb-1'
                        : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors relative z-60"
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        {/* Mengubah container-custom menjadi container mx-auto px-4 */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/" className="flex items-center space-x-2">
                <Image
                    src="/images/logo/logo2.png" // Path relatif dari folder 'public'
                    alt="Logo BUMDes Gentan"
                    width={40} // Lebar yang diinginkan dalam piksel
                    height={40} // Tinggi yang diinginkan dalam piksel
                  />
                <div className="text-2xl font-bold text-black">
                  BUMDes
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  GENTAN
                </div>
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={item.path}
                    className={`text-sm font-medium transition-colors duration-200 hover:text-green-custom ${
                      pathname === item.path
                        ? 'text-black border-b-2 border-green-custom pb-1'
                        : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors relative z-60"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 md:hidden bg-white"
          >
            {/* Background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white"></div>
            
            {/* Menu content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full px-6">
              {/* Logo in menu */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="mb-12"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-black mb-2">
                    BUMDes
                  </div>
                  <div className="text-lg text-gray-600 font-medium">
                    GENTAN
                  </div>
                </div>
              </motion.div>

              {/* Menu items */}
              <div className="space-y-8 text-center w-full">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: 0.3 + (index * 0.1), 
                      duration: 0.3,
                      ease: "easeOut" 
                    }}
                  >
                    <Link
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block py-4 px-8 text-2xl font-semibold transition-all duration-300 rounded-xl hover:bg-green-50 hover:text-green-custom hover:scale-105 ${
                        pathname === item.path
                          ? 'text-green-custom bg-green-50 border-2 border-green-custom'
                          : 'text-gray-700'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Close hint */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.3 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              >
                <p className="text-sm text-gray-500 text-center">
                  Tap anywhere or press ✕ to close
                </p>
              </motion.div>
            </div>

            {/* Clickable overlay to close menu */}
            <div 
              className="absolute inset-0 z-0" 
              onClick={() => setIsOpen(false)}
            ></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;