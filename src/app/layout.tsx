// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BUMDes Gentan - Badan Usaha Milik Desa',
  description: 'Website resmi BUMDes Gentan - Membangun desa melalui kewirausahaan dan pemberdayaan masyarakat',
  keywords: 'BUMDes, Gentan, Desa, Usaha, Kewirausahaan, Pemberdayaan Masyarakat',
  authors: [{ name: 'BUMDes Gentan' }],
  openGraph: {
    title: 'BUMDes Gentan',
    description: 'Website resmi BUMDes Gentan',
    type: 'website',
    locale: 'id_ID',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}