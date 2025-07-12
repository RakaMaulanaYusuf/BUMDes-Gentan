// src/types/index.ts
export interface BeritaItem {
  id: number;
  judul: string;
  tanggal: string;
  tentang: string;
  gambar: string;
  ringkasan: string;
}

export interface ArsipItem {
  id: number;
  gambar: string;
  judul: string;
}

export interface SliderItem {
  id: number;
  gambar: string;
  alt: string;
}