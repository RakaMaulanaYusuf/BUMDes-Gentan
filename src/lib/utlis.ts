// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx";

// Fungsi sederhana tanpa tailwind-merge
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Mock data tetap sama...
export const mockBerita = [
  {
    id: 1,
    judul: "JUDUL BERITA",
    tanggal: "12 Juli 2025",
    tentang: "tentang apa isi Berita",
    gambar: "@/images/berita/berita1.png",
    ringkasan: "Ringkasan berita tentang kegiatan BUMDes Gentan yang baru saja dilaksanakan dengan antusias warga setempat."
  },
  {
    id: 2,
    judul: "JUDUL BERITA",
    tanggal: "10 Juli 2025",
    tentang: "tentang apa isi Berita",
    gambar: "@/images/berita/berita2.png",
    ringkasan: "Kegiatan pemberdayaan masyarakat melalui program BUMDes Gentan menunjukkan hasil yang positif."
  }
];

export const mockArsip = [
  { id: 1, gambar: "/images/arsip/arsip1.jpg", judul: "Kegiatan 1" },
  { id: 2, gambar: "/images/arsip/arsip2.jpg", judul: "Kegiatan 2" },
  { id: 3, gambar: "/images/arsip/arsip3.jpg", judul: "Kegiatan 3" },
  { id: 4, gambar: "/images/arsip/arsip4.jpg", judul: "Kegiatan 4" },
  { id: 5, gambar: "/images/arsip/arsip5.jpg", judul: "Kegiatan 5" },
  { id: 6, gambar: "/images/arsip/arsip6.jpg", judul: "Kegiatan 6" }
];

export const mockSlider = [
  { id: 1, gambar: "/images/slider/slide1.jpg", alt: "Slide 1" },
  { id: 2, gambar: "/images/slider/slide2.jpg", alt: "Slide 2" },
  { id: 3, gambar: "/images/slider/slide3.jpg", alt: "Slide 3" }
];