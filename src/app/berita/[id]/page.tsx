'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';

export default function DetailBeritaPage() {
  const params = useParams();
  const router = useRouter();
  const beritaId = params.id ? parseInt(params.id as string, 10) : null; 

  const allBerita = [
    {
      id: 1,
      judul: 'Pengembangan Unit Usaha Maggot BSF untuk Pakan Ternak',
      tanggal: '12 Juli 2025',
      kategori: 'Unit Usaha',
      penulis: 'Admin BUMDes',
      ringkasan: 'BUMDes Gentan mengembangkan unit usaha budidaya maggot Black Soldier Fly sebagai alternatif pakan ternak yang berkelanjutan dan ramah lingkungan.',
      kontenLengkap: `
        <p class="mb-4 text-gray-700 text-lg leading-relaxed">
          Dalam upaya mewujudkan ketahanan pangan lokal dan mendukung praktik pertanian berkelanjutan, BUMDes Gentan dengan bangga meluncurkan unit usaha baru: budidaya maggot Black Soldier Fly (BSF). Maggot BSF dikenal sebagai sumber protein tinggi yang ideal untuk pakan ternak seperti ikan, ayam, dan bebek, serta memiliki kemampuan luar biasa dalam mengurai sampah organik.
        </p>
        <p class="mb-4 text-gray-700 text-lg leading-relaxed">
          Unit usaha ini berawal dari inisiatif kelompok pemuda desa yang melihat potensi besar dari limbah organik rumah tangga dan pasar desa. Dengan dukungan penuh dari BUMDes, mereka berhasil membangun fasilitas budidaya yang memadai dan mulai memproduksi maggot BSF secara massal. Proses budidaya maggot BSF relatif sederhana dan tidak memerlukan lahan yang luas, sehingga sangat cocok diterapkan di lingkungan pedesaan.
        </p>
        <p class="mb-4 text-gray-700 text-lg leading-relaxed">
          Manfaat dari unit usaha ini sangat beragam. Selain menyediakan alternatif pakan ternak yang lebih ekonomis dan berkualitas, budidaya maggot BSF juga berkontribusi pada pengelolaan sampah organik. Maggot mampu mengurai sampah dalam waktu singkat, mengurangi volume timbunan sampah, dan menghasilkan pupuk organik yang dapat digunakan kembali untuk pertanian. Ini menciptakan siklus ekonomi sirkular yang menguntungkan bagi lingkungan dan masyarakat.
        </p>
        <p class="mb-4 text-gray-700 text-lg leading-relaxed">
          Kedepannya, BUMDes Gentan berencana untuk memperluas kapasitas produksi maggot BSF dan menjalin kemitraan dengan peternak-peternak lokal. Diharapkan unit usaha ini tidak hanya meningkatkan pendapatan asli desa, tetapi juga menjadi contoh bagi desa-desa lain dalam mengembangkan solusi inovatif untuk tantangan pangan dan lingkungan. Partisipasi aktif masyarakat, khususnya para peternak dan pegiat lingkungan, sangat diharapkan untuk kesuksesan program ini.
        </p>
        <p class="text-gray-700 text-lg leading-relaxed italic">
          Mari bersama-sama mendukung inisiatif ini demi Gentan yang lebih hijau, mandiri, dan sejahtera!
        </p>
      `,
      gambar: '/images/berita/berita1.png' 
    },
    {
      id: 2,
      judul: 'Program Gelimpah: Gerakan Literasi dan Pemberdayaan Masyarakat',
      tanggal: '10 Juli 2025',
      kategori: 'Program',
      penulis: 'Tim Gelimpah',
      ringkasan: 'Meluncurkan program Gelimpah yang fokus pada peningkatan literasi dan pemberdayaan ekonomi masyarakat Desa Gentan melalui berbagai pelatihan dan workshop.',
      kontenLengkap: `
        <p class="mb-4 text-gray-700 text-lg leading-relaxed">
          BUMDes Gentan kembali menghadirkan program inovatif untuk kemajuan desa: "GELIMPAH" (Gerakan Literasi dan Pemberdayaan Masyarakat Berbasis Lingkungan). Program ini dirancang untuk meningkatkan kualitas hidup warga melalui peningkatan literasi, baik literasi baca tulis, literasi digital, maupun literasi keuangan, sekaligus memberdayakan masyarakat secara ekonomi.
        </p>
        <p class="mb-4 text-gray-700 text-lg leading-relaxed">
          Fokus utama GELIMPAH adalah menyelenggarakan berbagai pelatihan dan workshop yang relevan dengan kebutuhan masyarakat. Beberapa kegiatan yang telah berjalan antara lain:
        </p>
        <ul class="list-disc list-inside mb-4 text-gray-700 text-lg leading-relaxed pl-5">
          <li>Workshop pembuatan pupuk kompos dari sampah organik rumah tangga.</li>
          <li>Pelatihan dasar-dasar digital marketing untuk UMKM desa.</li>
          <li>Kelas literasi keuangan dan pengelolaan tabungan emas bekerja sama dengan Pegadaian.</li>
          <li>Sesi dongeng dan baca buku interaktif untuk anak-anak di perpustakaan desa.</li>
        </ul>
        <p class="mb-4 text-gray-700 text-lg leading-relaxed">
          Program GELIMPAH tidak hanya memberikan pengetahuan dan keterampilan baru, tetapi juga mendorong partisipasi aktif masyarakat dalam pembangunan desa. Dengan meningkatnya literasi dan keterampilan, diharapkan masyarakat Desa Gentan dapat lebih mandiri secara ekonomi dan mampu beradaptasi dengan perkembangan zaman.
        </p>
        <p class="text-gray-700 text-lg leading-relaxed italic">
          BUMDes Gentan percaya bahwa investasi pada pengetahuan dan pemberdayaan masyarakat adalah kunci utama untuk mencapai desa yang sejahtera dan berkelanjutan. Mari bergabung dan menjadi bagian dari Gerakan GELIMPAH!
        </p>
      `,
      gambar: '/images/berita/berita2.png' 
    },
    {
      id: 3,
      judul: 'BUMDes Mangesti Sejahtera Hadirkan Program "GELIPAH" Solusi Sampah Jadi Tabungan Emas untuk Warga Gentan',
      tanggal: '18 Juli 2025',
      kategori: 'Program',
      penulis: 'Admin BUMDes',
      ringkasan: 'BUMDes Mangesti Sejahtera meluncurkan program GELIPAH (Gentang Peduli Sampah) yang mengubah sampah menjadi tabungan emas, meningkatkan kesejahteraan dan kesadaran lingkungan.',
      kontenLengkap: `
        <p class="mb-4 text-gray-700 text-lg leading-relaxed">
          Gentan, 18 Juli 2025
        </p>
        <p class="mb-4 text-gray-700 text-lg leading-relaxed">
          Dalam rangka mendukung pelestarian lingkungan sekaligus pemberdayaan ekonomi masyarakat, BUMDes Mangesti Sejahtera meluncurkan program unggulan bernama GELIPAH, singkatan dari Gentan Peduli Sampah. Program ini merupakan unit usaha bank sampah yang mengajak masyarakat untuk mengelola sampah rumah tangga secara bijak dan berkelanjutan.
        </p>
        <p class="mb-4 text-gray-700 text-lg leading-relaxed">
          Melalui GELIPAH, warga Desa Gentan diajak untuk memilah sampah kering seperti plastik dan kertas dari rumah masing-masing. Sampah yang terkumpul akan dibeli oleh BUMDes, lalu dipilah kembali dan dikelompokkan berdasarkan jenisnya sebelum dijual ke pihak pengelola limbah. Uniknya, hasil penjualan sampah tidak dibayarkan dalam bentuk tunai, melainkan ditabung dalam bentuk tabungan emas melalui kerja sama resmi dengan PT Pegadaian (Persero).
        </p>
        <p class="mb-4 text-gray-700 text-lg leading-relaxed">
          Hingga pertengahan tahun 2025, program GELIPAH telah menjangkau 240 anggota, dengan 130 di antaranya telah menerima buku tabungan emas dari Pegadaian Cabang Purwosari, Surakarta. Kerja sama ini menjadi bagian dari program Agen Pegadaian yang dijalankan BUMDes Mangesti Sejahtera dalam memperluas akses layanan keuangan bagi masyarakat desa.
        </p>
        <p class="mb-4 text-gray-700 text-lg leading-relaxed">
          Program ini memberikan dampak positif yang nyata di tengah masyarakat. Selain membantu mengurangi volume sampah yang masuk ke TPS (Tempat Pembuangan Sementara), warga juga terdorong untuk lebih sadar akan pentingnya memilah sampah sejak dari rumah. Tak hanya itu, program ini juga memberikan edukasi tentang pentingnya menabung dan pengelolaan keuangan keluarga dengan cara yang sederhana dan ramah lingkungan.
        </p>
      `,
      gambar: '/images/berita/berita3.png' 
    },
  ];

  const berita = allBerita.find(b => b.id === beritaId);

  if (!berita) {
    return (
      <div className="pt-16 bg-red-100 min-h-screen flex flex-col items-center justify-center text-red-700">
        <h1 className="text-3xl font-bold mb-4">Berita Tidak Ditemukan</h1>
        <p className="text-lg">Mohon maaf, berita dengan ID {beritaId} tidak ada.</p>
        <button
          onClick={() => router.push('/berita')}
          className="mt-8 flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> Kembali ke Daftar Berita
        </button>
      </div>
    );
  }

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 bg-gradient-to-br from-emerald-600 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
            <Image
                src={berita.gambar}
                alt={berita.judul}
                layout="fill"
                objectFit="cover"
                quality={80}
                className="filter blur-sm scale-110"
            />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 bg-white bg-opacity-20 rounded-full px-4 py-1 text-sm font-medium mb-4">
              <Tag className="w-4 h-4" /> {berita.kategori}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight drop-shadow-md">
              {berita.judul}
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm md:text-base text-gray-200">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{berita.tanggal}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Oleh {berita.penulis}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg mx-auto text-gray-800 text-justify"
          >
            {/* Gambar Berita Utama */}
            <div className="mb-8 rounded-lg overflow-hidden shadow-xl aspect-video relative">
              <Image
                src={berita.gambar}
                alt={berita.judul}
                layout="fill"
                objectFit="cover"
                quality={90}
                priority
              />
            </div>
            <div dangerouslySetInnerHTML={{ __html: berita.kontenLengkap }} />
          </motion.div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => router.push('/berita')}
              className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white text-lg font-medium rounded-xl hover:bg-emerald-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <ArrowLeft className="w-6 h-6 mr-3" /> Kembali ke Daftar Berita
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}